/**
 * @license
 * Horn Torus 3D Viewer & Topographic Manifold
 * Visualización matemática del aparato psíquico de Freud vía Poincaré-Perelman
 */

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { VorstellungsMark, FacilitatedEdge, PartialDrive } from '../types/metapsychology';
import { RotateCw, Eye, Maximize2, Shield, Flame, Activity } from 'lucide-react';

interface HornTorus3DProps {
  marks: VorstellungsMark[];
  edges: FacilitatedEdge[];
  partialDrives: PartialDrive[];
  selectedMarkId: string | null;
  onSelectMark: (id: string) => void;
  anxietyRadiusDelta: number;
  ricciFlowSpeed: number;
  highlightedPulsionId: string | null;
}

export const HornTorus3D: React.FC<HornTorus3DProps> = ({
  marks,
  edges,
  partialDrives,
  selectedMarkId,
  onSelectMark,
  anxietyRadiusDelta,
  ricciFlowSpeed,
  highlightedPulsionId
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [viewMode, setViewMode] = useState<'horn_torus' | 'cross_section' | 's2xs1'>('horn_torus');
  const [curvatureView, setCurvatureView] = useState<'ricci' | 'pulsion' | 'defense'>('ricci');
  const [isAutoRotating, setIsAutoRotating] = useState(true);

  // References to keep THREE objects updated without recreating renderer
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const torusMeshRef = useRef<THREE.Mesh | null>(null);
  const marksGroupRef = useRef<THREE.Group | null>(null);
  const drivesGroupRef = useRef<THREE.Group | null>(null);
  const edgesGroupRef = useRef<THREE.Group | null>(null);
  const cuspGroupRef = useRef<THREE.Group | null>(null);
  const animFrameId = useRef<number | null>(null);

  // Horn torus parametric point generator
  // x = (R + r cos v) cos u
  // y = (R + r cos v) sin u
  // z = r sin v
  // For Horn Torus, R = 1, r = 0.96 (slightly smoothed to allow visual inspection of cusp)
  const getParametricPoint = (u: number, v: number, R = 1.0, r = 0.94): THREE.Vector3 => {
    const x = (R + r * Math.cos(v)) * Math.cos(u) * 2.2;
    const y = r * Math.sin(v) * 2.2; // Y is up in 3D
    const z = (R + r * Math.cos(v)) * Math.sin(u) * 2.2;
    return new THREE.Vector3(x, y, z);
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene & Camera
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x060913);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.6, 6.2);
    camera.lookAt(0, 0, 0);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 3. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x93c5fd, 0.8);
    dirLight1.position.set(5, 10, 7);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xf43f5e, 0.5);
    dirLight2.position.set(-5, -5, -5);
    scene.add(dirLight2);

    // 4. Create Horn Torus Geometry with vertex colors representing Ricci Curvature K
    const uSegments = 72;
    const vSegments = 48;
    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];
    const indices: number[] = [];

    for (let i = 0; i <= uSegments; i++) {
      const u = (i / uSegments) * Math.PI * 2;
      for (let j = 0; j <= vSegments; j++) {
        const v = (j / vSegments) * Math.PI * 2;
        const pt = getParametricPoint(u, v);
        positions.push(pt.x, pt.y, pt.z);

        // Gaussian Curvature calculation: K = cos(v) / (r * (R + r * cos(v)))
        // In the inner throat (near cusp, cos v -> -1), curvature becomes intensely negative or singular!
        const cosV = Math.cos(v);
        const throatProximity = (1 + cosV) / 2; // 0 at throat, 1 at outer equator

        // Shading palette: deep slate-blue on outer mantle, violet-crimson near cusp / marks
        const rColor = THREE.MathUtils.lerp(0.85, 0.12, throatProximity);
        const gColor = THREE.MathUtils.lerp(0.18, 0.28, throatProximity);
        const bColor = THREE.MathUtils.lerp(0.35, 0.65, throatProximity);
        colors.push(rColor, gColor, bColor);
      }
    }

    for (let i = 0; i < uSegments; i++) {
      for (let j = 0; j < vSegments; j++) {
        const a = i * (vSegments + 1) + j;
        const b = (i + 1) * (vSegments + 1) + j;
        const c = (i + 1) * (vSegments + 1) + (j + 1);
        const d = i * (vSegments + 1) + (j + 1);
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.35,
      metalness: 0.25,
      wireframe: false,
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide
    });

    const torusMesh = new THREE.Mesh(geometry, material);
    scene.add(torusMesh);
    torusMeshRef.current = torusMesh;

    // Subtle wireframe overlay
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.08
    });
    const wireMesh = new THREE.Mesh(geometry, wireMat);
    torusMesh.add(wireMesh);

    // Groups for dynamic elements
    const marksGroup = new THREE.Group();
    scene.add(marksGroup);
    marksGroupRef.current = marksGroup;

    const drivesGroup = new THREE.Group();
    scene.add(drivesGroup);
    drivesGroupRef.current = drivesGroup;

    const edgesGroup = new THREE.Group();
    scene.add(edgesGroup);
    edgesGroupRef.current = edgesGroup;

    const cuspGroup = new THREE.Group();
    scene.add(cuspGroup);
    cuspGroupRef.current = cuspGroup;

    // Create Cusp Funnel Visual at Origin (0,0,0)
    const cuspGeometry = new THREE.CylinderGeometry(0.02, 0.45, 0.7, 32, 1, true);
    const cuspMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      wireframe: true
    });
    const cuspConeUpper = new THREE.Mesh(cuspGeometry, cuspMaterial);
    cuspConeUpper.position.set(0, 0.35, 0);
    cuspGroup.add(cuspConeUpper);

    const cuspConeLower = new THREE.Mesh(cuspGeometry, cuspMaterial);
    cuspConeLower.rotation.x = Math.PI;
    cuspConeLower.position.set(0, -0.35, 0);
    cuspGroup.add(cuspConeLower);

    // Central Cusp point
    const cuspDotGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const cuspDotMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 1.0
    });
    const cuspDot = new THREE.Mesh(cuspDotGeo, cuspDotMat);
    cuspGroup.add(cuspDot);

    // Mouse Interaction for orbit and mark selection
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;

    const onMouseDown = (e: MouseEvent) => {
      isDragging = true;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevMouseX;
      const deltaY = e.clientY - prevMouseY;
      prevMouseX = e.clientX;
      prevMouseY = e.clientY;

      if (torusMeshRef.current) {
        torusMeshRef.current.rotation.y += deltaX * 0.008;
        torusMeshRef.current.rotation.x += deltaY * 0.008;
      }
    };

    const onMouseUp = () => {
      isDragging = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      camera.position.z = Math.max(3.2, Math.min(10, camera.position.z + e.deltaY * 0.005));
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('wheel', onWheel, { passive: false });

    // Click raycasting to select mark
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (e: MouseEvent) => {
      const rect = domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      if (marksGroupRef.current) {
        const intersects = raycaster.intersectObjects(marksGroupRef.current.children, true);
        if (intersects.length > 0) {
          const hit = intersects[0].object;
          if (hit.userData && hit.userData.markId) {
            onSelectMark(hit.userData.markId);
          }
        }
      }
    };
    domElement.addEventListener('click', onClick);

    // Resize handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let clock = new THREE.Clock();
    const animate = () => {
      animFrameId.current = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (isAutoRotating && !isDragging && torusMeshRef.current) {
        torusMeshRef.current.rotation.y += 0.003;
      }

      // Pulse the cusp acoustic funnel
      if (cuspGroupRef.current) {
        const pulse = 1 + Math.sin(elapsed * 3) * 0.12;
        cuspGroupRef.current.scale.set(pulse, pulse, pulse);
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      domElement.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      domElement.removeEventListener('wheel', onWheel);
      domElement.removeEventListener('click', onClick);
      window.removeEventListener('resize', onResize);
      renderer.dispose();
    };
  }, []);

  // Update dynamic elements (Marks, Pulsion cycles, Edges) when props change
  useEffect(() => {
    if (!marksGroupRef.current || !drivesGroupRef.current || !edgesGroupRef.current || !torusMeshRef.current) return;

    // Clear old dynamic objects
    while (marksGroupRef.current.children.length > 0) {
      marksGroupRef.current.remove(marksGroupRef.current.children[0]);
    }
    while (drivesGroupRef.current.children.length > 0) {
      drivesGroupRef.current.remove(drivesGroupRef.current.children[0]);
    }
    while (edgesGroupRef.current.children.length > 0) {
      edgesGroupRef.current.remove(edgesGroupRef.current.children[0]);
    }

    // Attach dynamic groups to TorusMesh so they rotate synchronously with the surface
    torusMeshRef.current.add(marksGroupRef.current);
    torusMeshRef.current.add(drivesGroupRef.current);
    torusMeshRef.current.add(edgesGroupRef.current);

    const markPositions: Record<string, THREE.Vector3> = {};

    // 1. Render Vorstellungsrepräsentanzen (Nodes)
    marks.forEach((mark) => {
      const pt = getParametricPoint(mark.u, mark.v);
      markPositions[mark.id] = pt;

      const isSelected = mark.id === selectedMarkId;
      const isPrimal = mark.isPrimal;

      // Sphere geometry for mark
      const radius = isPrimal ? 0.22 : 0.14 + (mark.charge / 12) * 0.08;
      const markGeo = new THREE.SphereGeometry(radius, 24, 24);

      let color = 0x64748b; // slate
      let emissive = 0x1e293b;
      if (isPrimal) {
        color = 0xef4444; // crimson
        emissive = 0xb91c1c;
      } else if (mark.state === 'active') {
        color = isSelected ? 0x38bdf8 : 0xf59e0b; // sky or amber
        emissive = isSelected ? 0x0284c7 : 0xd97706;
      }

      const markMat = new THREE.MeshStandardMaterial({
        color,
        emissive,
        emissiveIntensity: isSelected ? 0.9 : 0.5,
        roughness: 0.2
      });

      const markMesh = new THREE.Mesh(markGeo, markMat);
      markMesh.position.copy(pt);
      markMesh.userData = { markId: mark.id };

      // Halo for selected or primal mark
      if (isSelected || isPrimal) {
        const haloGeo = new THREE.RingGeometry(radius * 1.3, radius * 1.8, 24);
        const haloMat = new THREE.MeshBasicMaterial({
          color: isPrimal ? 0xf43f5e : 0x38bdf8,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.7
        });
        const halo = new THREE.Mesh(haloGeo, haloMat);
        halo.lookAt(pt.clone().multiplyScalar(2));
        markMesh.add(halo);
      }

      // Anxiety wall (borde rígido de angustia señal: kg = 1/δ) around primal core n
      if (isPrimal) {
        const wallRadius = anxietyRadiusDelta * 1.8;
        const wallCurve = new THREE.EllipseCurve(0, 0, wallRadius, wallRadius, 0, 2 * Math.PI, false, 0);
        const wallPoints = wallCurve.getPoints(48);
        const wallGeo = new THREE.BufferGeometry().setFromPoints(wallPoints.map(p => new THREE.Vector3(p.x, p.y, 0)));
        const wallMat = new THREE.LineDashedMaterial({
          color: 0xf43f5e,
          dashSize: 0.1,
          gapSize: 0.05,
          linewidth: 2
        });
        const wallLine = new THREE.Line(wallGeo, wallMat);
        wallLine.computeLineDistances();
        wallLine.position.copy(pt);
        wallLine.lookAt(pt.clone().multiplyScalar(2));
        marksGroupRef.current?.add(wallLine);
      }

      marksGroupRef.current?.add(markMesh);
    });

    // 2. Render Bahnung Graph Edges (Γ_θ)
    edges.forEach((edge) => {
      const srcPt = markPositions[edge.source];
      const tgtPt = markPositions[edge.target];
      if (!srcPt || !tgtPt) return;

      // Arc geodetic path curvature along surface
      const midPt = srcPt.clone().add(tgtPt).multiplyScalar(0.5);
      midPt.normalize().multiplyScalar(srcPt.length() * 1.08); // curve outwards slightly

      const curve = new THREE.QuadraticBezierCurve3(srcPt, midPt, tgtPt);
      const points = curve.getPoints(24);
      const edgeGeo = new THREE.BufferGeometry().setFromPoints(points);

      const edgeMat = new THREE.LineBasicMaterial({
        color: edge.isCarryingPulsion ? 0xf59e0b : 0x475569,
        linewidth: edge.isCarryingPulsion ? 3 : 1,
        transparent: true,
        opacity: edge.isCarryingPulsion ? 0.85 : 0.35
      });

      const line = new THREE.Line(edgeGeo, edgeMat);
      edgesGroupRef.current?.add(line);
    });

    // 3. Render Concentric Partial Drive Cycles orbiting n
    const primalMark = marks.find(m => m.isPrimal);
    if (primalMark) {
      const nPos = markPositions[primalMark.id];
      if (nPos) {
        partialDrives.forEach((drive) => {
          const isHighlighted = highlightedPulsionId === drive.id;
          const driveR = drive.radius * 2.2;

          if (drive.passesThroughCusp) {
            // Deformed curve of Invocative drive passing through Cusp c
            const cuspPos = new THREE.Vector3(0, 0, 0);
            const midP1 = nPos.clone().lerp(cuspPos, 0.45).add(new THREE.Vector3(0, 0.3, 0));
            const midP2 = cuspPos.clone().lerp(nPos, 0.45).add(new THREE.Vector3(0, -0.3, 0));
            const invocativeCurve = new THREE.CubicBezierCurve3(nPos, midP1, cuspPos, midP2);
            const invocPoints = invocativeCurve.getPoints(40);
            const invocGeo = new THREE.BufferGeometry().setFromPoints(invocPoints);
            const invocMat = new THREE.LineBasicMaterial({
              color: new THREE.Color(drive.color),
              linewidth: isHighlighted ? 4 : 2,
              transparent: true,
              opacity: isHighlighted ? 1.0 : 0.75
            });
            const line = new THREE.Line(invocGeo, invocMat);
            drivesGroupRef.current?.add(line);
          } else {
            // Planar circle orbiting n at radius δ_k
            const circleCurve = new THREE.EllipseCurve(0, 0, driveR, driveR, 0, 2 * Math.PI, false, 0);
            const cPoints = circleCurve.getPoints(40);
            const cGeo = new THREE.BufferGeometry().setFromPoints(cPoints.map(p => new THREE.Vector3(p.x, p.y, 0)));
            const cMat = new THREE.LineBasicMaterial({
              color: new THREE.Color(drive.color),
              linewidth: isHighlighted ? 4 : 2,
              transparent: true,
              opacity: isHighlighted ? 1.0 : 0.65
            });
            const circleLine = new THREE.Line(cGeo, cMat);
            circleLine.position.copy(nPos);
            circleLine.lookAt(nPos.clone().multiplyScalar(2));
            drivesGroupRef.current?.add(circleLine);
          }
        });
      }
    }
  }, [marks, edges, partialDrives, selectedMarkId, anxietyRadiusDelta, highlightedPulsionId]);

  return (
    <div className="relative w-full h-[520px] rounded-xl overflow-hidden border border-slate-800 bg-[#060913] shadow-2xl">
      {/* 3D WebGL Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Floating Top Control Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        {/* Left: Indicator title and status */}
        <div className="bg-slate-900/80 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700/60 pointer-events-auto">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span className="text-xs font-semibold text-slate-100 tracking-wide">
              {viewMode === 'horn_torus' ? 'Horn Torus S (r = R)' : viewMode === 'cross_section' ? 'Sección Cúspide c' : 'Variedad 3D S² × S¹'}
            </span>
            <span className="text-xs text-slate-400">·</span>
            <span className="text-xs font-mono-tabular text-cyan-300">π₁(S) ≅ ℤ</span>
          </div>
          <div className="text-[11px] text-slate-400 mt-0.5">
            Arrastra para rotar · Rueda para zoom · Clic en marcas
          </div>
        </div>

        {/* Right: View Toggles & Rotation */}
        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => setIsAutoRotating(!isAutoRotating)}
            className={`px-3 py-1.5 text-xs rounded-lg border transition-colors flex items-center gap-1.5 ${
              isAutoRotating
                ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300'
                : 'bg-slate-900/80 border-slate-700 text-slate-400 hover:text-slate-200'
            }`}
          >
            <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
            <span>Rotación</span>
          </button>

          <div className="flex items-center bg-slate-900/80 backdrop-blur-md p-1 rounded-lg border border-slate-700/60">
            <button
              onClick={() => setCurvatureView('ricci')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                curvatureView === 'ricci' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Curvatura Ricci
            </button>
            <button
              onClick={() => setCurvatureView('pulsion')}
              className={`px-2.5 py-1 text-xs font-medium rounded transition-colors ${
                curvatureView === 'pulsion' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Pulsiones {highlightedPulsionId ? `(${highlightedPulsionId})` : ''}
            </button>
          </div>
        </div>
      </div>

      {/* Floating Bottom Legend */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3 bg-slate-900/85 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700/60 pointer-events-auto text-[11px]">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-sm" />
            <span className="text-slate-300">Núcleo n (Fantasma)</span>
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-slate-300">Marcas VT (Trauma)</span>
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
            <span className="text-slate-300">Cúspide c (Orificio)</span>
          </div>
          <span className="text-slate-600">|</span>
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-1 border-t-2 border-dashed border-red-400" />
            <span className="text-slate-300">Pared Angustia (kg=1/δ)</span>
          </div>
        </div>

        <div className="bg-slate-900/85 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700/60 pointer-events-auto text-[11px] font-mono-tabular text-slate-300">
          δ = {anxietyRadiusDelta.toFixed(2)} · kg = {(1 / anxietyRadiusDelta).toFixed(1)}
        </div>
      </div>
    </div>
  );
};

/**
 * @license
 * Módulo de Mapa de Curvatura Gaussiana en el Horn Torus
 * Visualización en tiempo real de Fuga Sintomática (K > 0) y Contrainvestidura del Yo (K < 0)
 * Metapsicología freudiana y geometría diferencial de Gauss-Bonnet / Ricci
 */

import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import { VorstellungsMark } from '../types/metapsychology';
import { RotateCw, Activity, Shield, Flame, AlertCircle, Compass, Zap, Layers, RefreshCw } from 'lucide-react';

interface CurvatureMapModuleProps {
  marks: VorstellungsMark[];
  symptomLeakage: number;
  egoBoundEnergy: number;
  anxietyRadiusDelta: number;
  onUpdateSymptomLeakage?: (val: number) => void;
}

export const CurvatureMapModule: React.FC<CurvatureMapModuleProps> = ({
  marks,
  symptomLeakage: initialSymptom,
  egoBoundEnergy,
  anxietyRadiusDelta
}) => {
  // Interactive modulators
  const [symptomIntensity, setSymptomIntensity] = useState<number>(initialSymptom || 3.2);
  const [egoDefenseStiffness, setEgoDefenseStiffness] = useState<number>(3.8);
  const [pinchingRatio, setPinchingRatio] = useState<number>(0.95); // r/R: 0.6 to 1.0
  const [colorScheme, setColorScheme] = useState<'divergent' | 'neon' | 'heat'>('divergent');
  const [isAutoRotating, setIsAutoRotating] = useState<boolean>(true);
  const [hoveredPoint, setHoveredPoint] = useState<{
    u: number;
    v: number;
    K: number;
    k1: number;
    k2: number;
    regionType: 'symptom' | 'parabolic' | 'defense';
    description: string;
  } | null>({
    u: 0,
    v: 0,
    K: 1.05,
    k1: 1.05,
    k2: 1.0,
    regionType: 'symptom',
    description: 'Ecuador exterior: Curvatura positiva máxima. Zona de desborde y conversión somática.'
  });

  // Clinical Preset Presets
  const applyPreset = (preset: 'obsessional' | 'hysteria' | 'sublimation' | 'acute') => {
    switch (preset) {
      case 'obsessional':
        setEgoDefenseStiffness(6.5);
        setSymptomIntensity(1.2);
        setPinchingRatio(0.92);
        break;
      case 'hysteria':
        setEgoDefenseStiffness(1.8);
        setSymptomIntensity(6.2);
        setPinchingRatio(0.94);
        break;
      case 'sublimation':
        setEgoDefenseStiffness(3.5);
        setSymptomIntensity(2.4);
        setPinchingRatio(0.85);
        break;
      case 'acute':
        setEgoDefenseStiffness(5.2);
        setSymptomIntensity(5.8);
        setPinchingRatio(0.99); // Near exact Horn Torus cusp singularity!
        break;
    }
  };

  // 3D Three.js canvas mount
  const mountRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const torusMeshRef = useRef<THREE.Mesh | null>(null);
  const animFrameId = useRef<number | null>(null);
  const probeMarkerRef = useRef<THREE.Mesh | null>(null);

  // Analytical Gaussian Curvature computation
  // For torus: K(v) = cos(v) / (r * (R + r * cos(v)))
  // R = 1.0, r = pinchingRatio
  const computeGaussianCurvature = (v: number, r = pinchingRatio, R = 1.0) => {
    const cosV = Math.cos(v);
    const denom = r * (R + r * cosV);
    const baseK = cosV / Math.max(0.015, denom);

    // Dynamic metapsychological modulation:
    // If cosV > 0 (outer equator): enhanced by symptom intensity
    // If cosV < 0 (inner saddle): enhanced by ego defense stiffness
    let perturbedK = baseK;
    if (cosV > 0) {
      perturbedK += (symptomIntensity / 5.0) * cosV * 1.8;
    } else {
      perturbedK += (egoDefenseStiffness / 5.0) * cosV * 2.2;
    }

    return perturbedK;
  };

  // 3D Geometry generator
  const getParametricPoint = (u: number, v: number, R = 1.0, r = pinchingRatio) => {
    const scale = 2.0;
    const x = (R + r * Math.cos(v)) * Math.cos(u) * scale;
    const y = r * Math.sin(v) * scale;
    const z = (R + r * Math.cos(v)) * Math.sin(u) * scale;
    return new THREE.Vector3(x, y, z);
  };

  // Divergent Colormap generator
  // Positive Curvature (K > 0): Gold / Amber to Fiery Crimson (Symptom leakage)
  // Zero Curvature (K = 0): Subtle Silver / Slate line
  // Negative Curvature (K < 0): Royal Blue to Deep Indigo (Ego defense)
  const getCurvatureColor = (K: number) => {
    const color = new THREE.Color();
    const maxK = 3.5;
    const clamped = Math.max(-maxK, Math.min(maxK, K));

    if (clamped > 0) {
      // Positive Curvature: 0 -> Gold (0.9, 0.7, 0.1), maxK -> Crimson (0.95, 0.15, 0.25)
      const t = clamped / maxK;
      color.setRGB(
        0.8 + 0.18 * t,
        0.65 * (1 - t) + 0.15 * t,
        0.15 * (1 - t) + 0.25 * t
      );
    } else {
      // Negative Curvature: 0 -> Ice Blue (0.2, 0.5, 0.8), -maxK -> Deep Indigo/Purple (0.12, 0.18, 0.7)
      const t = Math.abs(clamped) / maxK;
      color.setRGB(
        0.15 * (1 - t) + 0.12 * t,
        0.55 * (1 - t) + 0.22 * t,
        0.85 * (1 - t) + 0.88 * t
      );
    }
    return color;
  };

  // Initialize and Update Three.js scene
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;
    scene.background = new THREE.Color(0x060913);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 3.8, 6.0);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    const lightTop = new THREE.DirectionalLight(0xffffff, 0.9);
    lightTop.position.set(5, 10, 7);
    scene.add(lightTop);

    const lightUnder = new THREE.DirectionalLight(0x38bdf8, 0.4);
    lightUnder.position.set(-5, -8, -5);
    scene.add(lightUnder);

    // Build Mesh with dynamic vertex colors
    const uSegments = 80;
    const vSegments = 56;
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

        const K = computeGaussianCurvature(v);
        const col = getCurvatureColor(K);
        colors.push(col.r, col.g, col.b);
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
      roughness: 0.3,
      metalness: 0.15,
      side: THREE.DoubleSide
    });

    const torusMesh = new THREE.Mesh(geometry, material);
    scene.add(torusMesh);
    torusMeshRef.current = torusMesh;

    // Parabolic zero-curvature inflection circles at v = pi/2 and v = 3pi/2
    const addInflectionRing = (vTarget: number) => {
      const ringPts: THREE.Vector3[] = [];
      for (let i = 0; i <= 64; i++) {
        const u = (i / 64) * Math.PI * 2;
        ringPts.push(getParametricPoint(u, vTarget));
      }
      const ringGeo = new THREE.BufferGeometry().setFromPoints(ringPts);
      const ringMat = new THREE.LineBasicMaterial({
        color: 0xffffff,
        linewidth: 2,
        transparent: true,
        opacity: 0.75
      });
      const ring = new THREE.Line(ringGeo, ringMat);
      torusMesh.add(ring);
    };
    addInflectionRing(Math.PI / 2);
    addInflectionRing((3 * Math.PI) / 2);

    // Interactive Probe Marker (sphere on surface)
    const probeGeo = new THREE.SphereGeometry(0.1, 16, 16);
    const probeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const probeMesh = new THREE.Mesh(probeGeo, probeMat);
    probeMesh.position.copy(getParametricPoint(0, 0));
    torusMesh.add(probeMesh);
    probeMarkerRef.current = probeMesh;

    // Mouse Controls
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
      camera.position.z = Math.max(3.0, Math.min(10.0, camera.position.z + e.deltaY * 0.005));
    };

    const domElement = renderer.domElement;
    domElement.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    domElement.addEventListener('wheel', onWheel, { passive: false });

    // Click on mesh to probe curvature
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (e: MouseEvent) => {
      const rect = domElement.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      if (torusMeshRef.current) {
        const intersects = raycaster.intersectObject(torusMeshRef.current);
        if (intersects.length > 0 && intersects[0].point) {
          const pt = intersects[0].point;
          // Approximate parametric coordinates u, v from point
          const angleU = Math.atan2(pt.z, pt.x);
          const uNorm = (angleU + Math.PI * 2) % (Math.PI * 2);
          const rDist = Math.sqrt(pt.x * pt.x + pt.z * pt.z) / 2.0 - 1.0;
          const yNorm = pt.y / 2.0;
          const angleV = (Math.atan2(yNorm, rDist) + Math.PI * 2) % (Math.PI * 2);

          const KVal = computeGaussianCurvature(angleV);
          const region = KVal > 0.1 ? 'symptom' : KVal < -0.1 ? 'defense' : 'parabolic';

          let desc = '';
          if (region === 'symptom') {
            desc = 'Zona de Fuga Sintomática: Curvatura de Gauss positiva (K > 0). El Yo fracasa en ligar el afecto, que desborda en conversión somática o desliz verbal.';
          } else if (region === 'defense') {
            desc = 'Zona de Contrainvestidura (Gegenbesetzung): Curvatura hiperbólica negativa (K < 0). El Yo gasta energía métrica contrayendo la garganta hacia la cúspide c.';
          } else {
            desc = 'Frontera de Inflexión Parabólica (K = 0): Umbral de transición geodésica entre la defensa preconsciente y la manifestación sintomática exterior.';
          }

          setHoveredPoint({
            u: uNorm,
            v: angleV,
            K: KVal,
            k1: Math.sqrt(Math.abs(KVal)),
            k2: KVal / Math.max(0.01, Math.sqrt(Math.abs(KVal))),
            regionType: region,
            description: desc
          });

          if (probeMarkerRef.current) {
            probeMarkerRef.current.position.copy(pt);
          }
        }
      }
    };
    domElement.addEventListener('click', onClick);

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
    const animate = () => {
      animFrameId.current = requestAnimationFrame(animate);
      if (isAutoRotating && !isDragging && torusMeshRef.current) {
        torusMeshRef.current.rotation.y += 0.003;
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
  }, [symptomIntensity, egoDefenseStiffness, pinchingRatio, isAutoRotating]);

  // Profile data of K(v) for SVG curve chart
  const profilePoints = useMemo(() => {
    const pts: { v: number; K: number; x: number; y: number }[] = [];
    const count = 100;
    for (let i = 0; i <= count; i++) {
      const v = (i / count) * Math.PI * 2;
      const K = computeGaussianCurvature(v);
      pts.push({ v, K, x: i, y: K });
    }
    return pts;
  }, [symptomIntensity, egoDefenseStiffness, pinchingRatio]);

  // Curvature integration checks
  const totalSymptomArea = useMemo(() => {
    return profilePoints.filter(p => p.K > 0).reduce((acc, p) => acc + p.K, 0) / 10;
  }, [profilePoints]);

  const totalDefenseArea = useMemo(() => {
    return Math.abs(profilePoints.filter(p => p.K < 0).reduce((acc, p) => acc + p.K, 0) / 10);
  }, [profilePoints]);

  return (
    <div className="space-y-6">
      {/* Module Title & Introduction */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-display font-semibold text-slate-100 flex items-center gap-2">
            <span>Mapa de Curvatura Gaussiana en el Horn Torus</span>
            <span className="text-xs font-normal font-sans text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
              K(u, v) = cos v / [r (R + r cos v)]
            </span>
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            Mapeo analítico riguroso: las regiones convexas de <span className="text-amber-400 font-medium">curvatura positiva (K &gt; 0)</span> corresponden al <span className="text-amber-300 font-medium">desborde sintomático</span> y conversión somática, 
            mientras que la garganta interior hiperbólica de <span className="text-cyan-400 font-medium">curvatura negativa (K &lt; 0)</span> materializa la <span className="text-cyan-300 font-medium">contrainvestidura del Yo</span> (*Gegenbesetzung*).
          </p>
        </div>

        {/* Clinical Presets */}
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          <span className="text-slate-500 text-[11px] whitespace-nowrap">Cuadro Clínico:</span>
          <button
            onClick={() => applyPreset('hysteria')}
            className="px-2.5 py-1 bg-amber-950/60 hover:bg-amber-900/60 text-amber-300 border border-amber-800/60 rounded text-xs transition-colors"
          >
            Histeria (K &gt; 0)
          </button>
          <button
            onClick={() => applyPreset('obsessional')}
            className="px-2.5 py-1 bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-800/60 rounded text-xs transition-colors"
          >
            Neurosis Obsesiva (K &lt; 0)
          </button>
          <button
            onClick={() => applyPreset('acute')}
            className="px-2.5 py-1 bg-red-950/60 hover:bg-red-900/60 text-red-300 border border-red-800/60 rounded text-xs transition-colors"
          >
            Angustia Cúspide
          </button>
          <button
            onClick={() => applyPreset('sublimation')}
            className="px-2.5 py-1 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 rounded text-xs transition-colors"
          >
            Sublimación
          </button>
        </div>
      </div>

      {/* Main Grid: 3D Torus Heatmap + Probe & Profiles */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: 3D Curvature Viewport */}
        <div className="lg:col-span-8 space-y-3">
          <div className="relative w-full h-[520px] rounded-xl overflow-hidden border border-slate-800 bg-[#060913] shadow-2xl">
            {/* Canvas Mount */}
            <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

            {/* Top Overlay Indicator */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="bg-slate-900/85 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-700/60 pointer-events-auto">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-xs font-semibold text-slate-100 tracking-wide">
                    Métrica de Gauss-Ricci en Vivo
                  </span>
                  <span className="text-xs text-slate-400">·</span>
                  <span className="text-xs font-mono-tabular text-cyan-300">r/R = {pinchingRatio.toFixed(2)}</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">
                  Haz clic en cualquier punto de la superficie para sondear curvatura K
                </div>
              </div>

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
              </div>
            </div>

            {/* Bottom Color Scale Legend */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
              <div className="bg-slate-900/90 backdrop-blur-md px-4 py-2.5 rounded-lg border border-slate-700/60 pointer-events-auto text-xs space-y-1.5 max-w-lg">
                <div className="flex items-center justify-between text-[11px] font-mono-tabular">
                  <span className="text-cyan-400 font-semibold">Contrainvestidura (K &lt; 0)</span>
                  <span className="text-slate-400">Inflexión (K = 0)</span>
                  <span className="text-amber-400 font-semibold">Fuga Sintomática (K &gt; 0)</span>
                </div>
                {/* Visual Gradient Bar */}
                <div className="w-full h-3 rounded-full bg-gradient-to-r from-blue-700 via-cyan-400 via-slate-300 to-amber-500 to-rose-600 border border-slate-700" />
                <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono-tabular">
                  <span>-3.5 (Silla interior)</span>
                  <span>Anillos Parabólicos (v = ±π/2)</span>
                  <span>+3.5 (Ecuador exterior)</span>
                </div>
              </div>

              <div className="hidden sm:block bg-slate-900/90 backdrop-blur-md px-3 py-2 rounded-lg border border-slate-700/60 pointer-events-auto text-[11px] font-mono-tabular text-slate-300">
                Gauss-Bonnet: ∫ K dA = 0
              </div>
            </div>
          </div>

          {/* Interactive Modulators Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
            {/* Slider 1: Symptom Intensity */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-amber-300 font-medium flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 text-amber-400" />
                  <span>Fuga Sintomática (y_sint)</span>
                </span>
                <span className="font-mono-tabular text-amber-400 font-semibold">{symptomIntensity.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.2"
                value={symptomIntensity}
                onChange={(e) => setSymptomIntensity(parseFloat(e.target.value))}
                className="w-full accent-amber-500"
              />
              <div className="text-[10px] text-slate-500">Expande la curvatura positiva ecuatorial</div>
            </div>

            {/* Slider 2: Ego Defense Stiffness */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-cyan-300 font-medium flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Contrainvestidura (Yo)</span>
                </span>
                <span className="font-mono-tabular text-cyan-400 font-semibold">{egoDefenseStiffness.toFixed(1)}</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="8.0"
                step="0.2"
                value={egoDefenseStiffness}
                onChange={(e) => setEgoDefenseStiffness(parseFloat(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-[10px] text-slate-500">Profundiza el pozo hiperbólico en la garganta</div>
            </div>

            {/* Slider 3: Pinching Ratio r/R */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300 font-medium flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-slate-400" />
                  <span>Pinzamiento Horn (r/R)</span>
                </span>
                <span className="font-mono-tabular text-slate-200 font-semibold">{pinchingRatio.toFixed(2)}</span>
              </div>
              <input
                type="range"
                min="0.65"
                max="0.99"
                step="0.01"
                value={pinchingRatio}
                onChange={(e) => setPinchingRatio(parseFloat(e.target.value))}
                className="w-full accent-slate-400"
              />
              <div className="text-[10px] text-slate-500">
                {pinchingRatio >= 0.98 ? 'Cúspide singular c alcanzada' : 'Toro regular suave'}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Local Probe Inspector & Mathematical Interpretation */}
        <div className="lg:col-span-4 space-y-4">
          {/* Probe Inspector Card */}
          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-cyan-400 font-mono-tabular uppercase tracking-wider">
                Sonda Local de Curvatura
              </span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                  hoveredPoint?.regionType === 'symptom'
                    ? 'bg-amber-950 text-amber-300 border border-amber-800'
                    : hoveredPoint?.regionType === 'defense'
                    ? 'bg-blue-950 text-cyan-300 border border-blue-800'
                    : 'bg-slate-950 text-slate-300 border border-slate-700'
                }`}
              >
                {hoveredPoint?.regionType === 'symptom'
                  ? 'K > 0 · Fuga Sintomática'
                  : hoveredPoint?.regionType === 'defense'
                  ? 'K < 0 · Contrainvestidura'
                  : 'K = 0 · Inflexión'}
              </span>
            </div>

            {hoveredPoint && (
              <div className="space-y-3">
                <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800 space-y-2 text-xs font-mono-tabular">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Curvatura Gaussiana K:</span>
                    <span
                      className={`font-semibold text-sm ${
                        hoveredPoint.K > 0 ? 'text-amber-400' : hoveredPoint.K < 0 ? 'text-cyan-400' : 'text-slate-300'
                      }`}
                    >
                      {hoveredPoint.K > 0 ? '+' : ''}{hoveredPoint.K.toFixed(3)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Curvaturas Principales (k₁, k₂):</span>
                    <span className="text-slate-300">
                      {hoveredPoint.k1.toFixed(2)}, {hoveredPoint.k2.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Curvatura Escalar Ricci (R = 2K):</span>
                    <span className="text-slate-200">{(hoveredPoint.K * 2).toFixed(3)}</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-slate-800/80 pt-1.5 text-[11px]">
                    <span className="text-slate-500">Coordenadas Poloidales (u, v):</span>
                    <span className="text-slate-400">
                      {(hoveredPoint.u / Math.PI).toFixed(2)}π, {(hoveredPoint.v / Math.PI).toFixed(2)}π
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-slate-950/40 rounded-lg border border-slate-800/60 text-xs text-slate-300 leading-relaxed">
                  {hoveredPoint.description}
                </div>
              </div>
            )}
          </div>

          {/* Curvature Cross-Section Profile K(v) */}
          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300">Perfil Transversal K(v) de 0 a 2π</span>
              <span className="text-[10px] font-mono-tabular text-slate-500">Corte Meridional</span>
            </div>

            {/* SVG Profile Curve */}
            <div className="w-full h-32 bg-slate-950 rounded-lg border border-slate-800 relative overflow-hidden flex items-center">
              <svg viewBox="0 0 100 80" className="w-full h-full" preserveAspectRatio="none">
                {/* Zero line */}
                <line x1="0" y1="40" x2="100" y2="40" stroke="#475569" strokeDasharray="2,2" strokeWidth="0.8" />

                {/* Shaded Areas: Positive (top) and Negative (bottom) */}
                <path
                  d={`M 0 40 ${profilePoints
                    .map((p) => {
                      const svgY = 40 - Math.max(-35, Math.min(35, p.K * 10));
                      return `L ${p.x} ${svgY}`;
                    })
                    .join(' ')} L 100 40 Z`}
                  fill="url(#curvatureGradient)"
                  opacity="0.35"
                />

                {/* Line Curve */}
                <path
                  d={`M 0 ${40 - Math.max(-35, Math.min(35, profilePoints[0].K * 10))} ${profilePoints
                    .map((p) => {
                      const svgY = 40 - Math.max(-35, Math.min(35, p.K * 10));
                      return `L ${p.x} ${svgY}`;
                    })
                    .join(' ')}`}
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="1.8"
                />

                <defs>
                  <linearGradient id="curvatureGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#2563eb" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Labels on profile */}
              <div className="absolute top-1.5 left-2 text-[10px] text-amber-400 font-mono-tabular font-medium">
                +K (Symptom Leak)
              </div>
              <div className="absolute bottom-1.5 right-2 text-[10px] text-blue-400 font-mono-tabular font-medium">
                -K (Ego Defense)
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 left-2 text-[9px] text-slate-500 font-mono-tabular">
                v = 0 (Ecuador)
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-2 text-[9px] text-slate-500 font-mono-tabular">
                v = π (Cúspide)
              </div>
            </div>

            {/* Energetic Gauss-Bonnet Balance Balance */}
            <div className="grid grid-cols-2 gap-2 text-[11px] font-mono-tabular">
              <div className="p-2 bg-slate-950/70 rounded border border-slate-800/80">
                <span className="text-slate-400">Área Sintomática (+K):</span>
                <span className="block font-semibold text-amber-400 mt-0.5">+{totalSymptomArea.toFixed(2)}</span>
              </div>
              <div className="p-2 bg-slate-950/70 rounded border border-slate-800/80">
                <span className="text-slate-400">Área Defensiva (-K):</span>
                <span className="block font-semibold text-cyan-400 mt-0.5">-{totalDefenseArea.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Metapsychological Insight Card */}
          <div className="p-4 bg-cyan-950/20 rounded-xl border border-cyan-900/40 text-xs space-y-2">
            <span className="text-cyan-400 font-semibold font-mono-tabular flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" />
              <span>Dialéctica Geométrica de la Neurosis</span>
            </span>
            <p className="text-slate-300 text-[11px] leading-relaxed">
              En el toro cerrado, el teorema de Gauss-Bonnet establece que <span className="font-mono-tabular text-cyan-300">∫_S K dA = 2π χ(S) = 0</span>. 
              Toda intensificación de la contrainvestidura en la garganta interior (K &lt; 0) <span className="text-amber-300 font-medium">debe pagarse obligatoriamente</span> con un aumento equivalente de la curvatura sintomática positiva en el exterior (K &gt; 0). 
              El Yo no puede reprimir sin generar excedente sintomático.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

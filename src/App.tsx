/**
 * @license
 * Metapsicología Freudiana & Modelo de Poincaré-Perelman
 * Aplicación principal: Modelo Analógico del Inconsciente, Procesos Primarios y Dinámica Psíquica
 */

import React, { useState } from 'react';
import { TopNav } from './components/TopNav';
import { HornTorus3D } from './components/HornTorus3D';
import { PrimaryProcessLab } from './components/PrimaryProcessLab';
import { RepressionRicciEngine } from './components/RepressionRicciEngine';
import { PsychicTriadDynamics } from './components/PsychicTriadDynamics';
import { SurgicalClinicalLab } from './components/SurgicalClinicalLab';
import { AxiomaticCorpusViewer } from './components/AxiomaticCorpusViewer';
import { CurvatureMapModule } from './components/CurvatureMapModule';
import {
  INITIAL_MARKS,
  INITIAL_EDGES,
  PARTIAL_DRIVES,
  INITIAL_SI_PAIRS
} from './data/thesisCorpus';
import { VorstellungsMark, FacilitatedEdge, PartialDrive, MemoryPairSI } from './types/metapsychology';
import { Shield, Sparkles, AlertCircle, ArrowRight, BookOpen, Layers, Flame, Brain, Award, Compass } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<
    'topology_3d' | 'curvature_map' | 'primary_processes' | 'repression_ricci' | 'psychic_triad' | 'surgical_lab' | 'axiomatic_corpus'
  >('topology_3d');

  // Metapsychological State
  const [marks, setMarks] = useState<VorstellungsMark[]>(INITIAL_MARKS);
  const [edges, setEdges] = useState<FacilitatedEdge[]>(INITIAL_EDGES);
  const [partialDrives] = useState<PartialDrive[]>(PARTIAL_DRIVES);
  const [memoryPairs, setMemoryPairs] = useState<MemoryPairSI[]>(INITIAL_SI_PAIRS);

  // Dynamic parameters
  const [anxietyRadiusDelta, setAnxietyRadiusDelta] = useState<number>(0.35);
  const [ricciFlowSpeed, setRicciFlowSpeed] = useState<number>(1.0);
  const [selectedMarkId, setSelectedMarkId] = useState<string | null>('mark_n');
  const [highlightedPulsionId, setHighlightedPulsionId] = useState<string | null>(null);

  // Instancias energetics
  const [idQuantityQ, setIdQuantityQ] = useState<number>(14.2);
  const [endogenousDriveRate, setEndogenousDriveRate] = useState<number>(1.8);
  const [egoBoundEnergy, setEgoBoundEnergy] = useState<number>(8.4);
  const [egoRicciEntropyW, setEgoRicciEntropyW] = useState<number>(-2.15);
  const [superegoAcousticInput, setSuperegoAcousticInput] = useState<number>(3.2);
  const [egoVoiceOutput, setEgoVoiceOutput] = useState<number>(2.8);
  const [symptomLeakage, setSymptomLeakage] = useState<number>(0.4);

  // Selected mark details
  const selectedMark = marks.find((m) => m.id === selectedMarkId) || marks[0];

  // Actions
  const handleTriggerCondensation = (sourceId: string, targetId: string) => {
    setMarks((prev) => {
      const src = prev.find((m) => m.id === sourceId);
      const tgt = prev.find((m) => m.id === targetId);
      if (!src || !tgt) return prev;

      const transferred = Math.min(src.charge, 2.5);
      return prev.map((m) => {
        if (m.id === sourceId) return { ...m, charge: Math.max(0.2, m.charge - transferred) };
        if (m.id === targetId) return { ...m, charge: m.charge + transferred, state: 'active' };
        return m;
      });
    });
  };

  const handleTriggerDisplacement = (fromId: string, toId: string, amount: number) => {
    setMarks((prev) => {
      const src = prev.find((m) => m.id === fromId);
      if (!src) return prev;
      const actualAmount = Math.min(src.charge - 0.2, amount);

      return prev.map((m) => {
        if (m.id === fromId) return { ...m, charge: Math.max(0.2, m.charge - actualAmount) };
        if (m.id === toId) return { ...m, charge: m.charge + actualAmount, state: 'active' };
        return m;
      });
    });

    // Update edge flux along connection
    setEdges((prev) =>
      prev.map((e) => {
        if ((e.source === fromId && e.target === toId) || (e.source === toId && e.target === fromId)) {
          return { ...e, flux: e.flux + amount, isCarryingPulsion: true };
        }
        return e;
      })
    );
  };

  const handleTriggerNachtraglichkeit = (markId: string, magnitude: number) => {
    const maturationGain = 1.45; // g(t) >= 1
    const associationCoeff = 0.85; // kappa
    const deltaCharge = maturationGain * associationCoeff * magnitude;

    setMarks((prev) =>
      prev.map((m) => {
        if (m.id === markId) {
          const newCharge = m.charge + deltaCharge;
          return {
            ...m,
            charge: newCharge,
            state: newCharge >= m.threshold ? 'active' : m.state
          };
        }
        return m;
      })
    );

    // Provokes secondary ego tension
    setEgoBoundEnergy((prev) => prev + deltaCharge * 0.4);
    setSymptomLeakage((prev) => prev + deltaCharge * 0.2);
  };

  const handleUpdateMarkCharge = (markId: string, newCharge: number) => {
    setMarks((prev) =>
      prev.map((m) => (m.id === markId ? { ...m, charge: newCharge, state: newCharge >= m.threshold ? 'active' : m.state } : m))
    );
  };

  const handleStepRicciFlow = () => {
    // Smoothes internal metric tension K
    setEgoRicciEntropyW((prev) => prev + 0.12 * ricciFlowSpeed);
    setSymptomLeakage((prev) => Math.max(0, prev - 0.15 * ricciFlowSpeed));
  };

  const handleInjectSuperegoCommand = (command: string, intensity: number) => {
    setSuperegoAcousticInput((prev) => prev + intensity * 0.5);
    setSymptomLeakage((prev) => prev + intensity * 0.35);
    setEgoVoiceOutput((prev) => prev + intensity * 0.2);

    // May create an S-I memory pair fixed by the command
    const newPair: MemoryPairSI = {
      id: `si_${Date.now()}`,
      symbolicWord: `«${command}»`,
      imaginaryThing: 'Imperativo paterno interiorizado',
      bindingStrength: 0.9,
      decayRate: 0.0,
      origin: 'nebenmensch_fixed'
    };
    setMemoryPairs((prev) => [newPair, ...prev]);
  };

  const handleStimulateIdDrive = (amount: number) => {
    setIdQuantityQ((prev) => prev + amount);
    setEdges((prev) => prev.map((e) => ({ ...e, flux: e.flux + amount * 0.25 })));
  };

  const handlePerformSurgery = (markId: string) => {
    setMarks((prev) =>
      prev.map((m) => {
        if (m.id === markId && !m.isPrimal) {
          return { ...m, charge: 0, state: 'latent' };
        }
        return m;
      })
    );

    setEdges((prev) =>
      prev.map((e) => {
        if (e.source === markId || e.target === markId) {
          return { ...e, isCarryingPulsion: false, flux: 0 };
        }
        return e;
      })
    );

    // Relieves symptom leakage and ego exhaustion
    setSymptomLeakage((prev) => Math.max(0, prev - 0.4));
  };

  const handleResetSimulation = () => {
    setMarks(INITIAL_MARKS);
    setEdges(INITIAL_EDGES);
    setMemoryPairs(INITIAL_SI_PAIRS);
    setAnxietyRadiusDelta(0.35);
    setIdQuantityQ(14.2);
    setEgoBoundEnergy(8.4);
    setEgoRicciEntropyW(-2.15);
    setSuperegoAcousticInput(3.2);
    setEgoVoiceOutput(2.8);
    setSymptomLeakage(0.4);
    setSelectedMarkId('mark_n');
    setHighlightedPulsionId(null);
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Bar following 3-Zone Contract */}
      <TopNav
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onResetSimulation={handleResetSimulation}
      />

      {/* Sub-header on Mobile / Small screens */}
      <div className="lg:hidden flex items-center gap-2 overflow-x-auto px-6 py-2.5 bg-slate-950 border-b border-slate-800 text-xs">
        <button
          onClick={() => setActiveTab('topology_3d')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${activeTab === 'topology_3d' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
        >
          Topología 3D
        </button>
        <button
          onClick={() => setActiveTab('curvature_map')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${activeTab === 'curvature_map' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
        >
          Mapa Curvatura
        </button>
        <button
          onClick={() => setActiveTab('primary_processes')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${activeTab === 'primary_processes' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
        >
          Procesos Primarios
        </button>
        <button
          onClick={() => setActiveTab('repression_ricci')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${activeTab === 'repression_ricci' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
        >
          Represión & Ricci
        </button>
        <button
          onClick={() => setActiveTab('psychic_triad')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${activeTab === 'psychic_triad' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
        >
          Ello · Yo · Superyó
        </button>
        <button
          onClick={() => setActiveTab('surgical_lab')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${activeTab === 'surgical_lab' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
        >
          Cirugía & Fantasma
        </button>
        <button
          onClick={() => setActiveTab('axiomatic_corpus')}
          className={`px-3 py-1 rounded-md whitespace-nowrap ${activeTab === 'axiomatic_corpus' ? 'bg-cyan-600 text-white' : 'text-slate-400'}`}
        >
          Axiomas & Fuentes
        </button>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* VIEW 1: TOPOLOGÍA 3D & HORN TORUS */}
        {activeTab === 'topology_3d' && (
          <div className="space-y-6">
            {/* Topographic Overview Hero */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* 3D Canvas */}
              <div className="lg:col-span-8 space-y-3">
                <HornTorus3D
                  marks={marks}
                  edges={edges}
                  partialDrives={partialDrives}
                  selectedMarkId={selectedMarkId}
                  onSelectMark={setSelectedMarkId}
                  anxietyRadiusDelta={anxietyRadiusDelta}
                  ricciFlowSpeed={ricciFlowSpeed}
                  highlightedPulsionId={highlightedPulsionId}
                />
                <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 font-mono-tabular">
                  <span>Mapeo: Superficie Horn Torus S (r = R = 1)</span>
                  <span>Cúspide central c = (0,0,0) · Orificio u(t) ↔ y(t)</span>
                </div>
              </div>

              {/* Right Side Panel: Mark Inspector & Psychic State */}
              <div className="lg:col-span-4 space-y-4">
                {/* Node Inspector */}
                <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-cyan-400 font-mono-tabular uppercase tracking-wider">
                      Inspección de Marca VR
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-medium ${
                        selectedMark.isPrimal
                          ? 'bg-red-950 text-red-300 border border-red-800'
                          : selectedMark.state === 'active'
                          ? 'bg-amber-950 text-amber-300 border border-amber-800'
                          : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {selectedMark.isPrimal ? 'Núcleo Primario' : selectedMark.state}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-slate-100">{selectedMark.name}</h3>
                    <div className="text-xs text-amber-400 font-mono-tabular mt-0.5">{selectedMark.originalTerm}</div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {selectedMark.description}
                  </p>

                  <div className="p-3 bg-slate-950/80 rounded-lg border border-slate-800/80 space-y-2 text-xs">
                    <div className="flex items-center justify-between font-mono-tabular">
                      <span className="text-slate-400">Carga Afectiva a_i:</span>
                      <span className="text-amber-300 font-semibold">{selectedMark.charge.toFixed(2)} Q</span>
                    </div>
                    <div className="flex items-center justify-between font-mono-tabular">
                      <span className="text-slate-400">Curvatura Geodésica k_g:</span>
                      <span className="text-cyan-300 font-semibold">
                        {selectedMark.isPrimal ? (1 / anxietyRadiusDelta).toFixed(2) : Math.sqrt(selectedMark.charge).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-mono-tabular">
                      <span className="text-slate-400">Estatuto de Cirugía:</span>
                      <span className={selectedMark.isPrimal ? 'text-red-400 font-semibold' : 'text-emerald-400 font-medium'}>
                        {selectedMark.isPrimal ? 'Inoperable / Indestructible' : 'Cuello Operable'}
                      </span>
                    </div>
                  </div>

                  {selectedMark.gwCitation && (
                    <div className="text-[11px] text-slate-400 border-t border-slate-800/80 pt-2 font-sans">
                      <strong className="text-slate-300">Fuente:</strong> {selectedMark.gwCitation}
                    </div>
                  )}
                </div>

                {/* Quick Interactive Actions */}
                <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2.5">
                  <div className="text-xs font-semibold text-slate-300">Acciones sobre la Marca Seleccionada:</div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleUpdateMarkCharge(selectedMark.id, selectedMark.charge + 1.5)}
                      className="py-1.5 px-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded transition-colors"
                    >
                      +1.5 Investidura
                    </button>
                    <button
                      onClick={() => handleTriggerNachtraglichkeit(selectedMark.id, 2.0)}
                      disabled={selectedMark.isPrimal}
                      className="py-1.5 px-2 bg-amber-600/80 hover:bg-amber-600 disabled:opacity-40 text-white text-xs rounded transition-colors"
                    >
                      Nachträglichkeit
                    </button>
                  </div>
                </div>

                {/* Mathematical Invariants Mini Banner */}
                <div className="bg-cyan-950/20 border border-cyan-900/40 p-4 rounded-xl text-xs space-y-2">
                  <div className="text-cyan-400 font-semibold font-mono-tabular">Invariantes Fundamentales</div>
                  <div className="text-slate-300 leading-relaxed text-[11px]">
                    El lazo de la fantasía pertenece a la clase no nula en <span className="font-mono-tabular text-cyan-300">π₁(S) ≅ ℤ</span>. 
                    En la cúspide <span className="font-mono-tabular">c</span>, el flujo de Ricci suave se desactiva: se trata como el orificio del Superyó.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Navigation Cards to Deep Modules */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              <div
                onClick={() => setActiveTab('curvature_map')}
                className="p-4 bg-slate-900/40 hover:bg-slate-900/80 rounded-xl border border-slate-800 cursor-pointer transition-all space-y-1.5"
              >
                <div className="text-xs font-semibold text-amber-400 font-mono-tabular flex items-center justify-between">
                  <span>Módulo 01</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-sm font-semibold text-slate-200">Mapa Curvatura</h4>
                <p className="text-xs text-slate-400">Curvatura Gaussiana en vivo: Fuga sintomática (K &gt; 0) vs Contrainvestidura (K &lt; 0).</p>
              </div>

              <div
                onClick={() => setActiveTab('primary_processes')}
                className="p-4 bg-slate-900/40 hover:bg-slate-900/80 rounded-xl border border-slate-800 cursor-pointer transition-all space-y-1.5"
              >
                <div className="text-xs font-semibold text-cyan-400 font-mono-tabular flex items-center justify-between">
                  <span>Módulo 02</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-sm font-semibold text-slate-200">Procesos Primarios</h4>
                <p className="text-xs text-slate-400">Condensación, desplazamiento libre y atemporalidad del Icc.</p>
              </div>

              <div
                onClick={() => setActiveTab('repression_ricci')}
                className="p-4 bg-slate-900/40 hover:bg-slate-900/80 rounded-xl border border-slate-800 cursor-pointer transition-all space-y-1.5"
              >
                <div className="text-xs font-semibold text-amber-400 font-mono-tabular flex items-center justify-between">
                  <span>Módulo 03</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-sm font-semibold text-slate-200">Represión & Ricci</h4>
                <p className="text-xs text-slate-400">Borde de Gianniotis, angustia señal y conservación de Gauss–Bonnet.</p>
              </div>

              <div
                onClick={() => setActiveTab('psychic_triad')}
                className="p-4 bg-slate-900/40 hover:bg-slate-900/80 rounded-xl border border-slate-800 cursor-pointer transition-all space-y-1.5"
              >
                <div className="text-xs font-semibold text-rose-400 font-mono-tabular flex items-center justify-between">
                  <span>Módulo 04</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-sm font-semibold text-slate-200">Ello · Yo · Superyó</h4>
                <p className="text-xs text-slate-400">Segunda tópica, Hörkappe acústica y fuga sintomática.</p>
              </div>

              <div
                onClick={() => setActiveTab('surgical_lab')}
                className="p-4 bg-slate-900/40 hover:bg-slate-900/80 rounded-xl border border-slate-800 cursor-pointer transition-all space-y-1.5"
              >
                <div className="text-xs font-semibold text-emerald-400 font-mono-tabular flex items-center justify-between">
                  <span>Módulo 05</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
                <h4 className="text-sm font-semibold text-slate-200">Cirugía & Fantasma</h4>
                <p className="text-xs text-slate-400">Extracción de cuellos, Pegan a un niño y reconstrucción inversa.</p>
              </div>
            </div>
          </div>
        )}

        {/* VIEW: MAPA DE CURVATURA GAUSSIANA */}
        {activeTab === 'curvature_map' && (
          <CurvatureMapModule
            marks={marks}
            symptomLeakage={symptomLeakage}
            egoBoundEnergy={egoBoundEnergy}
            anxietyRadiusDelta={anxietyRadiusDelta}
            onUpdateSymptomLeakage={setSymptomLeakage}
          />
        )}

        {/* VIEW 2: PROCESOS PRIMARIOS */}
        {activeTab === 'primary_processes' && (
          <PrimaryProcessLab
            marks={marks}
            edges={edges}
            onTriggerCondensation={handleTriggerCondensation}
            onTriggerDisplacement={handleTriggerDisplacement}
            onTriggerNachtraglichkeit={handleTriggerNachtraglichkeit}
            anxietyRadiusDelta={anxietyRadiusDelta}
          />
        )}

        {/* VIEW 3: REPRESIÓN & FLUJO DE RICCI */}
        {activeTab === 'repression_ricci' && (
          <RepressionRicciEngine
            marks={marks}
            anxietyRadiusDelta={anxietyRadiusDelta}
            onUpdateAnxietyRadius={setAnxietyRadiusDelta}
            onUpdateMarkCharge={handleUpdateMarkCharge}
            ricciFlowSpeed={ricciFlowSpeed}
            onUpdateRicciSpeed={setRicciFlowSpeed}
            onStepRicciFlow={handleStepRicciFlow}
          />
        )}

        {/* VIEW 4: DINÁMICA DEL ELLO, YO Y SUPERYÓ */}
        {activeTab === 'psychic_triad' && (
          <PsychicTriadDynamics
            idQuantityQ={idQuantityQ}
            endogenousDriveRate={endogenousDriveRate}
            egoBoundEnergy={egoBoundEnergy}
            egoRicciEntropyW={egoRicciEntropyW}
            superegoAcousticInput={superegoAcousticInput}
            egoVoiceOutput={egoVoiceOutput}
            symptomLeakage={symptomLeakage}
            partialDrives={partialDrives}
            memoryPairs={memoryPairs}
            onInjectSuperegoCommand={handleInjectSuperegoCommand}
            onStimulateIdDrive={handleStimulateIdDrive}
            onTogglePulsionHighlight={setHighlightedPulsionId}
            highlightedPulsionId={highlightedPulsionId}
            anxietyRadiusDelta={anxietyRadiusDelta}
          />
        )}

        {/* VIEW 5: CIRUGÍA ANALÍTICA & FANTASMA */}
        {activeTab === 'surgical_lab' && (
          <SurgicalClinicalLab
            marks={marks}
            onPerformSurgery={handlePerformSurgery}
            onResetMarks={handleResetSimulation}
            anxietyRadiusDelta={anxietyRadiusDelta}
          />
        )}

        {/* VIEW 6: CORPUS AXIOMÁTICO & FUENTES */}
        {activeTab === 'axiomatic_corpus' && <AxiomaticCorpusViewer />}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-[#060913] py-5 px-6 mt-12 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span>Metapsicología Freudiana & Flujo de Ricci (Poincaré–Perelman)</span>
            <span>·</span>
            <span className="font-mono-tabular">Tesis Unificada (v11)</span>
          </div>
          <div className="text-slate-400">
            Gesamtausgabe (GW) · Aus den Anfängen der Psychoanalyse (Imago) · arXiv math/0211159
          </div>
        </div>
      </footer>
    </div>
  );
}

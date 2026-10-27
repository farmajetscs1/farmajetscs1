/**
 * @license
 * Motor de Represión y Flujo de Ricci con Borde Fijo (Gianniotis / Cortissoz-Murcia)
 * Presupuesto de Gauss-Bonnet y Gasto (Aufwand) de la Defensa del Yo
 */

import React, { useState } from 'react';
import { VorstellungsMark } from '../types/metapsychology';
import { Shield, Play, RotateCcw, AlertTriangle, Scale, Activity, ArrowUpRight } from 'lucide-react';

interface RepressionRicciEngineProps {
  marks: VorstellungsMark[];
  anxietyRadiusDelta: number;
  onUpdateAnxietyRadius: (delta: number) => void;
  onUpdateMarkCharge: (markId: string, newCharge: number) => void;
  ricciFlowSpeed: number;
  onUpdateRicciSpeed: (speed: number) => void;
  onStepRicciFlow: () => void;
}

export const RepressionRicciEngine: React.FC<RepressionRicciEngineProps> = ({
  marks,
  anxietyRadiusDelta,
  onUpdateAnxietyRadius,
  onUpdateMarkCharge,
  ricciFlowSpeed,
  onUpdateRicciSpeed,
  onStepRicciFlow
}) => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [selectedMarkId, setSelectedMarkId] = useState<string>(marks[1]?.id || marks[0]?.id);

  const selectedMark = marks.find(m => m.id === selectedMarkId) || marks[0];

  // Number of removed disks k + 1 (marks + core n)
  const kMarks = marks.filter(m => !m.isPrimal && m.state === 'active').length;
  const eulerCharacteristicOmega = -(kMarks + 1); // χ(Ω) = - (k + 1)
  const theoreticalTotalBudget = 2 * Math.PI * eulerCharacteristicOmega;

  // Calculate boundary curvature sum:
  // Core: 2*pi*delta * (1/delta) = 2*pi
  // Marks: sum_i (2*pi*rho * h(a_i))
  const rho = 0.15;
  const coreBoundaryCurvature = 2 * Math.PI; // ∮ k_g ds for core = 2π * δ * (1/δ) = 2π
  const marksBoundaryCurvature = marks
    .filter(m => !m.isPrimal && m.state === 'active')
    .reduce((sum, m) => sum + 2 * Math.PI * rho * Math.sqrt(m.charge), 0);

  const totalBoundaryCurvature = coreBoundaryCurvature + marksBoundaryCurvature;
  // Gauss-Bonnet: ∫_Ω K dA = 2π χ(Ω) - ∮ k_g ds
  const internalCurvatureIntegral = theoreticalTotalBudget - totalBoundaryCurvature;

  // Defense exhaustion index (Aufwand)
  const defenseExhaustion = Math.min(100, Math.max(0, Math.abs(internalCurvatureIntegral) / 0.45));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-display font-semibold text-slate-100 flex items-center gap-2">
            <span>La Contrainvestidura como Flujo de Ricci con Borde</span>
            <span className="text-xs font-normal font-sans text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40">
              Gianniotis (2016) · Cortissoz-Murcia (2016)
            </span>
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            La represión (<span className="text-amber-300 font-medium">Gegenbesetzung</span>) no borra las huellas mnémicas: fija un borde rígido de curvatura geodésica <span className="font-mono-tabular text-cyan-300">k_g = h(a_i)</span>. 
            El Yo distribuye la tensión restante en la región preconsciente <span className="font-mono-tabular">Ω</span> según la ecuación <span className="font-mono-tabular text-rose-300">∂g/∂t = -2 Ric(g)</span>.
          </p>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onStepRicciFlow()}
            className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <Play className="w-3.5 h-3.5" />
            <span>Paso de Suavización Δt</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Gauss-Bonnet Equation & Defense Budget */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Gauss-Bonnet Dynamic Conservation */}
        <div className="lg:col-span-7 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono-tabular">Ley de Conservación</span>
              <h3 className="text-lg font-display font-semibold text-slate-100 mt-0.5">
                Teorema de Gauss–Bonnet y el Gasto (Aufwand)
              </h3>
            </div>
            <div className="text-right font-mono-tabular text-xs">
              <span className="text-slate-400">χ(Ω) = </span>
              <span className="font-semibold text-cyan-300">{eulerCharacteristicOmega}</span>
            </div>
          </div>

          {/* Master Equation Card */}
          <div className="bg-slate-950/80 p-4 rounded-lg border border-slate-800 text-center space-y-2">
            <div className="text-xs text-slate-400">Ecuación Fundamental de la Contrainvestidura:</div>
            <div className="font-mono-tabular text-sm md:text-base text-cyan-300 tracking-wide font-medium overflow-x-auto py-1">
              ∫_Ω K dA + ∮_∂Ω k_g ds = 2π χ(Ω) = -2π(k + 1)
            </div>
            <div className="text-[11px] text-slate-400">
              «El Yo frena el recuerdo hacia el displacer mediante una investidura lateral, y el gasto lo paga el propio Yo.» (Entwurf 1895, pp. 408-409)
            </div>
          </div>

          {/* Live Balance Breakdown */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800">
              <div className="text-slate-400 text-[11px]">Curvatura del Borde (∮ k_g ds)</div>
              <div className="font-mono-tabular text-sm font-semibold text-amber-400 mt-1">
                {totalBoundaryCurvature.toFixed(2)}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Rigidez de la represión</div>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800">
              <div className="text-slate-400 text-[11px]">Curvatura Interna (∫_Ω K dA)</div>
              <div className="font-mono-tabular text-sm font-semibold text-rose-400 mt-1">
                {internalCurvatureIntegral.toFixed(2)}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">Tensión sintomática en el Yo</div>
            </div>

            <div className="p-3 bg-slate-950/70 rounded-lg border border-slate-800">
              <div className="text-slate-400 text-[11px]">Presupuesto Total Fijo</div>
              <div className="font-mono-tabular text-sm font-semibold text-cyan-300 mt-1">
                {theoreticalTotalBudget.toFixed(2)}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">2π · χ(Ω) (Invariante)</div>
            </div>
          </div>

          {/* Defense Exhaustion Bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 flex items-center gap-1.5 font-medium">
                <Scale className="w-3.5 h-3.5 text-cyan-400" />
                <span>Índice de Agotamiento Defensivo del Yo (Aufwand)</span>
              </span>
              <span className="font-mono-tabular text-amber-300 font-semibold">{defenseExhaustion.toFixed(1)}%</span>
            </div>
            <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800">
              <div
                className={`h-full transition-all duration-300 ${
                  defenseExhaustion > 75 ? 'bg-red-500' : defenseExhaustion > 45 ? 'bg-amber-500' : 'bg-cyan-500'
                }`}
                style={{ width: `${defenseExhaustion}%` }}
              />
            </div>
            <div className="text-[11px] text-slate-400">
              Si el Yo aumenta la represión de una marca, la curvatura interna K debe compensar obligatoriamente en toda la superficie consciente.
            </div>
          </div>
        </div>

        {/* Right: Interactive Sliders & Boundary Parameters */}
        <div className="lg:col-span-5 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-5">
          <div>
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase font-mono-tabular">Parámetros de Borde</span>
            <h3 className="text-lg font-display font-semibold text-slate-100 mt-0.5">
              Control de Angustia Señal y Cargas
            </h3>
          </div>

          {/* Anxiety Radius Slider */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Radio de Angustia Señal (δ)</span>
              <span className="font-mono-tabular text-cyan-400 font-semibold">{anxietyRadiusDelta.toFixed(2)}</span>
            </div>
            <input
              type="range"
              min="0.15"
              max="0.65"
              step="0.02"
              value={anxietyRadiusDelta}
              onChange={(e) => onUpdateAnxietyRadius(parseFloat(e.target.value))}
              className="w-full accent-cyan-500"
            />
            <div className="flex items-center justify-between text-[11px] text-slate-400">
              <span>Curvatura Geodésica de Pared (kg = 1/δ):</span>
              <span className="font-mono-tabular text-rose-300 font-medium">{(1 / anxietyRadiusDelta).toFixed(2)}</span>
            </div>
          </div>

          {/* Mark Charge Adjuster */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-3">
            <label className="block text-xs font-medium text-slate-300">Seleccionar Marca VR para Modular Carga:</label>
            <select
              value={selectedMarkId}
              onChange={(e) => setSelectedMarkId(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              {marks.map((m) => (
                <option key={m.id} value={m.id}>{m.name} (Carga a = {m.charge.toFixed(1)})</option>
              ))}
            </select>

            {selectedMark && (
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400">Carga Afectiva (a_{selectedMark.id.replace('mark_', '')})</span>
                  <span className="font-mono-tabular text-amber-400 font-semibold">{selectedMark.charge.toFixed(1)}</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="12.0"
                  step="0.5"
                  value={selectedMark.charge}
                  onChange={(e) => onUpdateMarkCharge(selectedMark.id, parseFloat(e.target.value))}
                  className="w-full accent-amber-500"
                />
                <div className="text-[11px] text-slate-400">
                  Curvatura geodésica inducida: <span className="font-mono-tabular text-cyan-300">k_g = h(a) = {Math.sqrt(selectedMark.charge).toFixed(2)}</span>
                </div>
              </div>
            )}
          </div>

          {/* Evolution Speed */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-300 font-medium">Velocidad del Flujo de Ricci (Difusión)</span>
              <span className="font-mono-tabular text-cyan-400 font-semibold">{ricciFlowSpeed.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="3.0"
              step="0.5"
              value={ricciFlowSpeed}
              onChange={(e) => onUpdateRicciSpeed(parseFloat(e.target.value))}
              className="w-full accent-cyan-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

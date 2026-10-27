/**
 * @license
 * Dinámica de la Segunda Tópica: Ello (Es), Yo (Ich) y Superyó (Über-Ich)
 * Cúspide c como Orificio Acústico (Hörkappe), Operador de Dirichlet a Neumann y Síntoma
 */

import React, { useState } from 'react';
import { PartialDrive, MemoryPairSI, VorstellungsMark } from '../types/metapsychology';
import { Volume2, Mic, Activity, Heart, Brain, Award, Sparkles, Send, Flame } from 'lucide-react';

interface PsychicTriadDynamicsProps {
  idQuantityQ: number;
  endogenousDriveRate: number;
  egoBoundEnergy: number;
  egoRicciEntropyW: number;
  superegoAcousticInput: number;
  egoVoiceOutput: number;
  symptomLeakage: number;
  partialDrives: PartialDrive[];
  memoryPairs: MemoryPairSI[];
  onInjectSuperegoCommand: (command: string, intensity: number) => void;
  onStimulateIdDrive: (amount: number) => void;
  onTogglePulsionHighlight: (id: string | null) => void;
  highlightedPulsionId: string | null;
  anxietyRadiusDelta: number;
}

export const PsychicTriadDynamics: React.FC<PsychicTriadDynamicsProps> = ({
  idQuantityQ,
  endogenousDriveRate,
  egoBoundEnergy,
  egoRicciEntropyW,
  superegoAcousticInput,
  egoVoiceOutput,
  symptomLeakage,
  partialDrives,
  memoryPairs,
  onInjectSuperegoCommand,
  onStimulateIdDrive,
  onTogglePulsionHighlight,
  highlightedPulsionId,
  anxietyRadiusDelta
}) => {
  const [customCommand, setCustomCommand] = useState('');
  const [commandIntensity, setCommandIntensity] = useState(4.0);

  const presetCommands = [
    { label: '«¡Renuncia al goce prohibido!»', text: 'Renuncia al goce', intensity: 5.0 },
    { label: '«¡Sé como tu padre, pero no te atrevas a ser como él!»', text: 'Doble mandato edípico', intensity: 6.5 },
    { label: '«¡Pagan los culpables!» (Voz arcaica)', text: 'Pagan los culpables', intensity: 4.5 },
    { label: '«¡Cumple con la exigencia ideal!»', text: 'Exigencia ideal', intensity: 3.5 }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-display font-semibold text-slate-100 flex items-center gap-2">
            <span>Dinámica de la Segunda Tópica: Ello, Yo y Superyó</span>
            <span className="text-xs font-normal font-sans text-rose-400 bg-rose-950/60 px-2 py-0.5 rounded border border-rose-800/40">
              Das Ich und das Es (1923, GW XIII)
            </span>
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            El aparato psíquico opera como un sistema tripartito acoplado: el <span className="text-amber-300 font-medium">Ello</span> empuja con pulsión libre <span className="font-mono-tabular">Q</span>, 
            el <span className="text-cyan-300 font-medium">Yo</span> organiza la síntesis métrica en el dominio <span className="font-mono-tabular">Ω</span>, y el <span className="text-rose-400 font-medium">Superyó</span> impone su mandato a través del orificio acústico de la cúspide <span className="font-mono-tabular">c</span>.
          </p>
        </div>
      </div>

      {/* Triad Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Card 1: EL ELLO (ID) */}
        <div className="bg-slate-900/60 p-5 rounded-xl border border-amber-900/40 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase font-mono-tabular flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5" />
              <span>El Ello (Das Es)</span>
            </span>
            <span className="text-[11px] text-slate-400">Pulsión Libre</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline justify-between font-mono-tabular">
              <span className="text-2xl font-bold text-amber-400">{idQuantityQ.toFixed(1)}</span>
              <span className="text-xs text-slate-400">Cantidad Q en circulación</span>
            </div>
            <div className="text-xs text-slate-400">
              Estímulo endógeno (Triebfeder s): <span className="font-mono-tabular text-slate-200">{endogenousDriveRate.toFixed(1)} Q/s</span>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onStimulateIdDrive(2.0)}
              className="w-full py-2 px-3 bg-amber-600/80 hover:bg-amber-600 text-white text-xs font-medium rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Inyectar Excitación Pulsional (+2 Q)</span>
            </button>
          </div>
          <div className="text-[11px] text-slate-400 italic">
            «El Ello no tiene voluntad unificada, solo el afán de procurarse satisfacción de acuerdo con el principio de placer...» (1923)
          </div>
        </div>

        {/* Card 2: EL YO (EGO) */}
        <div className="bg-slate-900/60 p-5 rounded-xl border border-cyan-900/40 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono-tabular flex items-center gap-1.5">
              <Brain className="w-3.5 h-3.5" />
              <span>El Yo (Das Ich)</span>
            </span>
            <span className="text-[11px] text-slate-400">Dominio Ω</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline justify-between font-mono-tabular">
              <span className="text-2xl font-bold text-cyan-400">{egoBoundEnergy.toFixed(1)}</span>
              <span className="text-xs text-slate-400">Energía Ligada (Gebunden)</span>
            </div>
            <div className="text-xs text-slate-400">
              Entropía de Ricci W: <span className="font-mono-tabular text-slate-200">{egoRicciEntropyW.toFixed(2)}</span> (estabilidad métrica)
            </div>
          </div>

          <div className="p-2.5 bg-slate-950/70 rounded-lg border border-slate-800 text-[11px] text-slate-300">
            Mediador entre el Ello, la severidad del Superyó y la realidad exterior mediante la contrainvestidura.
          </div>
          <div className="text-[11px] text-slate-400 italic">
            «El Yo es ante todo una esencia-cuerpo; no solo una esencia-superficie, sino él mismo la proyección de una superficie...» (1923)
          </div>
        </div>

        {/* Card 3: EL SUPERYÓ (SUPEREGO) */}
        <div className="bg-slate-900/60 p-5 rounded-xl border border-rose-900/40 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-rose-400 tracking-wider uppercase font-mono-tabular flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>El Superyó (Über-Ich)</span>
            </span>
            <span className="text-[11px] text-slate-400">Casquete Acústico</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-baseline justify-between font-mono-tabular">
              <span className="text-2xl font-bold text-rose-400">{superegoAcousticInput.toFixed(2)}</span>
              <span className="text-xs text-slate-400">Presión u(t) = K|_B</span>
            </div>
            <div className="text-xs text-slate-400 flex items-center justify-between">
              <span>Fuga Sintomática y_sint:</span>
              <span className="font-mono-tabular text-amber-300 font-semibold">{symptomLeakage.toFixed(2)}</span>
            </div>
          </div>

          <div className="p-2.5 bg-slate-950/70 rounded-lg border border-slate-800 text-[11px] text-slate-300">
            Heredero del complejo de Edipo, fundado en las percepciones acústicas (palabra oída de los padres).
          </div>
          <div className="text-[11px] text-slate-400 italic">
            «El Superyó se originó también a partir de lo oído; es el casquete acústico (Hörkappe) del aparato psíquico...» (1923)
          </div>
        </div>
      </div>

      {/* Acoustic Cusp Injection (Operador Dirichlet-to-Neumann) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-5">
          <div>
            <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono-tabular">Cúspide c como Orificio</span>
            <h3 className="text-lg font-display font-semibold text-slate-100 mt-1 flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-cyan-400" />
              <span>Operador de Dirichlet a Neumann: Oído y Voz</span>
            </h3>
            <p className="text-sm text-slate-300 mt-1 leading-relaxed">
              En el borde <span className="font-mono-tabular">B = B₊ ∪ B₋</span> de la cúspide <span className="font-mono-tabular">c</span>, 
              lo oído entra como dato de Dirichlet <span className="font-mono-tabular text-rose-300">u(t) = K|_B</span> (la voz acusatoria del Superyó), 
              mientras que la palabra articulada por el sujeto sale como flujo normal <span className="font-mono-tabular text-cyan-300">y(t) = ∮_B ∂_ν K ds</span>.
            </p>
          </div>

          {/* Quick preset commands */}
          <div className="space-y-2">
            <span className="text-xs font-medium text-slate-400">Comandos e Imperativos Típicos del Superyó:</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {presetCommands.map((cmd, i) => (
                <button
                  key={i}
                  onClick={() => onInjectSuperegoCommand(cmd.text, cmd.intensity)}
                  className="p-2.5 bg-slate-950/70 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-lg text-left text-xs transition-colors"
                >
                  <div className="text-slate-200 font-medium">{cmd.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 font-mono-tabular">Intensidad u: +{cmd.intensity.toFixed(1)}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Custom voice entry */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-3">
            <div className="text-xs font-medium text-slate-300">Inyectar Significado Personalizado en la Entrada u(t):</div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Escribe el mandato, prohibición o reproche..."
                value={customCommand}
                onChange={(e) => setCustomCommand(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              />
              <button
                onClick={() => {
                  if (customCommand.trim()) {
                    onInjectSuperegoCommand(customCommand, commandIntensity);
                    setCustomCommand('');
                  }
                }}
                disabled={!customCommand.trim()}
                className="px-4 py-2 bg-rose-600 hover:bg-rose-500 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Enviar</span>
              </button>
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Intensidad de la Voz Superyoica:</span>
              <span className="font-mono-tabular text-rose-400 font-semibold">{commandIntensity.toFixed(1)}</span>
            </div>
            <input
              type="range"
              min="1.0"
              max="8.0"
              step="0.5"
              value={commandIntensity}
              onChange={(e) => setCommandIntensity(parseFloat(e.target.value))}
              className="w-full accent-rose-500"
            />
          </div>
        </div>

        {/* Right: Partial Drives Inspection (Axiom 11) */}
        <div className="lg:col-span-5 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-tabular">
              Las Cuatro Pulsiones Parciales (Axioma 11)
            </h4>
            <span className="text-[11px] text-slate-400 font-mono-tabular">n Común</span>
          </div>
          <p className="text-xs text-slate-400">
            Todas las pulsiones parciales orbitan concéntricamente el mismo núcleo <span className="font-mono-tabular text-red-400">n</span> a distancias <span className="font-mono-tabular">δ_k ≥ δ</span>.
          </p>

          <div className="space-y-2.5">
            {partialDrives.map((drive) => {
              const isSelected = highlightedPulsionId === drive.id;
              return (
                <div
                  key={drive.id}
                  onClick={() => onTogglePulsionHighlight(isSelected ? null : drive.id)}
                  className={`p-3 rounded-lg border text-xs cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-slate-950 border-cyan-500 shadow-sm'
                      : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between font-medium">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: drive.color }} />
                      <span className="text-slate-200">{drive.name}</span>
                    </div>
                    <span className="font-mono-tabular text-[11px] text-slate-400">
                      δ_{drive.id} = {drive.radius.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                    {drive.description}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

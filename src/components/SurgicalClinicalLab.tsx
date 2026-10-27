/**
 * @license
 * Laboratorio Clínico y Cirugía de Perelman (Axioma 10 & Proposiciones 1, 3, 5)
 * Extracción de Cuellos Traumáticos, Indestructibilidad del Fantasma y Problema Inverso
 */

import React, { useState } from 'react';
import { VorstellungsMark } from '../types/metapsychology';
import { Scissors, ShieldCheck, AlertOctagon, Sparkles, Search, CheckCircle, HelpCircle } from 'lucide-react';

interface SurgicalClinicalLabProps {
  marks: VorstellungsMark[];
  onPerformSurgery: (markId: string) => void;
  onResetMarks: () => void;
  anxietyRadiusDelta: number;
}

export const SurgicalClinicalLab: React.FC<SurgicalClinicalLabProps> = ({
  marks,
  onPerformSurgery,
  onResetMarks,
  anxietyRadiusDelta
}) => {
  const [surgicalCandidateId, setSurgicalCandidateId] = useState<string>('');
  const [surgeryStatusMessage, setSurgeryStatusMessage] = useState<string | null>(null);
  const [reconstructionProgress, setReconstructionProgress] = useState<number>(0);
  const [isReconstructing, setIsReconstructing] = useState(false);
  const [reconstructionResult, setReconstructionResult] = useState<string | null>(null);

  const separableMarks = marks.filter(m => !m.isPrimal && m.state === 'active');
  const primalCore = marks.find(m => m.isPrimal);

  const handleExecuteSurgery = (targetId: string) => {
    const target = marks.find(m => m.id === targetId);
    if (!target) return;

    if (target.isPrimal) {
      setSurgeryStatusMessage('¡OPERACIÓN BLOQUEADA POR TOPOLOGÍA! El núcleo primario n satisface 2πδ ≥ ℓ_min y genera π₁(M) ≅ ℤ. Cortarlo destruiría la condición de sujeto (S³ inalcanzable).');
      return;
    }

    onPerformSurgery(targetId);
    setSurgeryStatusMessage(`Cirugía de Perelman completada exitosamente sobre ${target.name}. Cuello σ_i extraído, casquete esférico pegado y unión suavizada por flujo de Ricci.`);
  };

  const handleRunInverseReconstruction = () => {
    setIsReconstructing(true);
    setReconstructionProgress(0);
    setReconstructionResult(null);

    let step = 0;
    const interval = setInterval(() => {
      step += 25;
      setReconstructionProgress(step);
      if (step >= 100) {
        clearInterval(interval);
        setIsReconstructing(false);
        setReconstructionResult(
          'Construcción analítica verificada (Freud 1937): Se ha deducido la matriz de Bahnung w_ij y el núcleo n = «El padre me ama / soy castigado» a partir de la signatura acústica y(t). Rinde el mismo valor clínico que un recuerdo reprimido directo.'
        );
      }
    }, 400);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-display font-semibold text-slate-100 flex items-center gap-2">
            <span>Cirugía de Perelman & El Fantasma «Pegan a un niño»</span>
            <span className="text-xs font-normal font-sans text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
              Axioma 10 · Perelman (2003) · Freud (1919, 1937)
            </span>
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            La cura analítica es análoga a la cirugía de cuellos cilíndricos: extirpa marcas reprimidas recuperables (<span className="text-amber-300 font-medium">VT</span>) 
            y suaviza la unión métrica. Sin embargo, el núcleo de la fantasía primordial (<span className="text-red-400 font-medium">n</span>) es <span className="text-slate-100 font-medium">indestructible</span> por la topología del aparato.
          </p>
        </div>

        <button
          onClick={onResetMarks}
          className="px-3.5 py-1.5 text-xs font-medium rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors flex items-center gap-1.5"
        >
          <span>Restaurar Marcas Iniciales</span>
        </button>
      </div>

      {/* Grid: Surgical Suite & Three Phases of Fantasy */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Surgical Suite */}
        <div className="lg:col-span-7 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono-tabular">Procedimiento Quirúrgico</span>
              <h3 className="text-lg font-display font-semibold text-slate-100 mt-0.5">
                Extracción de Cuello Traumático (Neck-Pinch Surgery)
              </h3>
            </div>
            <span className="text-xs font-mono-tabular text-slate-400">ℓ_min = 1.25</span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            Cuando la contrainvestidura estrangula una marca <span className="font-mono-tabular text-amber-300">p_i</span>, la región circundante se modela como un cuello <span className="font-mono-tabular text-cyan-300">S² × I</span> de longitud <span className="font-mono-tabular">ℓ(σ_i) &lt; ℓ_min</span>. 
            El acto analítico corta dicho cuello, descarta el componente traumático aislado y coloca un casquete esférico suave.
          </p>

          {/* Interactive Surgical Control */}
          <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800 space-y-4">
            <label className="block text-xs font-medium text-slate-300">Seleccionar Marca para Intervención Quirúrgica:</label>
            <div className="space-y-2">
              {marks.map((m) => (
                <div
                  key={m.id}
                  className={`p-3 rounded-lg border flex items-center justify-between text-xs transition-colors ${
                    m.isPrimal
                      ? 'bg-red-950/30 border-red-900/50 text-red-200'
                      : m.state === 'active'
                      ? 'bg-slate-900/80 border-slate-700/80 text-slate-200'
                      : 'bg-slate-900/40 border-slate-800/50 text-slate-500'
                  }`}
                >
                  <div>
                    <div className="font-medium flex items-center gap-2">
                      <span>{m.name}</span>
                      {m.isPrimal && (
                        <span className="text-[10px] bg-red-900/60 text-red-300 px-1.5 py-0.5 rounded border border-red-700/50">
                          Núcleo Indestructible
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Carga a = {m.charge.toFixed(1)} · {m.isPrimal ? 'No separable' : 'Cuello operable'}
                    </div>
                  </div>

                  <button
                    onClick={() => handleExecuteSurgery(m.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors ${
                      m.isPrimal
                        ? 'bg-red-900/30 hover:bg-red-900/50 text-red-300 border border-red-700/50'
                        : 'bg-cyan-600 hover:bg-cyan-500 text-white shadow-sm'
                    }`}
                  >
                    <Scissors className="w-3.5 h-3.5" />
                    <span>{m.isPrimal ? 'Intentar Corte' : 'Extirpar Cuello'}</span>
                  </button>
                </div>
              ))}
            </div>

            {surgeryStatusMessage && (
              <div className={`p-3 rounded-lg border text-xs leading-relaxed ${
                surgeryStatusMessage.includes('BLOQUEADA')
                  ? 'bg-red-950/60 border-red-800 text-red-200'
                  : 'bg-emerald-950/60 border-emerald-800 text-emerald-200'
              }`}>
                {surgeryStatusMessage}
              </div>
            )}
          </div>

          <div className="bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/60 text-xs text-slate-400 italic">
            «La Proposición 3 demuestra que la cirugía analítica sobre marcas VT deja estrictamente intacto el índice de giro w(C_δ, n) = ±1. La fantasía persiste como estructura constitutiva...»
          </div>
        </div>

        {/* Right: The Three Phases of "A Child is Being Beaten" */}
        <div className="lg:col-span-5 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-4">
          <div>
            <span className="text-xs font-semibold text-amber-400 tracking-wider uppercase font-mono-tabular">Ein Kind wird geschlagen (1919)</span>
            <h3 className="text-lg font-display font-semibold text-slate-100 mt-0.5">
              Las Tres Fases de la Fantasía
            </h3>
          </div>

          <div className="space-y-3 text-xs">
            {/* Phase 1 */}
            <div className="p-3.5 bg-slate-950/70 rounded-lg border border-slate-800 space-y-1">
              <div className="font-semibold text-slate-200 flex items-center justify-between">
                <span>Fase 1: «El padre pega al niño al que odio»</span>
                <span className="text-[10px] text-slate-400 font-mono-tabular">Previa</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Fase teorizada por Freud. El sujeto aún no está implicado directamente en la paliza; es un espectador celoso. No tiene objeto propio en el modelo.
              </p>
            </div>

            {/* Phase 2 */}
            <div className="p-3.5 bg-red-950/30 rounded-lg border border-red-900/50 space-y-1">
              <div className="font-semibold text-red-300 flex items-center justify-between">
                <span>Fase 2: «Yo soy azotado/a por el padre»</span>
                <span className="text-[10px] bg-red-900/60 text-red-200 px-1.5 py-0.5 rounded font-mono-tabular">Núcleo n</span>
              </div>
              <p className="text-slate-300 text-[11px] leading-relaxed font-medium">
                La fase fundamental e inconsciente (el fantasma). <span className="text-red-400 font-semibold">Nunca ha sido consciente ni se recuerda jamás</span>: es una construcción del análisis. Genera el atractor C_δ.
              </p>
            </div>

            {/* Phase 3 */}
            <div className="p-3.5 bg-slate-950/70 rounded-lg border border-slate-800 space-y-1">
              <div className="font-semibold text-cyan-300 flex items-center justify-between">
                <span>Fase 3: «Pegan a un niño (indeterminado)»</span>
                <span className="text-[10px] text-cyan-400 font-mono-tabular">Voz y(t)</span>
              </div>
              <p className="text-slate-400 text-[11px] leading-relaxed">
                Lo único que el paciente recuerda conscientemente. Es el derivado transformado que emerge por el orificio de la palabra y(t).
              </p>
            </div>
          </div>

          {/* The Inverse Problem / Construcciones en el análisis */}
          <div className="pt-2 border-t border-slate-800/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Search className="w-3.5 h-3.5 text-cyan-400" />
                <span>Problema Inverso (Construcciones 1937)</span>
              </span>
            </div>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              El analista sólo tiene acceso al borde exterior y(t). ¿Es posible deducir el núcleo inmemorable n a partir de la firma de voz?
            </p>

            <button
              onClick={handleRunInverseReconstruction}
              disabled={isReconstructing}
              className="w-full py-2 px-3 bg-cyan-700 hover:bg-cyan-600 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isReconstructing ? `Resolviendo Operador de Calderón (${reconstructionProgress}%)` : 'Ejecutar Reconstrucción Analítica'}</span>
            </button>

            {reconstructionResult && (
              <div className="p-3 bg-cyan-950/40 rounded-lg border border-cyan-800/50 text-[11px] text-cyan-200 leading-relaxed flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{reconstructionResult}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

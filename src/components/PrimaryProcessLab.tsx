/**
 * @license
 * Laboratorio de Procesos Primarios (Condensación, Desplazamiento y Atemporalidad)
 * Metapsicología freudiana de 1895, 1900 y 1915
 */

import React, { useState } from 'react';
import { VorstellungsMark, FacilitatedEdge } from '../types/metapsychology';
import { Zap, Clock, ArrowRightLeft, Sparkles, Layers, ShieldAlert } from 'lucide-react';

interface PrimaryProcessLabProps {
  marks: VorstellungsMark[];
  edges: FacilitatedEdge[];
  onTriggerCondensation: (sourceId: string, targetId: string) => void;
  onTriggerDisplacement: (fromId: string, toId: string, amount: number) => void;
  onTriggerNachtraglichkeit: (markId: string, magnitude: number) => void;
  anxietyRadiusDelta: number;
}

export const PrimaryProcessLab: React.FC<PrimaryProcessLabProps> = ({
  marks,
  edges,
  onTriggerCondensation,
  onTriggerDisplacement,
  onTriggerNachtraglichkeit,
  anxietyRadiusDelta
}) => {
  const [activeProcessTab, setActiveProcessTab] = useState<'condensation' | 'displacement' | 'atemporality' | 'inertia'>('condensation');

  // Condensation state
  const [condenseSrc, setCondenseSrc] = useState<string>(marks[1]?.id || '');
  const [condenseTgt, setCondenseTgt] = useState<string>(marks[2]?.id || '');

  // Displacement state
  const [displaceFrom, setDisplaceFrom] = useState<string>(marks[1]?.id || '');
  const [displaceTo, setDisplaceTo] = useState<string>(marks[3]?.id || '');
  const [displaceAmount, setDisplaceAmount] = useState<number>(2.5);

  // Atemporality simulation state
  const [elapsedYears, setElapsedYears] = useState<number>(20);
  const [selectedDeferredMark, setSelectedDeferredMark] = useState<string>(marks[3]?.id || '');
  const [deferredMagnitude, setDeferredMagnitude] = useState<number>(3.0);

  const activeMarks = marks.filter(m => m.state === 'active');
  const latentMarks = marks.filter(m => m.state === 'latent');

  return (
    <div className="space-y-6">
      {/* Header & Concept Intro */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-display font-semibold text-slate-100 flex items-center gap-2">
            <span>Mecánica del Proceso Primario</span>
            <span className="text-xs font-normal font-sans text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
              Metapsicología 1915 · GW X
            </span>
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            En el sistema Inconsciente (Icc), la energía circula en estado <span className="text-amber-300 font-medium">libre</span>: 
            no existe contradicción lógica, el tiempo objetivo no altera las inscripciones mnémicas, y las investiduras se trasladan o condensan con máxima facilidad.
          </p>
        </div>

        {/* Tab switchers */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveProcessTab('condensation')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              activeProcessTab === 'condensation' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Condensación</span>
          </button>
          <button
            onClick={() => setActiveProcessTab('displacement')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              activeProcessTab === 'displacement' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Desplazamiento</span>
          </button>
          <button
            onClick={() => setActiveProcessTab('atemporality')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              activeProcessTab === 'atemporality' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Atemporalidad & Salto</span>
          </button>
          <button
            onClick={() => setActiveProcessTab('inertia')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 ${
              activeProcessTab === 'inertia' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Inercia vs Constancia</span>
          </button>
        </div>
      </div>

      {/* Tab 1: CONDENSACIÓN (Verdichtung) */}
      {activeProcessTab === 'condensation' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-5">
            <div>
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono-tabular">01 · Verdichtung</span>
              <h3 className="text-lg font-display font-semibold text-slate-100 mt-1">
                Condensación: Superposición de Investiduras
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Una única representación absorbe la carga total de varias cadenas asociativas convergentes. 
                En el modelo analógico, las cargas escalares <span className="font-mono-tabular text-amber-300">a_i</span> y <span className="font-mono-tabular text-amber-300">a_j</span> se superponen algebraicamente en un vértice de la variedad, multiplicando su curvatura local.
              </p>
            </div>

            {/* Interactive Condensation Trigger */}
            <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800/80 space-y-4">
              <div className="text-xs font-medium text-slate-300">Simular convergencia de dos marcas en una única representación:</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Marca Fuente (Cede carga)</label>
                  <select
                    value={condenseSrc}
                    onChange={(e) => setCondenseSrc(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    {marks.filter(m => !m.isPrimal).map((m) => (
                      <option key={m.id} value={m.id}>{m.name} (a = {m.charge.toFixed(1)})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Marca Foco (Condensa investidura)</label>
                  <select
                    value={condenseTgt}
                    onChange={(e) => setCondenseTgt(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    {marks.map((m) => (
                      <option key={m.id} value={m.id}>{m.name} (a = {m.charge.toFixed(1)})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    if (condenseSrc && condenseTgt && condenseSrc !== condenseTgt) {
                      onTriggerCondensation(condenseSrc, condenseTgt);
                    }
                  }}
                  disabled={condenseSrc === condenseTgt}
                  className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Ejecutar Condensación Primaria en el Nodo Foco</span>
                </button>
              </div>
            </div>

            {/* Quote Reference */}
            <div className="bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/60 text-xs text-slate-400 italic">
              «En el inconsciente reina una libertad absoluta de investidura. Por el camino de la condensación, una representación puede asumir toda la investidura de varias otras...»
              <span className="block mt-1 font-sans not-italic text-[11px] text-cyan-400 font-medium">
                — Sigmund Freud, Das Unbewußte (1915, GW X, p. 286)
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-tabular">
              Estado Actual de las Marcas (VR)
            </h4>
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {marks.map((mark) => (
                <div
                  key={mark.id}
                  className={`p-3 rounded-lg border text-xs transition-colors ${
                    mark.isPrimal
                      ? 'bg-red-950/30 border-red-900/60 text-red-200'
                      : mark.state === 'active'
                      ? 'bg-slate-950/70 border-slate-700/80 text-slate-200'
                      : 'bg-slate-950/40 border-slate-800/60 text-slate-400'
                  }`}
                >
                  <div className="flex items-center justify-between font-medium">
                    <span>{mark.name}</span>
                    <span className="font-mono-tabular font-semibold text-amber-300">
                      a = {mark.charge.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 flex items-center justify-between">
                    <span>{mark.originalTerm}</span>
                    <span className="capitalize">{mark.state}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: DESPLAZAMIENTO (Verschiebung) */}
      {activeProcessTab === 'displacement' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-5">
            <div>
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono-tabular">02 · Verschiebung</span>
              <h3 className="text-lg font-display font-semibold text-slate-100 mt-1">
                Desplazamiento: Deslizamiento Libre de la Cantidad
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                La energía pulsional se desliza sin resistencia entre huellas conectadas por facilitación (<span className="text-amber-300">Bahnung</span>). 
                Permite que una representación intolerada transfiera su monto de afecto a un sustituto accesorio, engañando a la censura.
              </p>
            </div>

            {/* Interactive Displacement Control */}
            <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800/80 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Origen del Desplazamiento</label>
                  <select
                    value={displaceFrom}
                    onChange={(e) => setDisplaceFrom(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    {marks.filter(m => !m.isPrimal && m.charge > 0.5).map((m) => (
                      <option key={m.id} value={m.id}>{m.name} (a = {m.charge.toFixed(1)})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Destino Sustituto (Alivio / Desvío)</label>
                  <select
                    value={displaceTo}
                    onChange={(e) => setDisplaceTo(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    {marks.filter(m => m.id !== displaceFrom && !m.isPrimal).map((m) => (
                      <option key={m.id} value={m.id}>{m.name} (a = {m.charge.toFixed(1)})</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-xs text-slate-300 mb-1.5">
                  <span>Monto Desplazado (Δa)</span>
                  <span className="font-mono-tabular text-cyan-400 font-semibold">{displaceAmount.toFixed(1)} Q</span>
                </div>
                <input
                  type="range"
                  min="0.5"
                  max="5.0"
                  step="0.5"
                  value={displaceAmount}
                  onChange={(e) => setDisplaceAmount(parseFloat(e.target.value))}
                  className="w-full accent-cyan-500"
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    if (displaceFrom && displaceTo && displaceFrom !== displaceTo) {
                      onTriggerDisplacement(displaceFrom, displaceTo, displaceAmount);
                    }
                  }}
                  className="w-full py-2.5 px-4 bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <ArrowRightLeft className="w-4 h-4" />
                  <span>Transferir Carga a lo largo del Hilo de Bahnung</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/60 text-xs text-slate-400 italic">
              «Por desplazamiento, una representación cede a otra todo el importe de su investidura. La intensidad de una cadena de pensamientos entera puede acumularse sobre un único elemento mnémico...»
              <span className="block mt-1 font-sans not-italic text-[11px] text-cyan-400 font-medium">
                — Sigmund Freud, Die Traumdeutung (1900, GW II/III)
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-tabular">
              Red de Facilitaciones Activas (Γ_θ)
            </h4>
            <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
              {edges.map((e) => (
                <div key={e.id} className="p-3 bg-slate-950/70 rounded-lg border border-slate-800 text-xs">
                  <div className="flex items-center justify-between font-mono-tabular">
                    <span className="text-slate-300">{e.source.replace('mark_', '')} ➔ {e.target.replace('mark_', '')}</span>
                    <span className={`font-semibold ${e.isCarryingPulsion ? 'text-amber-400' : 'text-slate-500'}`}>
                      w = {e.weight.toFixed(2)}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-[11px] text-slate-400">
                    <span>Flujo Pulsional (Q):</span>
                    <span className="font-mono-tabular text-cyan-300 font-medium">{e.flux.toFixed(1)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: ATEMPORALIDAD & NACHTRÄGLICHKEIT */}
      {activeProcessTab === 'atemporality' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-5">
            <div>
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono-tabular">03 · Zeitlosigkeit & Nachträglichkeit</span>
              <h3 className="text-lg font-display font-semibold text-slate-100 mt-1">
                Atemporalidad del Icc y Salto Retroactivo
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                Las huellas mnémicas inconscientes <span className="text-amber-300 font-medium">no se desgastan con el paso del tiempo</span> (<span className="font-mono-tabular">da_i/dt = 0</span>). 
                Permanecen virtualmente intactas durante 20, 30 o 50 años, hasta que un acontecimiento de maduración puberal o adulta provoca un <span className="text-cyan-300 font-medium">salto de carga diferido</span> con ganancia evolutiva <span className="font-mono-tabular">g(t) ≥ 1</span>.
              </p>
            </div>

            {/* Decade Elapsed Demonstration */}
            <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium text-slate-300">Tiempo Cronológico Transcurrido (Años)</span>
                <span className="font-mono-tabular text-cyan-400 font-semibold">{elapsedYears} años</span>
              </div>
              <input
                type="range"
                min="0"
                max="50"
                value={elapsedYears}
                onChange={(e) => setElapsedYears(parseInt(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-[11px] text-slate-400 bg-slate-900/80 p-2.5 rounded border border-slate-800 flex items-center justify-between">
                <span>Decaimiento en marcas del Icc:</span>
                <span className="font-mono-tabular text-emerald-400 font-medium">0.00% (Atemporal / Intacto)</span>
              </div>
            </div>

            {/* Nachträglichkeit Leap Trigger */}
            <div className="bg-slate-950/70 p-4 rounded-lg border border-slate-800/80 space-y-3">
              <div className="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Provocar Acontecimiento Posterior (Nachträglichkeit)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Marca a Activar Retroactivamente</label>
                  <select
                    value={selectedDeferredMark}
                    onChange={(e) => setSelectedDeferredMark(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    {marks.filter(m => !m.isPrimal).map((m) => (
                      <option key={m.id} value={m.id}>{m.name} (a = {m.charge.toFixed(1)})</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-slate-400 mb-1">Magnitud del Suceso Posterior (m_j)</label>
                  <input
                    type="number"
                    min="1"
                    max="10"
                    step="0.5"
                    value={deferredMagnitude}
                    onChange={(e) => setDeferredMagnitude(parseFloat(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 font-mono-tabular"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    if (selectedDeferredMark) {
                      onTriggerNachtraglichkeit(selectedDeferredMark, deferredMagnitude);
                    }
                  }}
                  className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-500 text-white text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <Zap className="w-4 h-4" />
                  <span>Inyectar Salto: a_i(t⁺) = a_i(t⁻) + g(t) · κ_ij · m_j</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/60 text-xs text-slate-400 italic">
              «Los procesos del sistema Icc son atemporales; es decir, no están ordenados temporalmente, no se modifican por el transcurso del tiempo, ni tienen relación alguna con él... El recuerdo de una irritación infantil produce años después una descarga incomparablemente mayor...»
              <span className="block mt-1 font-sans not-italic text-[11px] text-cyan-400 font-medium">
                — Sigmund Freud, Carta 14.2.1897 & Das Unbewußte (1915, GW X, p. 287)
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-tabular">
              Comparación Temporal Metapsicológica
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-slate-950/70 rounded-lg border border-slate-800">
                <div className="font-semibold text-slate-200">1. Marcas VR en el Icc (Atemporal)</div>
                <div className="text-slate-400 mt-1">Ecuación: <span className="font-mono-tabular text-amber-300">∂a_i / ∂t = 0</span></div>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Sin decaimiento con la edad. El paso de {elapsedYears} años no disminuye la carga patógena.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/70 rounded-lg border border-slate-800">
                <div className="font-semibold text-slate-200">2. Representaciones S–I en Pcc/Cc (Temporal)</div>
                <div className="text-slate-400 mt-1">Ecuación: <span className="font-mono-tabular text-cyan-300">db_j/dt = -λ_j b_j</span></div>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Sujetas al olvido biográfico preconsciente. Si λ &gt; 0, la ligadura b_j disminuye exponencialmente con los años.
                </p>
              </div>

              <div className="p-3.5 bg-slate-950/70 rounded-lg border border-slate-800">
                <div className="font-semibold text-slate-200">3. Contrainvestidura del Yo (Flujo de Ricci)</div>
                <div className="text-slate-400 mt-1">Ecuación: <span className="font-mono-tabular text-rose-300">∂g/∂t = -2 Ric(g) en Ω</span></div>
                <p className="text-[11px] text-slate-400 mt-1.5">
                  Ocurre estrictamente en el tiempo físico t de la defensa y la sesión analítica.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: INERCIA VS CONSTANCIA */}
      {activeProcessTab === 'inertia' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-5">
            <div>
              <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase font-mono-tabular">04 · Entwurf 1895</span>
              <h3 className="text-lg font-display font-semibold text-slate-100 mt-1">
                Principio de Inercia Neuronal vs. Principio de Constancia
              </h3>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                El <span className="text-amber-300 font-medium">Trägheitsprinzip</span> postula que las neuronas tienden a librarse por completo de la cantidad Q (descarga a cero). 
                Pero la necesidad biológica de la vida (<span className="italic">Vitalnotwendigkeit</span>) fuerza al aparato a acumular una reserva constante (<span className="text-cyan-300 font-medium">Konstanzprinzip</span>). 
                Este conflicto origina la estructura misma del Yo como modulador de gradiente.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-950/70 rounded-lg border border-slate-800">
                <div className="text-xs font-semibold text-amber-400 uppercase font-mono-tabular">Principio de Inercia (Q → 0)</div>
                <div className="text-xs text-slate-300 mt-1.5 font-medium">Tendencia Absoluta a la Descarga</div>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Base del arco reflejo y de la pulsión de muerte tardía. Todo estímulo endógeno s(t) empuja hacia una evacuación motriz inmediata sin mediación.
                </p>
              </div>

              <div className="p-4 bg-slate-950/70 rounded-lg border border-slate-800">
                <div className="text-xs font-semibold text-cyan-400 uppercase font-mono-tabular">Principio de Constancia (Q ≈ Cte)</div>
                <div className="text-xs text-slate-300 mt-1.5 font-medium">Mantenimiento de Nivel Estable</div>
                <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">
                  Formalizado por el Laplaciano del grafo: <span className="font-mono-tabular">dQ/dt = -L_θ Q + s</span>. 
                  El sistema difunde y disipa diferencias de potencial para evitar el colapso por displacer.
                </p>
              </div>
            </div>

            <div className="bg-slate-950/40 p-3.5 rounded-lg border border-slate-800/60 text-xs text-slate-400 italic">
              «El sistema de neuronas tiende originariamente a conservar el nivel Q = 0; pero bajo el apremio de la vida tiene que aprender a tolerar un acopio de cantidad necesario para satisfacer las demandas...»
              <span className="block mt-1 font-sans not-italic text-[11px] text-cyan-400 font-medium">
                — Sigmund Freud, Entwurf einer Psychologie (1895, Parte I)
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono-tabular">
              Puente Formal: Flujo Gradiente de Perelman
            </h4>
            <div className="p-4 bg-slate-950/70 rounded-lg border border-slate-800 text-xs space-y-3">
              <div className="text-slate-300 leading-relaxed">
                El flujo de Ricci <span className="font-mono-tabular text-rose-300">∂g/∂t = -2Ric(g)</span> es precisamente un <span className="text-cyan-300 font-medium">flujo de tipo gradiente</span> respecto del funcional monótono de entropía W de Perelman:
              </div>
              <div className="font-mono-tabular bg-slate-900 p-2.5 rounded text-[11px] text-amber-300 overflow-x-auto">
                dW / dt = 2 ∫_M |Ric + ∇∇f|² e^{'{−f}'} dV ≥ 0
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Así como la inercia freudiana busca un mínimo de energía libre, el flujo de Ricci suaviza gradientes métricos hasta alcanzar geometrías de Einstein o uniformizadas.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

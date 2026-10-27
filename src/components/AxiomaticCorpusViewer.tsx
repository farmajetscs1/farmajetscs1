/**
 * @license
 * Visor del Corpus Axiomático y Diccionario Freud-Geometría
 * Verificación filológica (GW / Imago) y formal (Poincaré / Perelman / Gianniotis)
 */

import React, { useState, useMemo } from 'react';
import { THESIS_AXIOMS, PROPOSITIONS } from '../data/thesisCorpus';
import { VerificationStatus, AxiomItem } from '../types/metapsychology';
import { Search, BookOpen, Filter, CheckCircle2, FileText, ChevronRight, Hash } from 'lucide-react';

export const AxiomaticCorpusViewer: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [selectedAxiomNumber, setSelectedAxiomNumber] = useState<number>(1);
  const [activeSubTab, setActiveSubTab] = useState<'axioms' | 'propositions' | 'dictionary'>('axioms');

  const filteredAxioms = useMemo(() => {
    return THESIS_AXIOMS.filter((ax) => {
      const matchesSearch =
        searchQuery === '' ||
        ax.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ax.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ax.freudSource.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ax.summary.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTag = selectedTag === 'all' || ax.status === selectedTag;

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  const currentAxiom = THESIS_AXIOMS.find(a => a.number === selectedAxiomNumber) || THESIS_AXIOMS[0];

  const dictionaryRows = [
    { freud: 'Das Ding / Lo Real', geometry: 'Superficie compacta S del Horn Torus con cúspide c', source: 'Entwurf pp. 415-416', status: '[VT]' },
    { freud: 'Vorstellungsrepräsentanz (marca)', geometry: 'Punto discreto p_i con carga a_i ≥ 0 (curvatura concentrada)', source: 'Carta 2.5.1897 · 1915', status: '[VT]' },
    { freud: 'Marca primaria / Núcleo del fantasma', geometry: 'Punto n sin aristas cargadas; sumidero con ciclo límite C_δ', source: 'Pegan a un niño (1919, fase 2)', status: '[VW]' },
    { freud: 'Facilitación (Bahnung)', geometry: 'Pesos w(e) del grafo Γ en S \\ D_δ(n)', source: 'Entwurf, Parte I', status: '[VT]' },
    { freud: 'Pulsión y circuitos cargados', geometry: 'Flujo dinámico de Q sobre ciclos con w ≥ θ (subgrafo Γ_θ)', source: 'Entwurf · Triebe 1915', status: '[VT]' },
    { freud: 'Compulsión de repetición en acto', geometry: 'Ciclo límite atractor C_δ (w = ±1) alrededor de n', source: 'Recordar, repetir y reelaborar (1914)', status: '[M]' },
    { freud: 'Angustia señal', geometry: 'Radio de exclusión δ y pared rígida k_g = 1/δ', source: 'Inhibición, síntoma y angustia (1926)', status: '[M]' },
    { freud: 'Nachträglichkeit (acción diferida)', geometry: 'Salto de carga a_i con ganancia evolutiva g(t) ≥ 1', source: 'Cartas 14.2 y 2.5.1897', status: '[VT]' },
    { freud: 'Atemporalidad del Icc', geometry: 'Invarianza temporal de la estructura (S, V, Γ, n)', source: 'Lo inconsciente (1915)', status: '[VW]' },
    { freud: 'Contrainvestidura (Gegenbesetzung)', geometry: 'Flujo de Ricci sobre Ω con marcas fijas como condición de borde', source: 'Seitenbesetzung 1895 · 1915', status: '[VT/VW]' },
    { freud: 'Orificio acústico (Superyó / Voz)', geometry: 'Cúspide c: dato u(t) = K|_B y flujo normal y(t) = ∮ ∂_ν K ds', source: 'Carta 52 · Hörkappe (1923)', status: '[VT/VW]' },
    { freud: 'Trauma reprimido recuperable', geometry: 'Marca separable p_i ∈ V_T acotada por un cuello σ_i', source: 'Carta 30.5.1896 · 1915', status: '[VT]' },
    { freud: 'Síntoma neurótico', geometry: 'Fuga no absorbida en la voz: y_sint(t) = y(t) - y_0(t)', source: 'Propuesta original de la tesis', status: '[P]' },
    { freud: 'Cura analítica', geometry: 'Cirugía de Perelman en cuellos de V_T sin tocar n', source: 'Perelman (2003) · Propuesta formal', status: '[VW/A]' }
  ];

  return (
    <div className="space-y-6">
      {/* Header & Section Description */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h2 className="text-xl font-display font-semibold text-slate-100 flex items-center gap-2">
            <span>Corpus Axiomático y Diccionario Freud–Geometría</span>
            <span className="text-xs font-normal font-sans text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
              Documento Unificado v11 · Gesamtausgabe & Imago
            </span>
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-3xl">
            Sistema riguroso de 14 axiomas, definiciones formales y 5 proposiciones con trazabilidad filológica estricta mediante etiquetas de verificación.
          </p>
        </div>

        {/* View Switchers */}
        <div className="flex items-center gap-1 p-1 bg-slate-900 rounded-lg border border-slate-800">
          <button
            onClick={() => setActiveSubTab('axioms')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeSubTab === 'axioms' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            14 Axiomas
          </button>
          <button
            onClick={() => setActiveSubTab('propositions')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeSubTab === 'propositions' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            5 Proposiciones
          </button>
          <button
            onClick={() => setActiveSubTab('dictionary')}
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
              activeSubTab === 'dictionary' ? 'bg-cyan-600 text-white' : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Diccionario
          </button>
        </div>
      </div>

      {/* Subtab 1: 14 AXIOMAS */}
      {activeSubTab === 'axioms' && (
        <div className="space-y-4">
          {/* Filter & Search Bar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por concepto, ecuación o fuente alemana..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>

            {/* Filter by Tag */}
            <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
              <span className="text-slate-500 text-[11px] whitespace-nowrap">Etiqueta:</span>
              {['all', '[VT]', '[VW]', '[P]', '[A]'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-2 py-1 rounded text-xs font-mono-tabular transition-colors ${
                    selectedTag === tag
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                  }`}
                >
                  {tag === 'all' ? 'Todos' : tag}
                </button>
              ))}
            </div>
          </div>

          {/* Master Detail Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left list of axioms */}
            <div className="lg:col-span-5 space-y-2 max-h-[560px] overflow-y-auto pr-1">
              {filteredAxioms.map((ax) => {
                const isSelected = ax.number === selectedAxiomNumber;
                return (
                  <div
                    key={ax.number}
                    onClick={() => setSelectedAxiomNumber(ax.number)}
                    className={`p-3.5 rounded-lg border cursor-pointer text-xs transition-all ${
                      isSelected
                        ? 'bg-slate-900 border-cyan-500 shadow-md'
                        : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-200">Axioma {ax.number}</span>
                      <span className="font-mono-tabular text-[10px] text-cyan-400 bg-cyan-950/80 px-1.5 py-0.5 rounded border border-cyan-800/50">
                        {ax.status}
                      </span>
                    </div>
                    <div className="text-slate-300 font-medium mt-1 truncate">{ax.title.split(': ')[1] || ax.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 truncate">{ax.freudSource}</div>
                  </div>
                );
              })}
            </div>

            {/* Right axiom detailed card */}
            <div className="lg:col-span-7 bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono-tabular text-cyan-400 font-semibold uppercase tracking-wider">
                      Axioma {currentAxiom.number} de 14
                    </span>
                    <span className="text-xs font-mono-tabular text-slate-400">· {currentAxiom.status}</span>
                  </div>
                  <h3 className="text-xl font-display font-semibold text-slate-100 mt-1">
                    {currentAxiom.title}
                  </h3>
                  <div className="text-xs text-amber-400 font-medium mt-0.5">{currentAxiom.subtitle}</div>
                </div>
              </div>

              {/* Freud Citation Box */}
              <div className="p-3.5 bg-slate-950/80 rounded-lg border border-slate-800 text-xs space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono-tabular">Fuente Freudiana Primaria</span>
                <div className="text-slate-300 font-medium">{currentAxiom.freudSource}</div>
              </div>

              {/* Mathematical Analogy Box */}
              <div className="p-3.5 bg-slate-950/80 rounded-lg border border-slate-800 text-xs space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-mono-tabular">Objeto Geométrico & Topológico</span>
                <div className="text-cyan-300 font-medium font-mono-tabular">{currentAxiom.mathAnalogy}</div>
              </div>

              {/* Summary Description */}
              <div className="text-sm text-slate-300 leading-relaxed">
                {currentAxiom.summary}
              </div>

              {/* Equations if any */}
              {currentAxiom.equations && (
                <div className="bg-slate-950 p-4 rounded-lg border border-slate-800 space-y-1.5 font-mono-tabular text-xs text-amber-300">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500">Formalización Matemática</div>
                  {currentAxiom.equations.map((eq, i) => (
                    <div key={i} className="py-0.5">{eq}</div>
                  ))}
                </div>
              )}

              {/* Clinical Significance */}
              <div className="p-3.5 bg-cyan-950/30 rounded-lg border border-cyan-800/40 text-xs space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-medium">Relevancia en la Escucha Clínica</span>
                <div className="text-slate-200 leading-relaxed">{currentAxiom.clinicalSignificance}</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Subtab 2: 5 PROPOSICIONES */}
      {activeSubTab === 'propositions' && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROPOSITIONS.map((prop) => (
              <div key={prop.number} className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-cyan-400 font-mono-tabular">
                    Proposición {prop.number}
                  </span>
                  <span className="text-[10px] font-mono-tabular text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
                    {prop.status}
                  </span>
                </div>
                <h4 className="text-sm font-display font-semibold text-slate-100">{prop.title}</h4>
                <div className="text-xs text-slate-300 leading-relaxed font-mono-tabular bg-slate-950/70 p-3 rounded-lg border border-slate-800/80">
                  {prop.statement}
                </div>
                <div className="text-xs text-slate-400 leading-relaxed">
                  <strong className="text-slate-300">Demostración formal:</strong> {prop.proofSummary}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Subtab 3: DICCIONARIO FREUD-GEOMETRÍA */}
      {activeSubTab === 'dictionary' && (
        <div className="bg-slate-900/60 rounded-xl border border-slate-800 overflow-hidden">
          <div className="p-4 border-b border-slate-800 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-semibold text-slate-100">Diccionario Controlado de Correspondencias</h3>
              <p className="text-xs text-slate-400 mt-0.5">Traducción formal entre conceptos psicoanalíticos y objetos diferenciales/topológicos</p>
            </div>
            <span className="text-xs font-mono-tabular text-cyan-400">{dictionaryRows.length} correspondencias fijadas</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-950/60 text-slate-400 font-medium">
                  <th className="py-3 px-4">Concepto Metapsicológico</th>
                  <th className="py-3 px-4">Objeto Geométrico / Topológico</th>
                  <th className="py-3 px-4">Fuente Principal</th>
                  <th className="py-3 px-4 text-center">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {dictionaryRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-3 px-4 font-medium text-slate-200 whitespace-nowrap">{row.freud}</td>
                    <td className="py-3 px-4 text-cyan-300 font-mono-tabular">{row.geometry}</td>
                    <td className="py-3 px-4 text-slate-400 whitespace-nowrap">{row.source}</td>
                    <td className="py-3 px-4 text-center">
                      <span className="font-mono-tabular text-[10px] px-1.5 py-0.5 rounded bg-slate-950 border border-slate-800 text-slate-300">
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * @license
 * Top Bar Navigation adhering strictly to the 3-Zone Top Bar Contract
 */

import React from 'react';

interface TopNavProps {
  activeTab: 'topology_3d' | 'curvature_map' | 'primary_processes' | 'repression_ricci' | 'psychic_triad' | 'surgical_lab' | 'axiomatic_corpus';
  onSelectTab: (tab: 'topology_3d' | 'curvature_map' | 'primary_processes' | 'repression_ricci' | 'psychic_triad' | 'surgical_lab' | 'axiomatic_corpus') => void;
  onResetSimulation: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({
  activeTab,
  onSelectTab,
  onResetSimulation
}) => {
  return (
    <header className="flex items-center justify-between gap-8 px-6 py-3.5 border-b border-slate-800 bg-[#070b14]/90 backdrop-blur-md sticky top-0 z-50">
      {/* Zone 1: Single-element Brand Wordmark */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          onSelectTab('topology_3d');
        }}
        className="text-base md:text-lg font-display font-semibold tracking-wide text-slate-100 whitespace-nowrap shrink-0 hover:text-cyan-400 transition-colors"
      >
        Metapsicología Freudiana
      </a>

      {/* Zone 2: 4–5 single-line clean text links with hover styling */}
      <nav className="hidden lg:flex items-center gap-5 text-xs font-medium text-slate-400">
        <button
          onClick={() => onSelectTab('topology_3d')}
          className={`transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            activeTab === 'topology_3d' ? 'text-cyan-400 font-semibold border-b border-cyan-400' : 'hover:text-slate-200'
          }`}
        >
          Topología 3D
        </button>
        <button
          onClick={() => onSelectTab('curvature_map')}
          className={`transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            activeTab === 'curvature_map' ? 'text-cyan-400 font-semibold border-b border-cyan-400' : 'hover:text-slate-200'
          }`}
        >
          Mapa Curvatura
        </button>
        <button
          onClick={() => onSelectTab('primary_processes')}
          className={`transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            activeTab === 'primary_processes' ? 'text-cyan-400 font-semibold border-b border-cyan-400' : 'hover:text-slate-200'
          }`}
        >
          Procesos Primarios
        </button>
        <button
          onClick={() => onSelectTab('repression_ricci')}
          className={`transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            activeTab === 'repression_ricci' ? 'text-cyan-400 font-semibold border-b border-cyan-400' : 'hover:text-slate-200'
          }`}
        >
          Represión & Ricci
        </button>
        <button
          onClick={() => onSelectTab('psychic_triad')}
          className={`transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            activeTab === 'psychic_triad' ? 'text-cyan-400 font-semibold border-b border-cyan-400' : 'hover:text-slate-200'
          }`}
        >
          Ello · Yo · Superyó
        </button>
        <button
          onClick={() => onSelectTab('surgical_lab')}
          className={`transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            activeTab === 'surgical_lab' ? 'text-cyan-400 font-semibold border-b border-cyan-400' : 'hover:text-slate-200'
          }`}
        >
          Cirugía & Fantasma
        </button>
        <button
          onClick={() => onSelectTab('axiomatic_corpus')}
          className={`transition-colors whitespace-nowrap shrink-0 pb-0.5 ${
            activeTab === 'axiomatic_corpus' ? 'text-cyan-400 font-semibold border-b border-cyan-400' : 'hover:text-slate-200'
          }`}
        >
          Axiomas & Fuentes
        </button>
      </nav>

      {/* Zone 3: 1 primary action */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={onResetSimulation}
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm"
        >
          Reiniciar Estado
        </button>
      </div>
    </header>
  );
};

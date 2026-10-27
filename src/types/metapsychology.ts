/**
 * @license
 * Metapsicología Freudiana & Modelo de Poincaré-Perelman
 * Tipos de datos fundamentales del modelo analógico
 */

export type VerificationStatus =
  | '[VT]'
  | '[VW]'
  | '[M]'
  | '[P]'
  | '[A]'
  | '[VT/VW]'
  | '[VW/A]'
  | '[M/P]'
  | '[VW/P]'
  | '[P/VW]';

export interface VorstellungsMark {
  id: string;
  name: string;
  originalTerm: string; // e.g. "Sachvorstellung", "Trauma infantil", "n (Fantasma primordial)"
  type: 'primal_core' | 'traumatic_separable' | 'mnemic_latent';
  u: number; // parametric position along Horn Torus (0 to 2pi)
  v: number; // parametric position along cross-section (0 to 2pi)
  charge: number; // a_i (investidura / Besetzung)
  state: 'latent' | 'active';
  threshold: number; // a*
  isPrimal: boolean; // if true, n core (nunca separable)
  associations: string[]; // Connected mark IDs
  description: string;
  gwCitation?: string;
}

export interface FacilitatedEdge {
  id: string;
  source: string;
  target: string;
  weight: number; // Bahnung w_ij (0 to 1)
  isCarryingPulsion: boolean; // active when w >= theta
  flux: number; // current instinctual flow Q
}

export interface PartialDrive {
  id: 'oral' | 'anal' | 'scopique' | 'invocante';
  name: string;
  germanName: string;
  radius: number; // delta_k
  angularSpeed: number; // omega_k
  damping: number; // alpha_k
  color: string;
  passesThroughCusp: boolean; // Only invocante passes through cusp c
  description: string;
}

export interface MemoryPairSI {
  id: string;
  symbolicWord: string; // s_j (Wortvorstellung / significante)
  imaginaryThing: string; // i_j (Sachvorstellung / imagen)
  bindingStrength: number; // b_j >= 0 (ligadura consciente de 1915)
  decayRate: number; // lambda_j (0 if fixed by Nebenmensch event, >0 if fades)
  origin: 'nebenmensch_fixed' | 'weak_circulation' | 'associative';
}

export interface MetapsychicState {
  // Energetics & Instancias
  idQuantityQ: number; // Cantidad libre total en el Ello
  endogenousDriveRate: number; // Triebfeder s(t)
  egoBoundEnergy: number; // Energía ligada en el Yo
  egoRicciEntropyW: number; // Funcional de Perelman / estabilidad del Yo
  superegoAcousticInput: number; // u(t) = K|_B (voz del superyó / imperativo)
  egoVoiceOutput: number; // y(t) (salida vocal observable por la cúspide)
  symptomLeakage: number; // y_sint(t) = y(t) - y0(t)

  // Topological and defensive parameters
  anxietyRadiusDelta: number; // Radio de angustia señal (0.15 to 0.6)
  repressionThresholdTheta: number; // Umbral de Bahnung para pulsión
  ricciFlowSpeed: number; // Velocidad del flujo de contrainvestidura en Omega
  gaussBonnetTotalCurvature: number; // Conservación integral K dA + kg ds

  // Primary process active states
  condensationActive: boolean;
  displacementActive: boolean;
  freeEnergyGliding: boolean;
  simulationStep: number;
}

export interface AxiomItem {
  number: number;
  title: string;
  subtitle: string;
  freudSource: string;
  mathAnalogy: string;
  status: VerificationStatus;
  summary: string;
  equations?: string[];
  clinicalSignificance: string;
}

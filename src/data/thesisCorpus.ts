/**
 * @license
 * Metapsicología Freudiana & Modelo de Poincaré-Perelman
 * Corpus de Axiomas, Fuentes Históricas (GW / Imago) y Topología
 */

import { AxiomItem, VorstellungsMark, FacilitatedEdge, PartialDrive, MemoryPairSI } from '../types/metapsychology';

export const INITIAL_MARKS: VorstellungsMark[] = [
  {
    id: 'mark_n',
    name: 'n — Núcleo de la Fantasía Primordial',
    originalTerm: 'Urphantasie / Urverdrängung (Fase 2)',
    type: 'primal_core',
    u: Math.PI,
    v: Math.PI / 2,
    charge: 9.8,
    state: 'active',
    threshold: 0,
    isPrimal: true,
    associations: ['mark_v1', 'mark_v2'],
    description: 'Marca primaria indestructible. Sumidero rodeado por la pared rígida de angustia señal (kg = 1/δ). Nunca fue consciente; construida en análisis.',
    gwCitation: 'Ein Kind wird geschlagen (1919, GW XII) · Carta 2.5.1897 (Brief 61) · Entwurf pp. 415-416'
  },
  {
    id: 'mark_v1',
    name: 'p₁ — Vivencia de Castigo / Culpa Temprana',
    originalTerm: 'Schuldgefühl / Szene I',
    type: 'traumatic_separable',
    u: Math.PI * 0.7,
    v: Math.PI * 0.35,
    charge: 6.5,
    state: 'active',
    threshold: 4.0,
    isPrimal: false,
    associations: ['mark_n', 'mark_v3'],
    description: 'Marca traumática separable. Cuello cilíndrico formado por contrainvestidura. Operable mediante cirugía analítica.',
    gwCitation: 'Carta 30.5.1896 (Imago p. 175) · Die Verdrängung (1915, GW X)'
  },
  {
    id: 'mark_v2',
    name: 'p₂ — Escena Primitiva Oída (Schutzbau)',
    originalTerm: 'Urszene / Gehörtes',
    type: 'traumatic_separable',
    u: Math.PI * 1.3,
    v: Math.PI * 0.4,
    charge: 5.2,
    state: 'active',
    threshold: 3.5,
    isPrimal: false,
    associations: ['mark_n', 'mark_v4'],
    description: 'Huella acústica arcaica fijada por el Nebenmensch. Conectada al orificio de la voz c mediante la pulsión invocante.',
    gwCitation: 'Carta 2.5.1897 (Brief 61) · Zur Auffassung der Aphasien (1891)'
  },
  {
    id: 'mark_v3',
    name: 'p₃ — Marca de Pérdida Objetal (Sombra del Objeto)',
    originalTerm: 'Schatten des Objekts',
    type: 'traumatic_separable',
    u: Math.PI * 0.4,
    v: Math.PI * 0.75,
    charge: 4.8,
    state: 'active',
    threshold: 3.0,
    isPrimal: false,
    associations: ['mark_v1', 'mark_v5'],
    description: 'Estructura persistente análoga al solitón de gradiente. Gasto de duelo suspendido; identificación melancólica.',
    gwCitation: 'Trauer und Melancholie (1917, GW X, pp. 428–446)'
  },
  {
    id: 'mark_v4',
    name: 'p₄ — Huella Somática Infantil',
    originalTerm: 'Organ-Lust / Residuo de Inervación',
    type: 'mnemic_latent',
    u: Math.PI * 1.6,
    v: Math.PI * 0.8,
    charge: 2.1,
    state: 'latent',
    threshold: 4.5,
    isPrimal: false,
    associations: ['mark_v2'],
    description: 'Marca mnémica latente en el Icc. Sin descarga actual; susceptible de salto de carga por posterioridad (Nachträglichkeit).',
    gwCitation: 'Carta 14.2.1897 (Imago p. 247) · Entwurf I (Trägheitsprinzip)'
  },
  {
    id: 'mark_v5',
    name: 'p₅ — Inscripción Significante Preconsciente',
    originalTerm: 'Wortvorstellung / Vb-Niederschrift',
    type: 'mnemic_latent',
    u: Math.PI * 0.2,
    v: Math.PI * 0.2,
    charge: 1.4,
    state: 'latent',
    threshold: 3.0,
    isPrimal: false,
    associations: ['mark_v3'],
    description: 'Huella con traducción a palabra disponible en el límite de Ω. Pertenece al Yo oficial y modula el síntoma.',
    gwCitation: 'Carta 52 (6.12.1896, p. 186) · Das Unbewußte (1915, GW X, p. 300)'
  }
];

export const INITIAL_EDGES: FacilitatedEdge[] = [
  { id: 'e_v1_n', source: 'mark_v1', target: 'mark_n', weight: 0.85, isCarryingPulsion: true, flux: 4.2 },
  { id: 'e_v2_n', source: 'mark_v2', target: 'mark_n', weight: 0.78, isCarryingPulsion: true, flux: 3.8 },
  { id: 'e_v1_v3', source: 'mark_v1', target: 'mark_v3', weight: 0.65, isCarryingPulsion: true, flux: 2.5 },
  { id: 'e_v2_v4', source: 'mark_v2', target: 'mark_v4', weight: 0.35, isCarryingPulsion: false, flux: 0.4 },
  { id: 'e_v3_v5', source: 'mark_v3', target: 'mark_v5', weight: 0.42, isCarryingPulsion: false, flux: 0.6 }
];

export const PARTIAL_DRIVES: PartialDrive[] = [
  {
    id: 'invocante',
    name: 'Pulsión Invocante (Voz / Oído)',
    germanName: 'Anrufender Trieb (Stimme/Gehör)',
    radius: 0.42,
    angularSpeed: 1.4,
    damping: 0.08,
    color: '#38bdf8', // Sky blue
    passesThroughCusp: true,
    description: 'Única pulsión observable de modo directo: hace una excursión deformada a través del orificio c (entra lo oído por B+, sale la voz por B-). Generador de π₁(S) ≅ ℤ.'
  },
  {
    id: 'oral',
    name: 'Pulsión Oral (Incorporación)',
    germanName: 'Oraler Trieb (Einverleibung)',
    radius: 0.32,
    angularSpeed: 1.8,
    damping: 0.12,
    color: '#f97316', // Orange
    passesThroughCusp: false,
    description: 'Ciclo límite concéntrico C_oral de radio δ_oral. Orbita n sin tocarlo; repetición en acto ligada al primer objeto Nebenmensch.'
  },
  {
    id: 'anal',
    name: 'Pulsión Anal (Retención / Expulsión)',
    germanName: 'Analer Trieb (Beherrschung)',
    radius: 0.26,
    angularSpeed: 2.2,
    damping: 0.15,
    color: '#eab308', // Amber/Yellow
    passesThroughCusp: false,
    description: 'Ciclo límite C_anal alrededor de n. Traduce la polaridad retener/evacuar como modulación de Q en la frontera geodésica.'
  },
  {
    id: 'scopique',
    name: 'Pulsión Escópica (Mirada)',
    germanName: 'Schautrieb (Blick)',
    radius: 0.38,
    angularSpeed: 1.1,
    damping: 0.09,
    color: '#a855f7', // Purple
    passesThroughCusp: false,
    description: 'Ciclo límite C_escópica. Circula en la sombra inconsciente del fantasma, inferida a través del síntoma visual y conversivo.'
  }
];

export const INITIAL_SI_PAIRS: MemoryPairSI[] = [
  {
    id: 'si_1',
    symbolicWord: '«Pegan / Golpear» (Schlagen)',
    imaginaryThing: 'Escena de azote / cuerpo tembloroso',
    bindingStrength: 0.88,
    decayRate: 0.0, // Fixed by Nebenmensch
    origin: 'nebenmensch_fixed'
  },
  {
    id: 'si_2',
    symbolicWord: '«Padre / Autoridad» (Vater)',
    imaginaryThing: 'Silueta severa / mano alzada',
    bindingStrength: 0.76,
    decayRate: 0.0,
    origin: 'nebenmensch_fixed'
  },
  {
    id: 'si_3',
    symbolicWord: '«Vergüenza secreta» (Scham)',
    imaginaryThing: 'Rostro encendido / calor torácico',
    bindingStrength: 0.54,
    decayRate: 0.04,
    origin: 'associative'
  },
  {
    id: 'si_4',
    symbolicWord: '«Frase cotidiana de la sesión»',
    imaginaryThing: 'Imagen difusa del consultorio',
    bindingStrength: 0.22,
    decayRate: 0.12,
    origin: 'weak_circulation'
  }
];

export const THESIS_AXIOMS: AxiomItem[] = [
  {
    number: 1,
    title: 'Axioma 1: Das Ding y Lo Real',
    subtitle: 'La variedad S de la familia Horn Torus',
    freudSource: 'Entwurf einer Psychologie (1895, pp. 415-416) · Das Ding como resto constante del Nebenmensch',
    mathAnalogy: 'Superficie compacta S = T₁ con cúspide c = (0,0,0) y familia regular Tr (r < 1)',
    status: '[VT]',
    summary: 'El Real psíquico o Das Ding se modela como la superficie sobre la que se inscriben las huellas mnémicas. En la cúspide c dos cuernos se tocan formando el orificio de la palabra y el oído.',
    equations: [
      'x^2 + y^2 + z^2 = 2\\sqrt{x^2 + y^2}',
      's \\approx z^2 / 2 \\quad \\text{cerca de } c',
      '\\pi_1(S) \\cong \\mathbb{Z}'
    ],
    clinicalSignificance: 'Lo Real no es una representación ni un símbolo: es el sustrato inextirpable donde el aparato debe distribuir sus tensiones.'
  },
  {
    number: 2,
    title: 'Axioma 2: Vorstellungsrepräsentanzen (Marcas VR)',
    subtitle: 'Conjunto discreto de inscripciones con carga',
    freudSource: 'Carta 2.5.1897 (Brief 61) · Die Verdrängung (1915, GW X)',
    mathAnalogy: 'V = VT ∪ {n} ⊂ S \\ {c}, con cargas a_i ≥ 0 (curvatura concentrada)',
    status: '[VT]',
    summary: 'Las representaciones inconscientes son marcas puntuales con carga afectiva a_i. Se dividen en marcas traumáticas separables VT y la marca primaria n (el núcleo nunca consciente de la fantasía).',
    equations: [
      'V = V_T \\cup \\{n\\}',
      'a_i \\ge 0, \\quad \\sigma_i \\in \\{\\text{latente}, \\text{activo}\\}'
    ],
    clinicalSignificance: 'El trauma no es un relato lineal sino una carga puntual no ligada que altera la métrica del aparato.'
  },
  {
    number: 3,
    title: 'Axioma 3: El Hilo Σ y la Facilitación (Bahnung)',
    subtitle: 'Grafo ponderado de relaciones geodésicas',
    freudSource: 'Entwurf (1895, Parte I) · Kontaktschranken y permeabilidad',
    mathAnalogy: 'Grafo Γ = (V, E, w) realizado por geodésicas mínimas en S \\ D_δ(n)',
    status: '[VT]',
    summary: 'La memoria no es depósito ni copia: es el grado de facilitación w(e) entre neuronas/marcas. El núcleo primordial n carece de aristas incidentes cargadas (w(e) = 0 hacia n), impidiendo que la pulsión lo penetre.',
    equations: [
      'w: E \\to [0, 1] \\quad (\\text{facilitación})',
      'w(e) = 0 \\quad \\forall e \\sim n'
    ],
    clinicalSignificance: 'Recordar es transitar por vías ya rebajadas energéticamente por vivencias anteriores.'
  },
  {
    number: 4,
    title: 'Axioma 4: La Pulsión (Trieb) y Procesos Primarios',
    subtitle: 'Flujo dinámico de cantidad Q sobre Γ_θ',
    freudSource: 'Entwurf (Trägheitsprinzip & Konstanzprinzip) · Triebe und Triebschicksale (1915)',
    mathAnalogy: 'dQ/dt = -L_θ Q + s(t), con laplaciano de grafo L_θ y fuente endógena s',
    status: '[VT]',
    summary: 'La pulsión es el flujo de cantidad Q por los ciclos cargados donde w ≥ θ. Condensación (Verdichtung) suma cargas en nodos; Desplazamiento (Verschiebung) traslada Q con resistencia nula entre representaciones.',
    equations: [
      '\\frac{dQ}{dt} = -L_\\theta Q + s(t)',
      'L_\\theta = D_\\theta - W_\\theta'
    ],
    clinicalSignificance: 'El proceso primario no reconoce la lógica formal: desliza intensidades y condensa múltiples cadenas en una sola investidura.'
  },
  {
    number: 5,
    title: 'Axioma 5: Núcleo de la Fantasía y Ciclo Límite',
    subtitle: 'Sumidero repulsivo y atractor periódico de Poincaré',
    freudSource: 'Ein Kind wird geschlagen (1919, fase 2) · Hemmung, Symptom und Angst (1926)',
    mathAnalogy: 'ṙ = -α(r - δ), φ̇ = ω; ciclo límite C_δ a distancia δ',
    status: '[VW]',
    summary: 'La pulsión es atraída hacia el núcleo n, pero a distancia δ la angustia señal genera una pared repulsiva. La pulsión queda atrapada en el ciclo límite C_δ (repetición en acto).',
    equations: [
      '\\dot{r} = -\\alpha(r - \\delta), \\quad \\dot{\\varphi} = \\omega',
      'w(C_\\delta, n) = \\pm 1 \\quad (\\text{índice de giro})'
    ],
    clinicalSignificance: 'La compulsión de repetición no es una elección moral ni un defecto; es un atractor dinámico del cual el aparato no sale espontáneamente.'
  },
  {
    number: 6,
    title: 'Axioma 6: Indestructibilidad de la Fantasía',
    subtitle: 'Invarianza homotópica en el dominio preconsciente Ω',
    freudSource: 'Recordar, repetir y reelaborar (1914, GW X) · Lo inconsciente (1915)',
    mathAnalogy: 'C_δ no es null-homotópico en Ω; en 3D clase generadora en π₁(S² × S¹) ≅ ℤ',
    status: '[VT/VW]',
    summary: 'Ningún flujo continuo ni suavización de métrica puede contraer C_δ a un punto en Ω. La fantasía primordial no se borra: solo se puede circunscribir y reorganizar.',
    equations: [
      'C_\\delta \\not\\sim 0 \\quad \\text{en } \\Omega',
      '\\pi_1(M) \\cong \\mathbb{Z}'
    ],
    clinicalSignificance: 'Un análisis no destruye el fantasma fundamental: construye su borde para que el sujeto deje de padecerlo como destino sintomático.'
  },
  {
    number: 7,
    title: 'Axioma 7: Nachträglichkeit (Acción Diferida)',
    subtitle: 'Saltos de investidura con ganancia de maduración',
    freudSource: 'Carta 14.2.1897 (Imago p. 247) · Carta 2.5.1897 (Brief 61)',
    mathAnalogy: 'a_i(t_j^+) = a_i(t_j^-) + g(t_j) · κ_ij · m_j, con ganancia g ≥ 1',
    status: '[VT]',
    summary: 'Un acontecimiento posterior activa una marca infantil preexistente. Al haber madurado el aparato, el recuerdo produce un desprendimiento de afecto incomparablemente mayor que la vivencia original.',
    equations: [
      'a_i(t^+) = a_i(t^-) + g(t) \\cdot \\kappa_{ij} m_j',
      'g(t) \\ge 1 \\quad (\\text{ganancia evolutiva})'
    ],
    clinicalSignificance: 'El trauma no es el suceso infantil en sí, sino su reinscripción retroactiva en la pubertad o adultez.'
  },
  {
    number: 8,
    title: 'Axioma 8: Atemporalidad Estructural vs. Dinámica Temporal',
    subtitle: 'La red del Icc no envejece; la pulsión y la defensa sí fluyen',
    freudSource: 'Das Unbewußte (1915, GW X) · Neue Folge der Vorlesungen (1933)',
    mathAnalogy: 'da_i/dt = 0 entre eventos; parámetro t rige el flujo de Ricci en Ω',
    status: '[VW]',
    summary: 'Las marcas y el grafo Γ no sufren degradación temporal espontánea (atemporalidad del Icc). En cambio, el tiempo t mide la defensa del Yo (flujo de Ricci) y la circulación pulsional.',
    equations: [
      '\\frac{\\partial a_i}{\\partial t} = 0 \\quad (t \\in (t_j, t_{j+1}))',
      '\\frac{\\partial g}{\\partial t} = -2\\operatorname{Ric}(g) \\quad \\text{en } \\Omega'
    ],
    clinicalSignificance: 'Lo reprimido permanece intacto durante décadas con su carga originaria intacta hasta que una interpretación o síntoma lo reactiva.'
  },
  {
    number: 9,
    title: 'Axioma 9: La Cúspide c como Orificio (Voz y Oído)',
    subtitle: 'El operador de Dirichlet a Neumann y la voz del Superyó',
    freudSource: 'Carta 52 · Zur Auffassung der Aphasien (1891) · Das Ich und das Es (1923, Hörkappe)',
    mathAnalogy: 'u(t) = K|_B (oído/imperativo) e y(t) = ∮_B ∂_ν K ds (voz observable)',
    status: '[VT/VW]',
    summary: 'La cúspide del Horn Torus es el orificio común de entrada (u: la palabra oída, mandato parental del Superyó) y salida (y: la palabra articulada en sesión). Es el único observable directo del analista.',
    equations: [
      'u(t) = K|_B \\quad (\\text{Dirichlet: oído/Superyó})',
      'y(t) = \\oint_B \\partial_\\nu K\\, ds \\quad (\\text{Neumann: voz observable})'
    ],
    clinicalSignificance: 'En el diván solo se escucha la voz y(t). A partir de sus modulaciones y tropiezos se reconstruye la topología del inconsciente.'
  },
  {
    number: 10,
    title: 'Axioma 10: Cirugía de Perelman y Cura Analítica',
    subtitle: 'Extracción de cuellos traumáticos sin tocar el núcleo n',
    freudSource: 'Erinnern, Wiederholen und Durcharbeiten (1914) · Perelman (arXiv:math/0303109)',
    mathAnalogy: 'Corte a lo largo de cuello σ_i (ℓ < ℓ_min), tapa con casquete suave; 2πδ ≥ ℓ_min',
    status: '[VW/A]',
    summary: 'La cirugía corta marcas traumáticas separables VT cuyos cuellos se han estrangulado por exceso de contrainvestidura. El núcleo n nunca es separable por la cota de angustia 2πδ ≥ ℓ_min.',
    equations: [
      'V \\leftarrow V \\setminus \\{p_i\\}, \\quad a_i \\leftarrow 0',
      '2\\pi\\delta \\ge \\ell_{\\min} \\quad (\\text{barrera de preservación del fantasma})'
    ],
    clinicalSignificance: 'La cura analítica liquida síntomas y desata fijaciones neuróticas, pero no puede ni debe destruir la singularidad de la fantasía constitutiva.'
  },
  {
    number: 11,
    title: 'Axioma 11: Las Pulsiones Parciales y el Fantasma Común',
    subtitle: 'Cuatro ciclos concéntricos alrededor del único n',
    freudSource: 'Drei Abhandlungen zur Sexualtheorie (1905) · Lacan Seminario XI (1964)',
    mathAnalogy: 'K = {oral, anal, escópica, invocante}, ciclos C_k con radios δ_k ≥ δ',
    status: '[M/P]',
    summary: 'Todas las pulsiones parciales circulan concéntricamente alrededor de la misma marca primaria n. Los cuatro circuitos son la misma repetición en registros pulsionales distintos.',
    equations: [
      '\\dot{r}_k = -\\alpha_k(r - \\delta_k), \\quad \\dot{\\varphi}_k = \\omega_k',
      '\\delta_k \\ge \\delta \\quad \\forall k \\in K'
    ],
    clinicalSignificance: 'Bajo la diversidad de demandas pulsionales orales, anales o escópicas, yace la misma matriz fantasmática singular.'
  },
  {
    number: 12,
    title: 'Axioma 12: Memoria Preconsciente S–I (Palabra y Cosa)',
    subtitle: 'Pares atados (s_j, ι_j) en el dominio del Yo Ω',
    freudSource: 'Das Unbewußte (1915, GW X, p. 300: Sachvorstellung + Wortvorstellung)',
    mathAnalogy: 'W = {(s_j, ι_j)} con ligadura b_j(t) ≥ 0 y decaimiento λ_j ≥ 0',
    status: '[VW/P]',
    summary: 'La representación consciente exige la ligadura de la representación-cosa (ι) con la representación-palabra (s). A diferencia de las marcas Icc atemporales, las ligaduras preconscientes sufren olvido si λ > 0.',
    equations: [
      '\\frac{db_j}{dt} = -\\lambda_j b_j \\quad (\\text{olvido preconsciente})',
      'b_j(t^+) = b_j(t^-) + \\beta \\kappa_{ij} m_j'
    ],
    clinicalSignificance: 'Para que un afecto o vivencia se elabore, debe poder ligarse a restos de palabra; lo des-ligado retorna en el cuerpo o en la compulsión.'
  },
  {
    number: 13,
    title: 'Axioma 13: Observabilidad de la Pulsión Invocante',
    subtitle: 'C_inv atraviesa el orificio de la cúspide c',
    freudSource: 'Das Ich und das Es (1923) · Lacan (Seminario XI)',
    mathAnalogy: 'C_inv pasa por B+, cruza c y sale por B-; genera π₁(S) ≅ ℤ',
    status: '[P/VW]',
    summary: 'De todas las pulsiones, solo la invocante tiene acceso directo al exterior a través de la cúspide. Las demás pulsiones solo se infieren matemáticamente o clínicamente.',
    equations: [
      'C_{\\text{inv}} \\cap B \\neq \\emptyset',
      'y(t) = y_0(t) + A \\cos(\\omega_{\\text{inv}} t + \\theta_0) + \\dots'
    ],
    clinicalSignificance: 'El analista opera con la voz y el oído como punto privilegiado de enganche de la transferencia.'
  },
  {
    number: 14,
    title: 'Axioma 14: Fijación por el Nebenmensch (El Prójimo)',
    subtitle: 'Incorporación permanente con λ = 0',
    freudSource: 'Entwurf pp. 415-416 · El complejo del semejante: Ding vs. comprensión',
    mathAnalogy: 'Evento tipo N vía u(t) fija par (s_j, ι_j) con tasa de disolución λ_j = 0',
    status: '[VT]',
    summary: 'El prójimo (primer auxilio y primer obstáculo) fija marcas indelebles en el sujeto a través de la palabra escuchada. Lo no asimilable queda como Das Ding; lo asimilado funda las marcas permanentes del Yo.',
    equations: [
      '\\lambda_j = 0 \\quad \\text{si evento de tipo } N \\text{ (fijación)}'
    ],
    clinicalSignificance: 'La subjetividad se constituye por la intromisión originaria del deseo y la palabra del Otro auxiliador.'
  }
];

export const PROPOSITIONS = [
  {
    number: 1,
    title: 'Proposición 1: Indestructibilidad del Atractor C_δ bajo Flujo Suave',
    statement: 'El circuito de repetición C_δ no es contraíble en Ω. Su exponente de Floquet es -α < 0, garantizando estabilidad estructural ante perturbaciones del campo pulsional. El flujo de Ricci suave sobre Tr (r < 1) no altera las clases de homotopía.',
    status: '[VW/P]',
    proofSummary: 'Como Ω tiene agujeros producidos por la remoción de los discos de las marcas y la cúspide c, C_δ pertenece a una clase no trivial en π₁(Ω). Las deformaciones métricas continuas inducidas por el flujo de Ricci preservan los invariantes homotópicos.'
  },
  {
    number: 2,
    title: 'Proposición 2: Conservación de Curvatura y Gasto de la Defensa (Gauss–Bonnet)',
    statement: 'En la región preconsciente Ω, la curvatura total satisface ∫_Ω K dA + ∮_∂Ω kg ds = 2π χ(Ω) = -2π(k + 1). La activación de una marca por Nachträglichkeit eleva kg = h(a_i), forzando una redistribución obligada de la curvatura interna K en todo Ω.',
    status: '[VT/VW]',
    proofSummary: 'Por el teorema de Gauss-Bonnet para superficies con borde, el presupuesto topológico es fijo. El Yo no puede sofocar una representación traumática localmente sin aumentar la tensión (curvatura) en el resto del campo psíquico consciente (Aufwand).'
  },
  {
    number: 3,
    title: 'Proposición 3: Inmunidad del Fantasma ante la Cirugía Analítica',
    statement: 'La cirugía de Perelman sobre una marca traumática separable p_i acotada por un cuello σ_i deja estrictamente invariante la clase de homotopía de C_δ y su índice de giro w(C_δ, n) = ±1.',
    status: '[P/VW]',
    proofSummary: 'Como σ_i acota un disco que excluye a n y a c, la extracción de dicho disco y su reemplazo por un casquete hemisférico suave no modifica los lazos que rodean a n. La pulsión se reorganiza con las marcas restantes sin que el núcleo sea tocado.'
  },
  {
    number: 4,
    title: 'Proposición 4: Preservación de los Ciclos Parciales',
    statement: 'Ninguna cirugía sobre marcas recuperables altera la familia concéntrica de ciclos {C_k} (oral, anal, escópica, invocante).',
    status: '[P]',
    proofSummary: 'Se deduce directamente de la Proposición 3 y del hecho de que todos los C_k tienen radios δ_k ≥ δ > ℓ_min / 2π.'
  },
  {
    number: 5,
    title: 'Proposición 5: El Circuito Invocante como Generador de π₁(S) ≅ ℤ',
    statement: 'En el Horn Torus, π₁(S) ≅ ℤ está generado por el lazo que pasa por la cúspide c. C_inv representa dicho generador, garantizando que el canal de la palabra sea un invariante global irreductible.',
    status: '[VW/P]',
    proofSummary: 'En dimensión 3 (M = S² × S¹), pegar la 3-celda no altera el grupo fundamental. La inclusión S ↪ M induce un isomorfismo en π₁, haciendo que la pulsión invocante sea el lazo esencial de la existencia psíquica.'
  }
];

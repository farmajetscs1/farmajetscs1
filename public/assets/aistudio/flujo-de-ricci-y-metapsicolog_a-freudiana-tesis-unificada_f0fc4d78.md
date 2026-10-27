# Flujo de Ricci y metapsicología freudiana
### Un modelo analógico a partir de Poincaré y Perelman
**DOCUMENTO UNIFICADO (v3) · 21 de octubre de 2026**

*Estados de verificación: [VT] verificado en el texto alemán (Imago) · [VW] verificado en fuente web · [M] citado de memoria, pendiente de verificación · [P] propuesta del trabajo, no deducida de fuente · [A] decisión explícita del autor*

## Nota de unificación

Este documento fusiona los tres archivos del proyecto en una sola tesis. Al comienzo de cada bloque se indica de qué archivo proviene. Criterios con los que se resolvieron los duplicados:

- **Columna vertebral:** el documento maestro integrado, por ser el más reciente y el que incorpora las correcciones.
- **Versión vigente:** donde una addenda corrige un axioma o una definición, la addenda manda; queda colocada como «corrección vigente» junto al Capítulo 5.
- **Detalle:** cuando el maestro solo resume y el borrador v2 conserva la versión completa con ecuaciones, se conserva la versión completa (Capítulos 5 y 6, modelo 3D, fuentes, apéndices).
- **Extensión E:** se incorpora el texto íntegro del archivo de la extensión; el maestro solo tenía un resumen comprimido.
- **Excluido lo superado:** el esquema previo del Capítulo 4 y la lista antigua del Capítulo 7, reemplazados por las versiones completas.
- **Reparaciones:** la tabla del resumen de axiomas de método (1.13), rota en el original, y los artefactos de formato del maestro.

## Mapa de procedencia (qué aporta cada texto)

| Archivo de origen | Qué aporta a esta versión unificada |
| --- | --- |
| Tesis_DOCUMENTO_MAESTRO (5) integrado.docx | Marco general; Capítulo 1 completo; Capítulo 4 ampliado; Capítulos 7 y 8 completos; addendas vigentes (Axioma 8, Definición 4, Proposición 1/Axioma 6, citas [VW]); estructura por capítulo; próximos pasos; lista de archivos del proyecto |
| Tesis_Ricci_Freud_borrador_completo_v2_con_3D uno.docx | Condiciones originales del pedido; evaluación del texto Horn Torus; tablas de materiales y verificación de fuentes; notas de trabajo de los Capítulos 2 y 3; Capítulo 5 completo (decisiones, axiomas 1–10, definiciones 1–12, proposiciones 1–3, diccionario, revisión de consistencia); Capítulo 6 completo; modelo 3D completo; preguntas abiertas; apéndices A–D |
| Extension_Cap5_Pulsiones_parciales_y_marcas_SI de grok.docx | Extensión E íntegra: pulsiones parciales y marcas S–I (Axiomas 11–14, Definiciones 13–18, Proposiciones 4–5, diccionario ampliado, límites) |

## Contenido

- 0. Nota de unificación y mapa de procedencia
- 1. Marco del proyecto
- 2. El texto inicial (Horn Torus) y su evaluación
- 3. Materiales, fuentes y verificación
- 4. Estructura de la tesis y estado por capítulo
- Capítulo 1. Introducción y axiomas de método (COMPLETO)
- Capítulo 2. Freud: Proyecto y aparato (esquema + notas)
- Capítulo 3. Poincaré (esquema + notas)
- Capítulo 4. Flujo de Ricci y Perelman (COMPLETO, ampliado)
- Capítulo 5. La analogía axiomática (resumen + desarrollo completo + correcciones vigentes + contrainvestidura)
- Extensión E. Pulsiones parciales y marcas S–I (COMPLETA)
- Capítulo 6. La fantasía «Pegan a un niño» (COMPLETO)
- Modelo 3D: S² × S¹ (COMPLETO)
- Capítulo 7. Límites y objeciones (COMPLETO)
- Capítulo 8. Conclusiones (COMPLETO)
- Próximos pasos y preguntas abiertas
- Apéndices A–D


> 📌 **Procedencia:** Documento maestro, sección I

# I. Marco del proyecto y estado general

Este documento maestro unifica todo lo producido en el proyecto de tesis. Incorpora el Capítulo 1 en versión extendida (~7.200 palabras), el núcleo axiomático (Cap. 5), la sección de contrainvestidura, el Capítulo 6 corregido, el modelo 3D y los borradores de los Capítulos 2–4.

Estado global: el contrato de lectura (Cap. 1) y el núcleo formal (Caps. 5–6 + contrainvestidura + 3D) están armados. Los Capítulos 2, 3 y 4 permanecen en nivel de esquema sólido: tienen el hilo conductor, las fuentes y las ecuaciones base, pero no la extensión de 35–60 páginas prevista. Esa expansión es el siguiente trabajo prioritario.

## Condiciones acordadas

- Tipo: tesis · ~300 páginas · 6 meses
- Lectores: psicoanalistas
- Naturaleza: analogía matemática con ecuaciones (no ontología de la psique)
- Freud: Vorstellung, VR, pulsión, Proyecto, Ding, Nachträglichkeit, fantasía
- Lacan: mínimo (esquema L; Real = Ding; sin nudos)
- Matemática: conjetura de Poincaré, flujo de Ricci, cirugía, entropía de Perelman


> 📌 **Procedencia:** Borrador v2, Parte I (detalle del pedido original)

# Parte I. Marco del proyecto

## 1.1 Pedido y condiciones

El proyecto pide recrear una teoría psicoanalítica freudiana, con algo de Lacan, a partir de la teoría de Poincaré y Perelman. Las condiciones que fuiste dando fueron las siguientes.

| **Aspecto** | **Decisión** |
| Tipo de documento | Tesis. Extensión de unas 300 páginas en seis meses. |
| Lectores | Psicoanalistas. |
| Naturaleza del trabajo | Una analogía matemática, con ecuaciones. No es una tesis sobre el cerebro ni una afirmación de que la psique *es* una variedad. |
| Conceptos freudianos | Vorstellung, Vorstellungsrepräsentanz, pulsión, Sach- y Wortvorstellung, aparato de inscripciones (carta 52), Proyecto de psicología, afasia, Das Ding, y los inicios del psicoanálisis. |
| Lacan | Un mínimo: el esquema L (S–I), lo Real como Ding y, más adelante, la analogía de la fantasía. No se trabajan los nudos. |
| Fantasía | La fantasía freudiana, tal como Freud la presenta en «Pegan a un niño» (1919). |
| Matemática | La conjetura de Poincaré, el flujo de Ricci, la cirugía y la entropía de Perelman, con ecuaciones. |
| Fuentes | Fuentes primarias de Freud, investigación propia, axiomas propios y matemática. Aceptás extender a psicología solo con Freud y algo de Lacan. |
| Origen del texto de partida | Un texto sobre el Horn Torus y Perelman tomado de internet (búsqueda de Google), sin autores citados. |

## 1.2 Método de trabajo

El trabajo siguió un flujo de coautoría en tres etapas: reunir contexto, construir la estructura sección por sección (preguntas, opciones, curaduría, redacción) y, al final, una prueba de lectura con un lector que no conozca la conversación. Las etapas 1 y 2 están hechas para el capítulo 5 y avanzadas en el resto. La etapa 3 está pendiente (ver Parte XI).



> 📌 **Procedencia:** Borrador v2, Parte II (versión detallada; el maestro la resume en su sección III)

# Parte II. El texto inicial (Horn Torus) y su evaluación

## 2.1 Qué decía el texto

El texto proponía que el Poincaré Horn Torus, el trabajo de Perelman y la topología aplicada al psicoanálisis, fuera de Lacan, formaban una frontera teórica contemporánea. Afirmaba que el Horn Torus es un toro cuyo radio de tubo es igual al radio del centro, con el agujero cerrado en una cúspide, y que Perelman usó el flujo de Ricci con cirugía. Luego proponía cuatro equivalencias con el psicoanálisis no lacaniano.

| **Concepto topológico** | **Equivalencia propuesta por el texto** |
| Cúspide del Horn Torus | Trauma primario: singularidad de alta densidad afectiva de la que la psique no escapa. |
| Flujo de Ricci | Dinámica de la defensa psíquica: cómo el aparato distribuye la angustia; las defensas suavizan tensiones pero a veces generan singularidades. |
| Cirugía topológica | Proceso terapéutico o escisión: cortar la singularidad y pegar tapas para que el flujo continúe. |
| Homeomorfismo de la 3-esfera | Integración del Yo: un Yo integrado, sin los «agujeros» neuróticos del toro. |

## 2.2 Evaluación afirmación por afirmación

| **Afirmación del texto** | **Estado** | **Comentario** |
| El Horn Torus es el toro con r = R; el agujero se cierra en un punto (cúspide). | Correcto | Matemática estándar. Se derivó la ecuación implícita (Parte VII). |
| Perelman demostró la conjetura de Poincaré y la geometrización con flujo de Ricci con cirugía. | Correcto [VW] | Perelman, arXiv math/0211159, math/0303109 y math/0307245. |
| El flujo de Ricci deforma la forma según su curvatura, como el calor. | Correcto como analogía [VW] | La curvatura escalar obedece una ecuación con un término de difusión (ΔR más un término reactivo). |
| La cirugía corta una singularidad y pega tapas esféricas. | Casi | Se cortan cuellos cilíndricos que se estrangulan y se pegan casquetes [VW]. |
| Cúspide = trauma primario; Ricci = defensa; cirugía = disociación o terapia; 3-esfera = Yo integrado. | Sin fuente | Son interpretaciones del texto, sin autor ni cita. Se tratan como hipótesis y no como resultados establecidos. |
| «Quiénes lo estudian hoy»: neuropsicoanálisis cuántico y modelos conectivistas con variedades de Riemann. | No verificado | No hay autores citables. No encontré literatura seria que combine Perelman con metapsicología freudiana. La tesis sería original en ese punto. |

## 2.3 Tres correcciones técnicas necesarias

1. **Dimensión.** El toro es una superficie de dimensión 2. La conjetura de Poincaré trata de 3-variedades cerradas. No se aplica directamente al toro.
2. **Singularidad.** El Horn Torus es singular en la cúspide, no es una variedad suave. El flujo de Ricci necesita una métrica riemanniana suave, así que no se puede evolucionar directamente sobre él. Se trabaja sobre S∖{c} o sobre la familia de toros suaves con r < 1.
3. **Homonimia.** En el artículo de cirugía de Perelman aparece la palabra «horn» (los «maximal horns») con otro sentido: una región del espacio-tiempo del flujo. Parece que el texto confundió ambos usos [VW; verificar el sentido exacto].

## 2.4 Qué se conserva

Se conserva la intuición de usar el Horn Torus como figura de un sistema con un punto singular por donde sale algo y una superficie sobre la que se inscriben marcas. Con tus aportes, el trabajo dejó de ser una lista de equivalencias y pasó a ser un sistema de axiomas con definiciones y proposiciones (Parte VII).



> 📌 **Procedencia:** Borrador v2, Partes III y IV (tablas completas de materiales y fuentes)

# Parte III. Materiales aportados y su verificación

## 3.1 Los archivos

| **Archivo** | **Qué es y cómo se usó** |
| Texto alemán (Aus den Anfängen der Psychoanalyse, ed. Imago) | Cartas a Fliess, manuscritos y Entwurf. OCR ruidoso pero legible, de más de 20.000 líneas. Fuente primaria principal. Se verificó contra él el resumen de orígenes. |
| Resumen en .docx de los orígenes (Sach y Wort) | Resumen de segunda mano de una conversación anterior sobre el texto alemán. Se contrastó con el original (sección 3.3). |
| La afasia (Freud, 1891; edición castellana de 1975) | Fuente de la imagen sonora como núcleo de la representación de palabra. |
| Texto del Horn Torus | Texto inicial de internet. Evaluado en la Parte II. |

## 3.2 Pasajes verificados en el texto alemán [VT]

| **Pasaje** | **Ubicación (Imago)** | **Contenido y uso en la tesis** |
| Carta 52 | p. 186 | Esquema de las transcripciones: W, Wz, Ub, Vb, Bews. W no guarda huella y conciencia y memoria se excluyen. Vb queda ligado a representaciones de palabra y es el «yo oficial». |
| Entwurf, principio de inercia | Parte I | Las neuronas tienden a librarse de la cantidad Q. Bajo la necesidad de la vida el sistema renuncia al nivel Q = 0 y mantiene Q lo más bajo y constante posible. Base de la analogía entre inercia y flujo gradiente. |
| Entwurf, Bahnung y Kontaktschranken | Parte I | La memoria es el grado de facilitación (Bahnung) entre neuronas, dado por la permeabilidad de las barreras de contacto. Base del peso w de Σ y de la noción de «contacto». |
| Entwurf, Seitenbesetzung | pp. 408-409 | El Yo frena el recuerdo hacia la liberación de displacer mediante una investidura lateral, y el gasto lo paga el propio Yo. Antecedente de la contrainvestidura. |
| Entwurf, Nebenmensch y Das Ding | pp. 415-416 | El prójimo es el primer objeto de satisfacción, el primer objeto hostil y la única fuerza auxiliadora. Su complejo perceptivo se divide en una parte constante (Ding) y otra comprensible por el propio cuerpo. |
| Carta del 30.5.1896 | p. 175 | Las escenas de la histeria ocurren en los primeros cuatro años, cuando a los restos mnémicos les falta la traducción a representaciones de palabra. |
| Carta del 14.2.1897 | p. 247 | Nachträglichkeit: años después, el recuerdo de una irritación infantil produce una descarga mucho mayor que la original, porque el aparato y el monto de secreción crecieron. |
| Carta del 2.5.1897 | — | Las fantasías provienen de lo oído y comprendido después (nachträglich). Son construcciones protectoras (Schutzbauten). |
| Nota del editor sobre Sach y Wort | p. 445 | La fórmula «representación consciente = Sachvorstellung + Wortvorstellung» no está en el Entwurf. La nota remite a Lo inconsciente (1915, GW X, p. 300). Hay que citar el texto de 1915. |

## 3.3 Contraste con el resumen en .docx

Se confirmó en el original el esquema de la carta 52, la ligazón del Vb con las representaciones de palabra y la descripción del Nebenmensch y el Ding. La fórmula de Sach y Wort, que el resumen atribuía al Entwurf, es en realidad una nota del editor que remite a 1915. La lectura que lleva de la carta del 30.5.1896 a la conversión somática viene del resumen; en la carta Freud dice solo que falta la traducción a palabras. Esa lectura queda marcada para verificar.

## 3.4 La afasia

En la afasia (1891) Freud descompone la representación de palabra y le da un lugar central a la imagen sonora. Es el respaldo textual del vínculo oído, palabra y preconsciente que usa el axioma 9. No se fijó todavía la página exacta de la edición castellana; queda pendiente para la redacción final.

# Parte IV. Fuentes y estado de verificación

## 4.1 Matemática

| **Fuente** | **Uso** | **Estado** |
| Perelman, The entropy formula for the Ricci flow and its geometric applications, arXiv:math/0211159 (2002) | Entropía monótona; el flujo, módulo difeomorfismos y escala, no tiene órbitas periódicas no triviales. | [VW] |
| Perelman, Ricci flow with surgery on three-manifolds, arXiv:math/0303109 (2003) | Estrangulamiento de cuellos, cirugía y casquetes; «horns». | [VW] |
| Perelman, arXiv:math/0307245 | Extinción en tiempo finito. | [VW] por referencia |
| Colding y Minicozzi, J. Amer. Math. Soc. 18 (2005) | El flujo se extingue en tiempo finito en 3-variedades sin sumandos asféricos. | [VW] |
| Gianniotis, The Ricci flow on manifolds with boundary, J. Differential Geom. 104(2), 2016, pp. 291-324 | Existencia y unicidad con borde prescrito (curvatura media y clase conforme). | [VW] |
| The Ricci flow on surfaces with boundary, arXiv:1209.2386 | Curvatura geodésica prescrita en el borde en dimensión 2. | [VW]; verificar autores |
| Hamilton, Three-manifolds with positive Ricci curvature (1982) y el flujo en superficies (1988) | Origen del flujo de Ricci; convergencia en superficies. | [M] |
| Morgan y Tian; Kleiner y Lott; Cao y Zhu | Exposiciones completas de la demostración. | [M] |
| Poincaré, Analysis Situs (1895) y Quinto complemento (1904) | Grupo fundamental y enunciado de la conjetura. | [M] |
| Poincaré, teoría cualitativa de ecuaciones diferenciales (1880-82) | Ciclos límite. | [M] |
| Astala y Päivärinta (2006) | Problema inverso de Calderón en dimensión 2. | [M]; verificar |

## 4.2 Freud y psicoanálisis

| **Fuente** | **Uso** | **Estado** |
| Aus den Anfängen der Psychoanalyse (Imago): cartas y Entwurf | Inercia, constancia, Bahnung, Ding, Nachträglichkeit, fantasía y oído. | [VT] |
| Freud, La afasia (1891) | Imagen sonora, representación de palabra. | Archivo aportado |
| Freud, Lo inconsciente (1915) y La represión (1915) | Sach y Wort, atemporalidad del Icc, Gegenbesetzung, represión primaria. | [VW] verificado (ver 4.4) |
| Freud, Pegan a un niño (1919) | Las tres fases de la fantasía; la fase 2 como construcción. | [VW] verificado (ver 4.4) |
| Freud, El yo y el ello (1923) | Superyó y oído (casquete acústico). | [VW] verificado (ver 4.4) |
| Freud, Inhibición, síntoma y angustia (1926) | La angustia como señal. | [M] |
| Freud, Recordar, repetir y reelaborar (1914) | Lo no recordado se repite en acto. | [M] |
| Freud, Construcciones en el análisis (1937) | Construcción de lo no recordado. | [M] |
| Pribram y Gill, Freud's Project Reassessed (1976); Kitcher (1992) | El Proyecto como modelo adelantado a su época. | [VW] por referencia |
| Artículo de Metapsychologica sobre la estructura formal de la metapsicología freudiana | Antecedente más cercano de una base axiomática con neuronas formales y cantidad Q. | [VW]; completar referencia |
| Artículo de Redalyc sobre conceptos de la Física en el Proyecto | Inercia como tendencia a descargar a cero. | [VW] |
| Lacan, esquema L (S, a, a', A) | Ejes simbólico e imaginario; mínimo de Lacan. | [M] |

## 4.3 Poincaré y la psicología de la invención

| **Fuente** | **Uso** | **Estado** |
| Poincaré, La invención matemática (en Ciencia y método, 1908) | La iluminación súbita es señal de un largo trabajo inconsciente previo. Puente entre Poincaré y el inconsciente. | [VW] |
| Hadamard, Essay on the Psychology of Invention in the Mathematical Field (1945) | Cuatro fases: preparación, incubación inconsciente, iluminación y verificación. | [VW] |

## 4.4 Verificación de citas (ronda 1)

Resultado de buscar en fuentes las citas que estaban de memoria. Los números de página varían según la edición y habrá que fijarlos con la edición elegida.

| **Cita** | **Resultado** | **Estado** |
| Atemporalidad del Icc (Lo inconsciente, 1915) | Confirmada. Los procesos del sistema Icc no se ordenan temporalmente ni se alteran por el paso del tiempo (p. 184 en una edición, p. 192 en otra). En 1933 habla de la inalterabilidad de lo reprimido, insensible al tiempo. Respalda el axioma 8. | [VW] |
| Superyó y oído (El yo y el ello, 1923) | Confirmado. Los restos de palabra provienen de percepciones acústicas (p. 22), la palabra es el resto mnémico de la palabra oída (p. 23) y el casquete acústico (Hörkappe) aparece en la p. 26. El superyó proviene también de lo oído. Respalda el axioma 9 y la Definición 10. | [VW], por referencias secundarias |
| Pegan a un niño (1919) | Confirmado en lo esencial. La fase 2 es la más importante y grávida en consecuencias, nunca ha tenido existencia real, no se recuerda y es una construcción del análisis. La fase 3 es la fase consciente. Matiz sobre la fase 1: Freud duda de si es fantasía o recuerdo de hechos presenciados, y una fuente secundaria afirma que se recuerda conscientemente. Por eso «solo se recuerda la fase 3» es una simplificación. El modelo no cambia, porque la fase 1 no tiene objeto propio. | [VW] |
| Contrainvestidura (La represión, 1915) | Confirmada. La contrainvestidura es el único mecanismo de la represión primordial y la ejerce el sistema preconsciente. Consecuencia para el modelo [P]: la pared rígida alrededor de la marca primaria n (curvatura k_{g} = 1/δ) es la contrainvestidura de la represión primordial, lo que cierra la identificación entre el flujo en Ω y la contrainvestidura. | [VW] |
| Topología y matemática marcadas [M] | Pendiente: grupo fundamental del Horn Torus, S²×S¹, Poincaré y los ciclos límite, Astala y Päivärinta. | [M] |



> 📌 **Procedencia:** Documento maestro, sección IV (pendientes de verificación)

# IV. Fuentes y verificación

## Matemática

- Perelman arXiv:math/0211159, 0303109, 0307245 [VW]
- Colding–Minicozzi 2005; Gianniotis 2016 (flujo con borde) [VW]
- Hamilton; Morgan–Tian; Kleiner–Lott; Cao–Zhu [M]
- Poincaré Analysis Situs, ciclos límite, invención matemática [VW/M]

## Freud [VT en Imago]

- Entwurf: inercia, constancia, Bahnung, Ding, Seitenbesetzung
- Carta 52; cartas 14.2.1897 y 2.5.1897 (Nachträglichkeit, fantasías)
- Pendiente [M]: atemporalidad 1915, Gegenbesetzung, superyó–oído 1923, texto exacto 1919



> 📌 **Procedencia:** Documento maestro, sección V (estado por capítulo, más actual que la Parte V del borrador v2)

# V. Estructura de la tesis y estado por capítulo

- Cap. 1 Introducción — COMPLETO (~28–35 pp. según formato)
- Cap. 2 Freud — BORRADOR (esquema sólido; falta expansión a ~50 pp.)
- Cap. 3 Poincaré — BORRADOR (esquema sólido; falta expansión a ~35 pp.)
- Cap. 4 Ricci–Perelman — BORRADOR (esquema sólido; falta expansión a ~60 pp.)
- Cap. 5 Analogía axiomática — SÓLIDO (10 axiomas, definiciones, proposiciones)
- Cap. 6 Fantasía — CORREGIDO (fases 1–2 = construcciones)
- Cap. 7 Límites y objeciones — REDACTADO e integrado
- Cap. 8 Conclusiones — REDACTADO e integrado

Prioridad siguiente: expandir Capítulos 2, 3 y 4 a la extensión prevista, manteniendo las fuentes ya verificadas y el hilo conductor ya fijado.



> 📌 **Procedencia:** Documento maestro, sección II (texto íntegro; tabla 1.13 reparada)

# II. Capítulo 1 — Introducción y axiomas de método

(Texto completo del Capítulo 1 integrado a continuación.)

1.1 Planteo del problema

Esta tesis se ocupa de una pregunta que atraviesa, de modo intermitente, la historia del psicoanálisis y de la matemática: ¿es posible formalizar aspectos de la metapsicología freudiana con herramientas tomadas de la geometría diferencial y de la topología, sin pretender que la psique «sea» una variedad ni que el inconsciente «sea» un flujo de Ricci?

La pregunta no es nueva en su espíritu. El propio Freud, en el Proyecto de psicología de 1895, intentó una economía de fuerzas nerviosas con neuronas, cantidades Q y barreras de contacto. Poincaré, en «La invención matemática», describió un trabajo inconsciente que prepara la iluminación consciente. Perelman, un siglo después, construyó un flujo que deforma métricas según su curvatura y demostró, con cirugía, la conjetura de Poincaré. El cruce de estos tres nombres no existe todavía como literatura establecida. Esa ausencia es, a la vez, el riesgo y la justificación del trabajo.

El punto de partida empírico de esta investigación fue un texto circulante en internet que asociaba el Horn Torus, el flujo de Ricci con cirugía de Perelman y ciertas figuras de la clínica (trauma, defensa, disociación, Yo integrado). Ese texto mezclaba hechos matemáticos correctos con equivalencias clínicas sin fuente. En lugar de desecharlo, se lo tomó como hipótesis informal a someter a rigor: ¿qué se puede conservar, qué debe corregirse y qué se puede convertir en un sistema de axiomas con definiciones y proposiciones?

El resultado es un modelo analógico. No una ontología de la mente, no un modelo del cerebro y no una aplicación mecánica de la geometría a la clínica. Un diccionario controlado entre conceptos freudianos (Ding, Vorstellungsrepräsentanz, Bahnung, Nachträglichkeit, contrainvestidura, fantasía, trauma, síntoma, cura) y objetos geométricos (superficie tipo Horn Torus, grafo de marcas, ciclo límite, flujo de Ricci con borde fijo, cirugía de cuellos, grupo fundamental de S²×S¹).

1.2 Hipótesis central

La hipótesis de trabajo puede enunciarse así:

El aparato psíquico, en la formalización mínima del Proyecto y de los textos de los años 1895--1919, admite una analogía estructurada con una variedad riemanniana (en dimensión 2, una superficie de la familia del Horn Torus; en dimensión 3, S²×S¹) sobre la cual se definen: (i) un conjunto discreto de marcas con carga (Vorstellungsrepräsentanzen); (ii) un grafo de facilitaciones (Bahnung); (iii) un flujo de cantidad por circuitos cuyo peso supera un umbral (pulsión); (iv) un núcleo inaccesible de la fantasía, modelado como sumidero con ciclo límite o, en 3D, como generador del grupo fundamental; (v) un flujo de Ricci restringido a la región consciente y preconsciente, con las marcas del inconsciente como condición de borde fija (contrainvestidura); (vi) una cirugía que extrae solo marcas traumáticas recuperables y no toca el núcleo de la fantasía.

De esta hipótesis se derivan varias consecuencias que la tesis desarrolla:

- La atemporalidad del inconsciente se traduce en la invariancia de la

estructura (marcas, grafo, núcleo) respecto del tiempo del flujo.

- El gasto de la defensa (Aufwand) se lee como redistribución obligada

de curvatura cuando una marca se activa (Gauss--Bonnet).

- La compulsión de repetición y la ausencia de órbitas periódicas en

el flujo de Perelman no se contradicen: operan en niveles distintos (ciclos sobre la superficie versus dinámica en el espacio de métricas).

- La cura analítica, en tanto extracción de lo reprimido recuperable,

corresponde a la cirugía; la fantasía primaria, en tanto construcción nunca consciente, es indestructible por topología.

- En dimensión 3, la integración total (homeomorfismo con S³) exigiría

destruir el grupo fundamental y, con él, la fantasía: es un ideal inalcanzable dentro del modelo.

1.3 Alcance y límites declarados

1.3.1 Qué se afirma

Se afirma que es posible construir un diccionario axiomático coherente entre un fragmento acotado de la metapsicología freudiana y un fragmento acotado de la geometría del flujo de Ricci y de la topología de variedades de dimensión 2 y 3. Se afirma que ese diccionario ilumina tensiones internas del propio psicoanálisis (atemporalidad versus proceso, repetición versus elaboración, trauma recuperable versus fantasía indestructible) y que permite enunciar proposiciones comprobables dentro del formalismo (por ejemplo: la cirugía no altera la clase del ciclo de la fantasía).

1.3.2 Qué no se afirma

No se afirma que el aparato psíquico sea una variedad riemanniana. No se afirma que los procesos neuronales obedezcan la ecuación del flujo de Ricci. No se afirma que el análisis «sea» una cirugía de Perelman. No se afirma que el modelo explique la clínica en general ni que sustituya la escucha. No se trabaja con neurociencia, ni con teorías del campo, ni con topología lacaniana de nudos. El uso de Lacan se limita al esquema L en su forma mínima (ejes simbólico e imaginario) y a la identificación de lo Real con el Ding freudiano.

1.3.3 Lectores previstos

El texto está escrito para psicoanalistas con interés en la formalización y en la historia de los conceptos. Las ecuaciones se introducen con la explicación necesaria para seguir el argumento; no se supone familiaridad previa con geometría riemanniana ni con EDPs. Donde el detalle técnico es imprescindible (existencia del flujo con borde, Gauss--Bonnet, π₁ de S²×S¹), se cita la fuente y se separa el resultado matemático de la interpretación analógica.

1.4 Por qué Freud, Poincaré y Perelman

1.4.1 Freud: el Proyecto como economía formalizable

El Proyecto de 1895 es el intento más cercano de Freud a un modelo con magnitudes, principios de extremum y una distinción entre percepción y memoria. El principio de inercia (tendencia a descargar Q hasta cero) y el principio de constancia (mantener Q bajo y estable bajo la presión de la vida) ofrecen un análogo natural de un flujo gradiente. La Bahnung (facilitación) permite pensar la memoria como estructura de pesos, no como copia. El Nebenmensch y el Ding introducen una parte constante del objeto que no se reduce a la representación. Las cartas a Fliess sobre Nachträglichkeit y sobre las fantasías como construcciones protectoras anticipan la lógica de saltos de carga y de construcciones que no son recuerdos. Todo ello está documentado en el texto alemán de Aus den Anfängen der Psychoanalyse (ed. Imago) y se verifica pasaje por pasaje en el Capítulo 2.

1.4.2 Poincaré: topología, ciclos y trabajo inconsciente

Poincaré aporta tres piezas distintas. Primera: el Analysis Situs y el grupo fundamental, lenguaje de lazos contraíbles y no contraíbles, indispensable para hablar de repetición que no se puede deshacer. Segunda: los ciclos límite de la teoría cualitativa de ecuaciones diferenciales, objeto matemático del circuito de la fantasía. Tercera: la descripción, en «La invención matemática», de un trabajo inconsciente que prepara la iluminación consciente, sistematizado después por Hadamard en cuatro fases. Este tercer aporte es el puente histórico más limpio entre la matemática y el inconsciente: no es una proyección del psicoanálisis sobre Poincaré, sino una afirmación del propio Poincaré.

1.4.3 Perelman: flujo, entropía y cirugía

Perelman demostró la conjetura de Poincaré y, más en general, la conjetura de geometrización, mediante el flujo de Ricci con cirugía. Tres resultados importan aquí. Uno: el flujo es de tipo gradiente respecto de un funcional monótono (entropía); no tiene órbitas periódicas no triviales módulo difeomorfismos y escala. Dos: las singularidades naturales son estrangulamientos de cuellos; la cirugía corta y tapa con casquetes. Tres: en ciertas 3-variedades el flujo se extingue en tiempo finito. El primero tensiona con la compulsión de repetición (y obliga a distinguir niveles de dinámica). El segundo ofrece el análogo de la extracción del trauma. El tercero, en el modelo 3D, sugiere que sin un inconsciente fijo como borde la defensa colapsaría el espacio psíquico.

1.5 Método de trabajo

1.5.1 Analogía controlada, no metáfora libre

Cada concepto freudiano que entra en el modelo debe tener: (a) una fuente primaria citada; (b) un objeto geométrico definido; (c) una regla de traducción explícita. Cuando la traducción es propuesta del autor y no se deduce de Freud ni de la matemática, se marca como [P]. Cuando la fuente freudiana se verificó en el texto alemán, se marca [VT]. Cuando se citó de memoria y falta contrastar la edición definitiva, se marca [M]. Este sistema de etiquetas recorre todo el trabajo y permite al lector distinguir lo establecido de lo conjetural.

1.5.2 Axiomas, definiciones y proposiciones

El núcleo de la tesis (Capítulo 5) se organiza como un sistema de diez axiomas. Cada axioma va acompañado de una o más definiciones formales y, cuando corresponde, de una proposición con esbozo de demostración o de argumento de consistencia. El sistema se sometió a una revisión de consistencia interna (problemas A--F) que obligó a decisiones explícitas: la fantasía como marca primaria; el borde rígido de angustia; el par de Dirichlet a Neumann en la cúspide; el cierre de la variante A (núcleo distinto de la cúspide).

1.5.3 Dimensión 2 primero, dimensión 3 como extensión

Se eligió trabajar primero en dimensión 2 (familia de toros que degenera hacia el Horn Torus) porque las ecuaciones del flujo se simplifican (Ric = K·g) y Gauss--Bonnet ofrece una ley de conservación transparente para el gasto de la defensa. El modelo 3D (S²×S¹) se desarrolla como extensión: permite que el estrangulamiento de cuellos sea espontáneo (disociación) y que la indestructibilidad de la fantasía sea un hecho de π₁, no solo de un índice de giro local. La tesis no pretende que uno de los dos modelos «sea el verdadero»; presenta el 2D como núcleo analógico y el 3D como enriquecimiento topológico.

1.5.4 Flujo de coautoría y verificación

El trabajo se construyó en etapas: reunión de contexto y fuentes; formulación de axiomas con preguntas y opciones; curaduría de decisiones; redacción; revisión de consistencia; corrección de la lectura de «Pegan a un niño» (fases 1 y 2 como construcciones, no como recuerdos recuperables). El texto alemán de las cartas a Fliess y del Entwurf se contrastó contra el resumen inicial. Las afirmaciones del texto del Horn Torus se evaluaron una por una. Lo que no tiene fuente se declara hipótesis.

1.6 Axiomas de método

Antes de los axiomas del modelo (Capítulo 5) se enuncian los axiomas que rigen el propio trabajo. No son teoremas; son reglas de juego.

Axioma de método M1 --- Analogía, no identidad

El modelo es una analogía estructurada. Ninguna afirmación de la forma «la psique es una variedad» o «el análisis es una cirugía de Perelman» pertenece al cuerpo de la tesis.

Axioma de método M2 --- Primacía de las fuentes primarias

Los conceptos freudianos se toman de textos de Freud (y, en mínimo, del esquema L de Lacan). No se construye el modelo sobre resumidores secundarios sin contrastar el original. Cuando el original no está disponible en la sesión de trabajo, la cita se marca [M] y queda pendiente de verificación.

Axioma de método M3 --- Separación de niveles de dinámica

La dinámica de la pulsión sobre la superficie (o sobre la 3-variedad) y la dinámica del flujo de Ricci en el espacio de métricas son niveles distintos. Una tensión aparente entre repetición y ausencia de órbitas periódicas se resuelve declarando esa distinción, no forzando una identificación.

Axioma de método M4 --- El Icc no fluye

El tiempo del flujo de Ricci pertenece a la región Pcc/Cc (contrainvestidura). La estructura del Icc (marcas, grafo, núcleo) es invariante respecto de ese tiempo, salvo por eventos de Nachträglichkeit y por actos de cirugía. Así se respeta la atemporalidad freudiana sin bloquear el uso del flujo.

Axioma de método M5 --- La fantasía primaria no es operable

La marca primaria n y su circuito (Cδ en 2D; clase en π₁ en 3D) no son objetos de cirugía. La cirugía solo extrae marcas traumáticas que fueron reprimidas y son, en principio, recuperables. Esta regla traduce la distinción freudiana entre lo reprimido elaborable y lo que se construye en el análisis sin haber sido nunca consciente.

Axioma de método M6 --- Contingencia del análisis

Que el análisis identifique el circuito dominante o reconstruya el interior a partir de la voz es contingente: depende de que los datos de borde permitan una reconstrucción suficientemente unívoca. El modelo formaliza esa contingencia como posible no-unicidad del problema inverso.

Axioma de método M7 --- Etiquetado de incertidumbre

Toda afirmación se etiqueta según su estatuto: [VT] verificado en texto alemán; [VW] verificado en fuente matemática o secundaria localizable; [M] citado de memoria, pendiente de verificación; [P] propuesta del trabajo, no deducida de fuente; [A] decisión explícita del autor del modelo. El lector debe poder rastrear el grado de certeza de cada paso.

1.7 Estructura de la tesis

La tesis se organiza en ocho capítulos. El Capítulo 1 (este) fija el problema, la hipótesis, el alcance, el método y los axiomas de método. El Capítulo 2 reconstruye el aparato freudiano a partir del Proyecto, las cartas a Fliess, la Afasia y los textos de 1915--1919 necesarios para la atemporalidad, la contrainvestidura y la fantasía. El Capítulo 3 presenta a Poincaré como puente: grupo fundamental, conjetura, ciclos límite e invención matemática. El Capítulo 4 expone el flujo de Ricci, la entropía de Perelman, la cirugía, la extinción en tiempo finito y el flujo con borde. El Capítulo 5 es el núcleo: los diez axiomas del modelo, las definiciones formales, las proposiciones y el diccionario Freud--geometría, incluida la sección sobre contrainvestidura con borde fijo y el gasto de la defensa. El Capítulo 6 aplica el modelo a las tres fases de «Pegan a un niño», con la corrección de que las fases 1 y 2 son construcciones. El Capítulo 7 recoge límites, objeciones y problemas abiertos. El Capítulo 8 concluye.

La extensión prevista es del orden de trescientas páginas. El presente Capítulo 1 ocupa la función de contrato de lectura: declara qué se promete, qué se excluye y con qué reglas se avanza.

1.8 Sobre el texto de partida y el Horn Torus

El Horn Torus es la superficie de revolución con radio mayor igual al radio menor: el agujero se cierra en una cúspide. Es un objeto geométrico estándar. No es, sin embargo, una variedad suave en la cúspide, y por tanto no admite el flujo de Ricci de modo directo. En el modelo se trabaja con la familia de toros suaves de radio menor r < 1, o con el complemento de la cúspide, y se usa la cúspide como puerto (lugar de la voz y del oído).

La conjetura de Poincaré no se aplica al toro (superficie de dimensión 2). Se aplica a 3-variedades cerradas. Por eso el modelo 3D introduce S²×S¹, cuyo 2-esqueleto es homotópicamente cercano al Horn Torus y cuyo grupo fundamental es cíclico infinito: el lazo esencial de la fantasía.

La palabra «horn» aparece en los artículos de Perelman en un sentido distinto (regiones del espacio-tiempo del flujo). La confusión del texto de partida se corrige desde el inicio: el Horn Torus geométrico y los «maximal horns» de Perelman no son el mismo objeto.

1.9 Contribución pretendida

La contribución de la tesis, si se sostiene, es triple.

Primera: ofrecer un sistema axiomático explícito que traduzca un fragmento de la metapsicología freudiana a un lenguaje de variedades, flujos y cirugía, con reglas de consistencia y con límites declarados.

Segunda: mostrar que la tensión entre la compulsión de repetición y la monotonicidad del flujo de Perelman no es un obstáculo, sino un indicador de que hay que separar la dinámica de la pulsión de la dinámica de la defensa.

Tercera: reformular la distinción entre trauma recuperable y fantasía indestructible como distinción entre objetos operables por cirugía y objetos protegidos por topología (índice de giro o clase en π₁), y vincular esa reformulación con el estatuto freudiano de las fases de «Pegan a un niño» como construcciones.

No se pretende cerrar el debate sobre la formalización en psicoanálisis. Se pretende mostrar un camino practicable, con fuentes controladas y con un formalismo que se puede criticar punto por punto.

1.10 Nota sobre originalidad y literatura

No se ha encontrado literatura académica que combine de modo sistemático el flujo de Ricci de Perelman con la metapsicología freudiana. Existen trabajos sobre topología y psicoanálisis (en particular lecturas lacanianas de nudos y toros), trabajos sobre el Proyecto de Freud desde la neurociencia o la filosofía de la ciencia (Pribram y Gill, Kitcher), y la reflexión del propio Poincaré sobre el inconsciente en la invención. El cruce específico que aquí se propone ---Ricci, cirugía, entropía, borde fijo, Gauss--Bonnet como gasto de la defensa, S²×S¹ como espacio del aparato--- es, en el estado actual de la búsqueda, original. Esa originalidad impone una carga de rigor: cada paso debe poder defenderse sin apelar a una tradición ya establecida del «Ricci freudiano».

1.11 Cómo leer esta tesis

El lector psicoanalista puede entrar por el Capítulo 2 (Freud) y el Capítulo 6 (fantasía), y usar el Capítulo 5 como diccionario. El lector con formación matemática puede entrar por los Capítulos 3 y 4 y tratar el Capítulo 5 como un sistema formal a evaluar. El Capítulo 7 está escrito para ambos: lista las objeciones previsibles y el estado de cada una.

Las ecuaciones no son decorativas. Cuando aparece ∂g/∂t = −2 Ric(g), se usa después para restringir el dominio del flujo a Ω y para argumentar la conservación de curvatura. Cuando aparece el índice de giro o π₁ ≅ ℤ, se usa para probar que la cirugía admisible no destruye la fantasía. El formalismo está al servicio de distinciones clínicas (recuperable / no recuperable; elaborable / indestructible; gasto global de la defensa / acto local de extracción).

1.12 Cierre del capítulo

Quedan fijados el problema, la hipótesis, el alcance, los límites, el método y los siete axiomas de método. El resto de la tesis ejecuta ese contrato: reconstruir las fuentes, definir el modelo, aplicarlo a la fantasía, extenderlo a dimensión 3 y enumerar lo que aún no se sostiene.

La pregunta inicial ---si es posible una matematización analógica del inconsciente freudiano con las herramientas de Poincaré y Perelman--- no se responde con un sí o un no global. Se responde con un sistema de axiomas, un diccionario, un conjunto de proposiciones y una lista explícita de problemas abiertos. Ese es el criterio de completitud que esta introducción adopta.

1.13 Resumen de los axiomas de método
| Axioma | Enunciado breve |
| --- | --- |
| M1 | Analogía estructurada, no identidad ontológica |
| M2 | Primacía de fuentes primarias; etiquetado de lo no verificado |
| M3 | Separación de niveles: pulsión sobre S vs. flujo en el espacio de métricas |
| M4 | El Icc no fluye; el tiempo t pertenece a la contrainvestidura |
| M5 | La fantasía primaria no es operable por cirugía |
| M6 | Contingencia del análisis como posible no-unicidad del problema inverso |
| M7 | Etiquetado [VT]/[VW]/[M]/[P]/[A] de cada afirmación |

*— Fin del Capítulo 1 —*


## **1.14 Contexto histórico de los intentos de formalización**

La idea de formalizar el psicoanálisis no nace con este trabajo. Ya en vida de Freud hubo lecturas que subrayaban el carácter «económico» del Proyecto y su cercanía a modelos de la física de la época. Décadas después, Pribram y Gill (1976) reevaluaron el Proyecto como anticipación de ideas de procesamiento de información. Kitcher (1992) lo situó en la filosofía de la ciencia del siglo XIX. En el ámbito francófono y rioplatense, la topología lacaniana (Vappereau, Soury y otros) exploró toros, bandas de Möbius y nudos borromeos como soporte de la estructura del sujeto. Matte Blanco propuso una lógica del inconsciente basada en relaciones simétricas y conjuntos infinitos. Ninguno de estos caminos atraviesa el flujo de Ricci ni la cirugía de Perelman.

La diferencia de este trabajo no es de prestigio ni de novedad por la novedad. Es de herramienta. El flujo de Ricci ofrece tres cosas que otras formalizaciones no concentran a la vez: (1) una evolución determinada por la curvatura (análogo de la distribución de tensión); (2) un funcional monótono (análogo de un principio de economía); (3) una cirugía que cambia la topología de modo controlado (análogo de un acto que extrae sin pretender borrar todo). La topología lacaniana de nudos es rica en estructura y pobre en dinámica. Los modelos económicos del Proyecto son ricos en dinámica local y pobres en topología global. El cruce con Perelman intenta cubrir ambos registros.

Eso no implica superioridad. Implica un experimento controlado: tomar una herramienta matemática contemporánea, con teoremas cerrados, y ver hasta dónde llega la analogía antes de romperse. El Capítulo 7 está dedicado precisamente a los puntos de rotura.

## **1.15 El Proyecto de 1895 como punto de anclaje**

Conviene detenerse en por qué el Proyecto, y no solo la metapsicología de 1915 o el más allá del principio de placer, es el ancla.

Primero, porque el Proyecto nombra magnitudes. Hay una cantidad Q, hay neuronas ϕ, ψ y ω, hay barreras de contacto con grados de permeabilidad, hay una distinción entre cantidad que pasa y cantidad que queda. Aunque el vocabulario sea el de la fisiología de fin de siglo, la forma del argumento es ya la de un sistema con variables de estado y reglas de evolución.

Segundo, porque el principio de inercia y el principio de constancia están formulados como tendencias extremales. El sistema «quiere» descargar; la vida lo obliga a acumular; la solución de compromiso es mantener bajo y estable. Eso es estructuralmente cercano a un flujo gradiente que desciende un funcional bajo una restricción.

Tercero, porque la memoria no es imagen sino facilitación. La Bahnung es un peso entre elementos. El grafo Σ del modelo no es una metáfora libre: es la traducción más directa posible de ese concepto a un objeto matemático estándar.

Cuarto, porque el Ding aparece como resto no representable del complejo del prójimo. En un modelo que identifica la superficie con lo Real, ese resto tiene un lugar geométrico: la superficie misma, o la cúspide, o el núcleo, según el axioma. El trabajo posterior decide cuál, pero el Proyecto autoriza la pregunta.

La tesis no «revive» el Proyecto como neurociencia. Lo usa como cantera de formas. Donde el Proyecto es oscuro o abandonado por Freud, se lo declara y se pasa a los textos de 1915--1919. Donde es claro, se lo cita con página de la edición Imago.

## **1.16 Poincaré y el inconsciente del matemático**

La sección sobre Poincaré en el Capítulo 3 no es un adorno cultural. Es un argumento de legitimidad. Si el propio autor de la conjetura y del Analysis Situs afirma que la invención matemática depende de un trabajo inconsciente de combinación y selección, entonces el puente entre topología e inconsciente no es una extravío del psicoanálisis: es una tesis del matemático.

Poincaré describe la iluminación súbita tras un período de incubación en el que no se piensa conscientemente en el problema. Hadamard codifica cuatro fases. La tesis no necesita que esa psicología de la invención sea «verdadera» en sentido empírico contemporáneo. Necesita que sea un testimonio interno de la tradición matemática que aquí se usa. Cuando se invoca el grupo fundamental para hablar de repetición, no se está violentando a Poincaré: se está usando su herramienta en un dominio que él mismo vinculó, en otro registro, con el inconsciente.

Los ciclos límite refuerzan el punto. Poincaré los introduce en dinámica cualitativa. El modelo los recupera como atractores de la pulsión alrededor del núcleo de la fantasía. De nuevo: no es una metáfora pintoresca; es el mismo tipo de objeto (una órbita periódica estable en un campo) aplicado a otra interpretación de las variables.

## **1.17 Qué se le pide al lector psicoanalista**

Se le pide que tolere ecuaciones durante el tiempo necesario para ver qué distinción clínica sostienen. No se le pide que se convierta en geómetra. Se le pide, en cambio, que juzgue si la distinción entre marca operable y marca no operable, o entre gasto global de la defensa y acto local de extracción, ilumina algo de su práctica o de su lectura de Freud.

Se le pide también que acepte el sistema de etiquetas [VT], [M], [P]. No es pedantería: es la única manera de no hacer pasar por «Freud dijo» lo que es reconstrucción, ni por «teorema» lo que es analogía.

Finalmente, se le pide que reserve el juicio sobre el modelo 3D hasta haber recorrido el 2D. El 3D resuelve problemas (cirugía espontánea, indestructibilidad global) y abre otros (puerto de la voz, existencia a tiempos largos con borde). No es el techo del edificio; es un piso adicional.

## **1.18 Qué se le pide al lector con formación matemática**

Se le pide que acepte que el criterio de éxito no es la demostración de un teorema nuevo sobre el flujo de Ricci, sino la coherencia del diccionario y la no contradicción con los resultados citados (Perelman, Gianniotis, Colding--Minicozzi, Gauss--Bonnet).

Se le pide que distinga entre: (a) hechos matemáticos usados como cajas negras (existencia del flujo con borde; monotonicidad de la entropía); (b) construcciones del modelo (el grafo Σ, el ciclo Cδ, la pared kg = 1/δ); (c) interpretaciones analógicas (kg como angustia, cirugía como extracción). Solo (a) se evalúa con el estándar de la matemática; (b) y (c) se evalúan con el estándar de la consistencia interna y de la fidelidad a las fuentes freudianas.

Se le pide, por último, que no exija un teorema del tipo «el aparato psíquico converge a una métrica de Einstein». Ese teorema no existe en esta tesis porque el objeto no es el cerebro ni un sistema físico cerrado. El objeto es un modelo analógico con proposiciones internas.

## **1.19 Mapa detallado de los capítulos siguientes**

Capítulo 2. Reconstrucción del aparato a partir del Entwurf, las cartas a Fliess, la Afasia y los textos de 1915 necesarios. Cada pasaje clave lleva ubicación en Imago o, cuando falta, marca [M]. Se corrige la atribución errónea de la fórmula Sach+Wort al Entwurf. Se prepara el terreno para Bahnung → pesos, Ding → superficie, Seitenbesetzung → contrainvestidura, Nachträglichkeit → saltos de carga.

Capítulo 3. Poincaré en tres registros: Analysis Situs y π₁; ciclos límite; invención matemática e inconsciente. Hadamard como mediador. Cierre: por qué estos tres registros convergen en el modelo.

Capítulo 4. Ecuación del flujo; reducción a dimensión 2; entropía de Perelman; cirugía; extinción; flujo con borde (Gianniotis); geometría del Horn Torus y de la familia Tr. Cada resultado se enuncia con su referencia y se separa de la interpretación.

Capítulo 5. Los diez axiomas, las doce definiciones, las tres proposiciones, el diccionario, la revisión de consistencia y la sección formal sobre contrainvestidura con borde fijo y el gasto de la defensa (Gauss--Bonnet como Aufwand).

Capítulo 6. «Pegan a un niño»: las tres fases según Freud; corrección de que 1 y 2 son construcciones; correspondencias en el modelo; esquema L mínimo; construcción como problema inverso; cirugía y fantasía.

Capítulo 7. Lista de tensiones (singularidad del Horn Torus, dimensión, atemporalidad, repetición versus monotonicidad, compatibilidad del borde, reglas de reorganización tras cirugía, citas pendientes, identificabilidad, problemas del 3D). Estado de cada una: resuelta, parcial, abierta, postulada.

Capítulo 8. Conclusiones: qué se sostuvo, qué quedó abierto, qué se excluyó de propósito, y una nota sobre la originalidad y sus riesgos.

## **1.20 Sobre la extensión y el ritmo de lectura**

La extensión total prevista (~300 páginas) no está al servicio del volumen por el volumen. Está al servicio de tres exigencias: (1) citar con suficiente contexto los pasajes freudianos para que el lector no dependa de la autoridad del autor de la tesis; (2) introducir las nociones matemáticas con el mínimo de formalismo que permita seguir las proposiciones; (3) dejar rastros de las decisiones (por qué variante A y no B; por qué 2D primero; por qué la fase 1 no es una marca de VT).

El Capítulo 1 es deliberadamente denso en declaraciones de método y relativamente pobre en ecuaciones. Las ecuaciones llegan cuando hacen falta para sostener una distinción, no antes.

## **1.21 Riesgos declarados**

El riesgo principal es el de la analogía desbocada: encontrar en la geometría lo que ya se había puesto en la interpretación. El sistema de etiquetas y la revisión de consistencia mitigan ese riesgo; no lo eliminan. El segundo riesgo es el de la ilegibilidad: que el psicoanalista no siga las ecuaciones o que el matemático no siga a Freud. La estructura en capítulos de fuente (2, 3, 4) y capítulos de modelo (5, 6, 11 del documento maestro) intenta ofrecer entradas múltiples. El tercer riesgo es el de la originalidad aislada: al no haber tradición de «Ricci freudiano», cada paso debe justificarse sin red de citas afines. Eso se asume.

## **1.22 Criterio de éxito de la tesis**

La tesis tendrá éxito, según el contrato de este capítulo, si:

1. El diccionario axioma por axioma es internoemente consistente. 2. Cada concepto freudiano mayor del modelo tiene fuente primaria o está marcado como [P]. 3. Las proposiciones sobre indestructibilidad y sobre el alcance de la cirugía se argumentan dentro del formalismo. 4. Las tensiones listadas en el Capítulo 7 no se ocultan. 5. Un lector psicoanalista puede reconstruir la distinción trauma recuperable / fantasía indestructible sin aceptar la ontología de la variedad. 6. Un lector matemático puede localizar qué resultados de Perelman, Gianniotis o Gauss--Bonnet se usan y cuáles no se invocan.

No forma parte del criterio de éxito que el modelo «cure» mejor, ni que prediga datos clínicos, ni que se implemente numéricamente. Esos serían proyectos distintos.

## **1.23 Transición al Capítulo 2**

El Capítulo 2 comienza por el Proyecto y las cartas a Fliess porque allí están las formas que el modelo traduce. Sin Bahnung no hay pesos del grafo. Sin Ding no hay superficie como Real. Sin Seitenbesetzung no hay contrainvestidura. Sin Nachträglichkeit no hay saltos de carga. Sin el estatuto de las fantasías como construcciones (carta del 2.5.1897 y, más tarde, «Pegan a un niño») no hay base para separar la marca primaria de las marcas recuperables.

Se invita al lector a entrar en el texto alemán con la misma cautela con la que se le pide que entre en las ecuaciones: no para adorarlo, sino para verificar.

## **1.24 Precisiones sobre la noción de analogía**

En filosofía de la ciencia se distingue a veces entre analogía material (mismo tipo de objetos) y analogía formal (misma estructura de relaciones). Esta tesis trabaja en el segundo sentido. No se dice que una marca psíquica sea un punto de curvatura concentrada del mismo modo en que se dice que dos electrones son del mismo tipo. Se dice que la red de relaciones entre marcas, cargas, circuitos, borde y flujo reproduce, en un dominio geométrico, un patrón de relaciones que el texto freudiano describe en su dominio.

Esa distinción importa para no caer en dos errores simétricos. El primero es el reduccionismo: creer que, una vez escrito el flujo de Ricci, el psicoanálisis queda «explicado». El segundo es el esteticismo: creer que basta una metáfora elegante para legitimar el cruce. La analogía formal exige isomorfismo parcial de estructura y, a la vez, conciencia de los puntos donde el isomorfismo falla. El Capítulo 7 es el inventario de esas fallas.

## **1.25 Relación con otras formalizaciones (Matte Blanco, topología lacaniana)**

Matte Blanco propuso que el inconsciente trata las relaciones asimétricas como simétricas y opera con clases infinitas. Su formalismo es lógico-conjuntista, no diferencial-geométrico. No compite directamente con este modelo; opera en otro registro. Donde Matte Blanco enfatiza la simetría y el infinito, aquí se enfatiza la curvatura, el borde y la cirugía. Un diálogo futuro sería posible; no se emprende en esta tesis.

La topología lacaniana de nudos y toros ha producido una literatura extensa. Esta tesis se aparta de ella de modo deliberado: no usa nudos borromeos, no identifica el sujeto con un agujero de nudo, no trabaja la cadena significante como enlace. Conserva del legado lacaniano solo el esquema L mínimo y la afinidad entre lo Real y el Ding. La razón es de economía: introducir nudos exigiría otro aparato matemático y otra polémica, y diluiría el foco en Ricci y Perelman.

## **1.26 Sobre la dimensión ética del modelo**

Aunque el modelo es formal, tiene una implicación ética mínima que conviene declarar. Si la fantasía primaria es indestructible por topología, entonces un análisis que prometiera «borrar el núcleo» estaría prometiendo algo que el modelo declara imposible. La cura, en este marco, es extracción de lo recuperable y reorganización de la defensa, no aniquilación de la estructura que sostiene la repetición. Esa tesis es freudiana antes que geométrica: Freud ya distinguía lo reprimido elaborable de lo que solo se construye. La geometría solo le da una forma.

## **1.27 Nota sobre el público y el tono**

El tono de la tesis es deliberadamente mixto: a ratos técnico, a ratos hermenéutico. No se busca el estilo de un paper de Annals of Mathematics ni el de un ensayo de clínica pura. Se busca el de un trabajo interdisciplinario que no traicione a ninguno de los dos polos. Cuando una demostración es solo un esbozo, se dice. Cuando una cita es de memoria, se marca. Cuando una decisión es del autor del modelo, se etiqueta [A] o [P].

## **1.28 Organización material del manuscrito**

Además de los ocho capítulos, el manuscrito incluye apéndices de glosario alemán--español, notación matemática y cronología del trabajo. El documento maestro de compilación reúne el estado de todas las piezas. Los capítulos individuales (2, 3, 4, 6, sección de contrainvestidura, modelo 3D) existen como archivos separados para facilitar la revisión parcial. La versión de entrega unificará la numeración de páginas, la bibliografía y el índice general.

## **1.29 Cierre ampliado**

Este Capítulo 1 ha fijado, con el detalle que permite una introducción, el problema, la hipótesis, el alcance, los límites, el método, los axiomas de método, el mapa de la tesis, la relación con otras formalizaciones, los riesgos y el criterio de éxito. Lo que sigue es la ejecución. El lector que haya aceptado el contrato puede pasar al Capítulo 2. El que no lo acepte encontrará en el Capítulo 7 las objeciones que probablemente ya formuló, y el estado de cada una.

La matematización del inconsciente que aquí se propone no es un destino necesario del psicoanálisis ni una aplicación obligatoria de la geometría. Es un experimento de traducción. Como todo experimento, se juzga por lo que logra hacer visible y por lo que declara no lograr.

## **1.30 Desarrollo de cada axioma de método**

### **M1 en detalle**

La analogía estructurada implica que para cada flecha del diccionario (concepto freudiano → objeto geométrico) debe ser posible enunciar la regla de traducción y el dominio en el que vale. Fuera de ese dominio, la flecha se suspende. Por ejemplo, la identificación de la contrainvestidura con el flujo de Ricci vale en Ω y bajo las condiciones de borde declaradas; no vale como afirmación sobre el cerebro ni como modelo de la transferencia en general.

### **M2 en detalle**

La primacía de las fuentes primarias obliga a una disciplina de archivo. El texto alemán de Imago se usó para verificar el Entwurf y las cartas. Cuando una fórmula circula en la tradición (Sach + Wort) y resulta ser de 1915 y no de 1895, se corrige. Cuando un pasaje se recuerda pero no se tiene a la vista, se marca [M]. Esta disciplina no garantiza la verdad; garantiza la trazabilidad.

### **M3 en detalle**

La separación de niveles evita un error frecuente en las analogías dinámicas: identificar la repetición clínica con una órbita periódica del flujo que modela la defensa. Perelman demuestra que su flujo, módulo difeomorfismos y escala, no tiene órbitas periódicas no triviales. Si la repetición fuera esa órbita, el modelo colapsaría. Al declarar dos niveles ---ciclos de la pulsión sobre S; trayectoria del flujo en el espacio de métricas--- se conserva tanto el resultado de Perelman como la clínica de la repetición.

### **M4 en detalle**

«El Icc no fluye» es la traducción operativa de la atemporalidad. Las cargas aᵢ no tienen derivada temporal entre eventos. Solo saltan (Nachträglichkeit) o se anulan (cirugía). El parámetro t del flujo de Ricci mide el tiempo de la defensa, no el tiempo del inconsciente. Así se evita la objeción obvia: «¿cómo puede ser atemporal un objeto que evoluciona con una EDP?»

### **M5 en detalle**

La no operabilidad de la fantasía primaria es a la vez un postulado clínico y un hecho del formalismo (en 2D, el postulado 2πδ ≥ ℓmin; en 3D, la prohibición de cortar la esfera esencial). No se deduce de un teorema único; se impone para respetar el estatuto freudiano de la fase 2 de «Pegan a un niño» y se verifica que es compatible con la topología del modelo.

### **M6 en detalle**

La contingencia del análisis se formaliza como posible no-unicidad o inestabilidad del problema inverso (recuperar el interior a partir de y(t)). No se afirma que el problema sea siempre mal puesto; se afirma que el modelo no garantiza unicidad, y que esa no garantía corresponde a la experiencia clínica de que no todo análisis llega a la construcción certera.

### **M7 en detalle**

El etiquetado no es un aparato burocrático. Es la condición para que el desacuerdo sea localizable. Si un lector objeta un paso, debe poder decir: «objeto el [P] de la definición 5» o «la cita [M] de 1923 no dice eso». Sin etiquetas, el desacuerdo se vuelve global e inútil.

## **1.31 Sobre el uso de la lengua y las ediciones**

Las citas freudianas se toman del alemán cuando se verificaron en Imago, y se traducen al castellano en el cuerpo del texto. Las ediciones de referencia para la fase final de redacción serán Amorrortu y, para el control, la Gesamtausgabe o la Standard Edition según el pasaje. Las citas matemáticas se dan por arXiv o por revista con año. Los nombres propios de teoremas (Gauss--Bonnet, Calderón, etc.) se usan en la forma convencional.

## **1.32 Límites de la introducción misma**

Una introducción no demuestra. Declara. Las demostraciones ---o los esbozos de argumentación--- están en los Capítulos 5 y 6 y en el modelo 3D. Quien busque ya en estas páginas la prueba de que Cδ es indestructible no la encontrará: encontrará el anuncio de que esa prueba se da en la Proposición 1 del Capítulo 5. Quien busque la exégesis completa de la carta 52 la encontrará en el Capítulo 2. Esta división del trabajo es intencional.

## **1.33 Agradecimientos de método (no institucionales)**

El trabajo se benefició de un flujo de coautoría en el que cada decisión de modelado (variante A o B del núcleo; sumidero o barrera; fase 1 como construcción) se formuló como pregunta con opciones y se cerró con una respuesta explícita del autor del modelo. Ese procedimiento queda registrado en la cronología. No sustituye la responsabilidad del texto; la hace rastreable.

## **1.34 Última precisión antes del Capítulo 2**

El inconsciente, en Freud, no es un continente oscuro que la matemática vendría a iluminar. Es un sistema de leyes (atemporalidad, ausencia de contradicción, primacía del proceso primario, etc.) que el Proyecto y los textos de 1915 enuncian. La tesis no inventa un inconsciente geométrico. Toma esas leyes, en la medida en que el fragmento elegido las contiene, y pregunta qué objetos de la geometría del flujo y de la topología de variedades las pueden hospedar sin traicionarlas. La respuesta es el sistema de axiomas del Capítulo 5. La introducción solo prepara el terreno para que esa respuesta se pueda leer con las reglas correctas.

## **1.35 Recorrido argumentativo previsto (detalle)**

El argumento de la tesis, visto en conjunto, avanza en tres movimientos.

Movimiento 1 (Capítulos 2--4). Reunir las piezas. Del lado freudiano: magnitudes, facilitación, resto no representable, investidura lateral, posterioridad, construcciones. Del lado matemático: lazos, ciclos, flujo, entropía, cirugía, borde, extinción. Al final de este movimiento el lector dispone de dos cajas de herramientas y de la convicción de que no se las ha forzado aún a coincidir.

Movimiento 2 (Capítulos 5--6). Construir el diccionario y aplicarlo. Los diez axiomas fijan las flechas. Las definiciones dan objetos. Las proposiciones demuestran, dentro del formalismo, que la fantasía es indestructible bajo cirugía admisible y que la activación de una marca obliga a reorganizar toda la defensa. El Capítulo 6 muestra que la lectura de «Pegan a un niño» (fases 1 y 2 como construcciones) es compatible con el diccionario y que la corrección de una identificación errónea (fase 1 = trauma recuperable) mejora la coherencia.

Movimiento 3 (modelo 3D y Capítulo 7). Extender y limitar. En dimensión 3 la indestructibilidad se vuelve un hecho de π₁ y la disociación puede ser espontánea. Al mismo tiempo, aparecen problemas nuevos (puerto de la voz, existencia a largo plazo con borde). El Capítulo 7 no los oculta. Una tesis que solo exhibiera el diccionario sin sus bordes de validez sería retórica. Una tesis que solo listara objeciones sin diccionario sería paralítica. El movimiento 3 intenta el equilibrio.

## **1.36 Sobre la noción de «gasto» que anticipa el Capítulo 5**

Ya en esta introducción conviene adelantar, sin demostración, la idea del gasto. En Freud, la contrainvestidura cuesta. El Yo no reprime gratis: invierte energía para mantener lo reprimido a distancia. En el modelo, esa idea se traduce así: cuando una marca se activa, el borde de Ω cambia y, por Gauss--Bonnet, la curvatura total del interior debe compensar. La defensa no puede «pagar en un solo punto»; debe redistribuir en toda la región consciente y preconsciente. Ese carácter global del gasto es una predicción del formalismo, no una metáfora añadida. Se argumenta en la sección formal del Capítulo 5 (y en el documento Capitulo_5_Seccion_Contrainvestidura).

## **1.37 Por qué no se modela la transferencia**

La transferencia es central en la clínica y en la teoría freudiana del tratamiento. No aparece como objeto primario del modelo. La razón es de alcance: modelar la transferencia exigiría al menos dos aparatos en interacción, o un borde cuyo dato dependiera de la presencia del otro de modo más rico que el puerto de la voz. Eso es posible en principio (el dato u en c podría interpretarse como incluyendo la voz del analista), pero desborda el contrato de esta tesis. Se declara la exclusión para que no se lea como olvido.

## **1.38 Por qué no se modela el ello, el yo y el superyó como regiones separadas**

La segunda tópica (ello, yo, superyó) no se traduce en una partición de la variedad en tres subdominios. El modelo trabaja con la distinción Icc / Pcc-Cc (estructura fija versus flujo) y con la voz del superyó como dato de borde en c. Es una simplificación. Una extensión futura podría particionar Ω o enriquecer el borde; no se emprende aquí.

## **1.39 Relación con el principio de placer y el más allá**

El principio de placer (tendencia a reducir la tensión) y el más allá (compulsión de repetición, pulsión de muerte) están presentes de modo oblicuo. El primero se alinea con el carácter gradiente del flujo y con el principio de constancia del Proyecto. El segundo se alinea con la indestructibilidad del circuito de la fantasía. La tesis no resuelve el estatuto metapsicológico de la pulsión de muerte; usa la repetición como hecho clínico-formal (hay un ciclo que no se contrae) sin decidir la ontología de la pulsión.

## **1.40 Nota final sobre el título**

«Flujo de Ricci y metapsicología freudiana: un modelo analógico a partir de Poincaré y Perelman» anuncia tres cosas: la herramienta (Ricci), el dominio (metapsicología freudiana), el estatuto (analógico) y los puentes (Poincaré y Perelman). No anuncia una unificación de la matemática y el psicoanálisis, ni una nueva clínica, ni un algoritmo. Anuncia un modelo. Este Capítulo 1 ha intentado hacer legible ese anuncio y fijar las reglas con las que se lo juzgará.

Fin de la expansión del Capítulo 1.



> 📌 **Procedencia:** Documento maestro, sección VI (esquema)

# VI. Capítulo 2 — Freud: Proyecto y aparato (BORRADOR)

Estado: esquema sólido. Material verificado en Imago. Falta la redacción extendida (~50 pp.).

## Hilo conductor

- 2.1 Entwurf como economía: inercia y constancia [VT]
- 2.2 Bahnung y barreras de contacto → pesos del grafo Σ
- 2.3 Ding y Nebenmensch → superficie S
- 2.4 Carta 52: transcripciones; Vb = Wortvorstellungen
- 2.5 Nachträglichkeit: saltos de carga con g ≥ 1
- 2.6 Sach/Wort es de 1915, no del Entwurf
- 2.7 Afasia: imagen sonora
- 2.8 Seitenbesetzung → contrainvestidura; atemporalidad [M]

Documento de trabajo: Capitulo_2_Freud_Proyecto.docx



> 📌 **Procedencia:** Borrador v2, nota 6.1 (hilo conductor del Capítulo 2)

# Parte VI. Capítulos de base: notas de trabajo

## 6.1 Capítulo 2: el aparato de Freud

El capítulo se apoya en los pasajes verificados de la Parte III. El hilo conductor es el siguiente. En el Entwurf, el sistema nervioso tiende a descargar la cantidad Q (principio de inercia). Como la vida lo obliga a mantener una reserva, la tendencia se modifica y pasa a ser mantener Q lo más bajo y constante posible. La memoria no es una copia sino un estado de facilitación entre neuronas (Bahnung). El prójimo se descompone en una parte constante, el Ding, y una parte comprensible por el propio cuerpo. La carta 52 propone transcripciones sucesivas, y el preconsciente queda ligado a representaciones de palabra. La carta del 14.2.1897 introduce la Nachträglichkeit, y la del 2.5.1897 liga las fantasías con lo oído.

Dos advertencias. La fórmula Sach más Wort viene de 1915, no del Entwurf. Y la atemporalidad del inconsciente y el vínculo superyó–oído se citan de memoria hasta verificarlos.


> 📌 **Procedencia:** Documento maestro, sección VII (esquema)

# VII. Capítulo 3 — Poincaré (BORRADOR)

Estado: esquema sólido. Falta expansión a ~35 pp.

- 3.1 Analysis Situs y π₁
- 3.2 Conjetura de Poincaré
- 3.3 Ciclos límite
- 3.4 Invención matemática e inconsciente (Hadamard)
- 3.5 Poincaré tres veces en la tesis

Documento de trabajo: Capitulo_3_Poincare.docx



> 📌 **Procedencia:** Borrador v2, nota 6.2 (hilo conductor del Capítulo 3)


## 6.2 Capítulo 3: Poincaré

- **La conjetura.** Toda 3-variedad cerrada y simplemente conexa es homeomorfa a la 3-esfera [M]. «Simplemente conexa» significa que todo lazo se puede contraer a un punto, es decir, que el grupo fundamental es trivial.
- **Grupo fundamental.** Su lenguaje es el de los lazos contraíbles y no contraíbles. Es la herramienta natural para hablar de repetición (circuitos que no se pueden deshacer) en el axioma 6.
- **La invención matemática.** Poincaré describe un trabajo inconsciente que prepara la iluminación [VW]. Hadamard lo ordena en cuatro fases [VW].
- **Ciclos límite.** Poincaré introdujo los ciclos límite en la teoría cualitativa de ecuaciones diferenciales [M]. Es el objeto matemático del circuito de repetición del axioma 5.



> 📌 **Procedencia:** Documento maestro, integración del 21/10/2026 (versión ampliada; reemplaza el esquema previo)

# INTEGRACIÓN — Capítulo 4 completo (ampliado)

Se incorpora a continuación el Capítulo 4 en la versión ampliada del 21 de octubre de 2026 (archivo Capitulo_4_Ricci_Perelman.docx). Sustituye el esquema-borrador previo.

*— Inicio del Capítulo 4 integrado —*

# 4.1 Introducción al capítulo

Este capítulo expone las herramientas geométricas que el modelo toma de Hamilton y Perelman, y el respaldo del flujo con borde (Gianniotis). No demuestra la conjetura de Poincaré ni reconstruye la prueba completa de Perelman. Enuncia lo necesario para que el diccionario del Capítulo 5 sea legible: la ecuación del flujo, su carácter de gradiente, la ausencia de órbitas periódicas no triviales en el espacio de métricas, la cirugía de cuellos, la extinción en tiempo finito, el flujo con borde prescrito y la geometría del Horn Torus.

La relación con el modelo es de analogía controlada (Axioma de método M1). El flujo de Ricci no «es» la contrainvestidura; es el objeto matemático con el que se modela la defensa sobre la región Ω. La cirugía no «es» el análisis; es el objeto con el que se modela la extracción del trauma recuperable. Cada puente se enuncia al final del capítulo y se formaliza en el Capítulo 5.

Las referencias principales son: Perelman, arXiv:math/0211159 (entropía), math/0303109 (cirugía), math/0307245 (extinción) [VW]; Colding–Minicozzi, J. Amer. Math. Soc. 18 (2005) [VW]; Gianniotis, J. Differential Geom. 104 (2016) [VW]; Hamilton 1982 y 1988 [M/VW].

# 4.2 La ecuación del flujo de Ricci

## 4.2.1 Forma general

Sea (M, g) una variedad riemanniana. El flujo de Ricci es la evolución de la métrica según la curvatura de Ricci:

∂g/∂t = −2 Ric(g)

La curvatura de Ricci mide, en cada punto y en cada dirección, cómo el volumen de pequeñas bolas se desvía del volumen euclídeo. El signo negativo hace que las regiones de curvatura de Ricci positiva tiendan a contraerse y las de curvatura negativa a expandirse. Hamilton (1982) introdujo este flujo y estudió el caso de 3-variedades con curvatura de Ricci positiva.

## 4.2.2 Reducción a dimensión 2

En dimensión 2, el tensor de Ricci es proporcional a la métrica: Ric = K · g, donde K es la curvatura de Gauss. La curvatura escalar es R = 2K. El flujo se reduce a:

∂g/∂t = −R g

La evolución de la curvatura de Gauss satisface una ecuación de reacción-difusión:

∂K/∂t = ΔK + 2K²

El término ΔK difunde cualquier exceso de curvatura localizado; el término 2K² es de reacción. En superficies cerradas, bajo condiciones adecuadas, el flujo tiende a uniformizar la curvatura (resultados de Hamilton 1988 y de Chow, entre otros).

Para el modelo, esta reducción es central: el núcleo analógico se formula primero en 2D, donde Gauss–Bonnet da una ley de conservación transparente del gasto de la defensa, y las ecuaciones son elementales.

## 4.2.3 Interpretación en el modelo

El flujo se restringe a la región Ω (Pcc/Cc). No actúa sobre las marcas del Icc, que son condición de borde fija (Definición 9, Axioma 8 corregido). La difusión de curvatura en Ω se lee como reorganización de la defensa cuando cambia el borde (activación de una marca, Nachträglichkeit). Esa lectura se argumenta con Gauss–Bonnet en la sección de contrainvestidura.

# 4.3 Entropía de Perelman

## 4.3.1 El funcional y la monotonicidad

Perelman (arXiv:math/0211159) construye un funcional W, interpretado como entropía de un ensamble canónico, cuyo gradiente (módulo difeomorfismos y reescala) es el flujo de Ricci. A lo largo del flujo, W es monótono. De ahí se deduce que el flujo, módulo difeomorfismos y escala, no tiene órbitas periódicas no triviales: no puede «ciclar» en el espacio de métricas.

Ese resultado tensiona, en apariencia, con la compulsión de repetición. La tensión se resuelve por el Axioma de método M3: la dinámica de la pulsión sobre la superficie (ciclos de Γ_θ, atractor C_δ) y la dinámica del flujo de Ricci en el espacio de métricas son niveles distintos. La ausencia de órbitas periódicas del flujo no prohíbe ciclos de la pulsión sobre S.

## 4.3.2 Flujo de tipo gradiente

Que el flujo sea de tipo gradiente respecto de un funcional monótono autoriza el paralelo con los principios de extremum del Entwurf (inercia, constancia): hay una magnitud (o un funcional) que el sistema tiende a mejorar. El paralelo no identifica W con Q; fija una forma común: evolución que desciende (o no aumenta) un costo.

# 4.4 Cirugía

## 4.4.1 Singularidades y cuellos

Bajo el flujo de Ricci, la métrica puede desarrollar singularidades en tiempo finito. Perelman analiza la estructura de esas singularidades. En dimensión 3, las regiones típicas que se estrangulan son cuellos cilíndricos (o casi cilíndricos): zonas donde la geometría se acerca a un cilindro S² × I con radio que tiende a cero.

La cirugía de Perelman (arXiv:math/0303109) consiste en cortar el cuello, descartar el componente singular (o las «gorras» y «horns» según el análisis de regiones), y tapar los bordes resultantes con casquetes de curvatura controlada, de modo que el flujo pueda continuar en la variedad (posiblemente desconectada) resultante.

## 4.4.2 Cirugía en el modelo

En dimensión 2 del modelo, la «cirugía» no es un estrangulamiento espontáneo del flujo (en superficies el comportamiento es más regular bajo condiciones estándar); es una intervención decidida: se identifica un cuello alrededor de una marca traumática separable, se extrae el disco que la contiene y se tapa. Corresponde al acto analítico sobre el trauma recuperable (Axioma 10).

En dimensión 3 (M = S²×S¹), el estrangulamiento puede ser espontáneo: eso se lee como disociación. La extracción deliberada del componente que contiene la marca sigue siendo el acto analítico. Cortar la esfera esencial Σ₀ (que generaría S³ al tapar) está prohibido: destruiría π₁ y, con él, la indestructibilidad de la fantasía.

## 4.4.3 Nota sobre la palabra «horn»

En los artículos de Perelman, «horn» designa un tipo de región asintótica en el análisis de singularidades. No es el Horn Torus geométrico (superficie de revolución con r = R). El texto de partida del proyecto confundía ambos usos. Aquí se mantienen separados: Horn Torus = superficie del modelo 2D; horn de Perelman = región del análisis de singularidades.

# 4.5 Extinción en tiempo finito

Colding y Minicozzi (2005) demuestran que en 3-variedades cerradas sin sumandos asféricos el flujo de Ricci (con cirugía, en el marco de Perelman) se extingue en tiempo finito: el volumen tiende a cero y la variedad desaparece en el sentido del flujo.

En el modelo 3D, con métrica producto en S²×S¹, el radio ρ de las esferas satisface, bajo el flujo no normalizado, una ley del tipo d(ρ²)/dt = −2, de modo que ρ²(t) = ρ₀² − 2t y el colapso ocurre en T = ρ₀²/2. Sin un inconsciente fijo como borde, la defensa (el flujo en todo M) colapsaría el espacio. El Icc como condición de borde fija es lo que puede impedir ese colapso total: el flujo se restringe a Ω y las marcas no fluyen.

# 4.6 Flujo de Ricci con borde

## 4.6.1 El resultado de Gianniotis

Gianniotis (J. Differential Geom. 104, 2016) establece existencia y unicidad del flujo de Ricci en variedades con borde, bajo condiciones de borde prescritas (curvatura media y clase conforme, en el marco de su trabajo). También hay resultados en superficies con borde y curvatura geodésica prescrita (arXiv:1209.2386).

Ese cuerpo de resultados es el respaldo matemático de la contrainvestidura con borde fijo: el flujo puede plantearse solo en Ω, con kg (o H en 3D) prescrita en ∂Ω según las cargas de las marcas y la pared de angustia en n.

## 4.6.2 Condiciones de borde en el modelo

- En ∂D_ρ(p_i): kg = h(a_i) (o H = h(a_i) en 3D).
- En ∂D_δ(n): kg = 1/δ (pared rígida de angustia).
- En el entorno de c: dato u ligado a la voz/oído (par tipo

Dirichlet–Neumann; compatibilidad fina con la teoría de Gianniotis: problema abierto del Cap. 7).

La existencia global a tiempos largos con estas condiciones no se demuestra en la tesis; se invoca el marco de Gianniotis como garantía local de que el problema con borde está bien planteado en la literatura.

# 4.7 Horn Torus y la familia de toros

## 4.7.1 Definición geométrica

El toro de revolución de radio mayor R y radio menor r se obtiene al rotar un círculo de radio r cuyo centro está a distancia R del eje. Cuando r < R hay un agujero; cuando r = R el agujero se cierra y se obtiene el Horn Torus, singular en la cúspide c.

x² + y² + z² = 2√(x² + y²) (R = r = 1)

Cerca de c, con s = √(x² + y²), se tiene s ≈ z²/2: dos cuernos que se tocan. El grupo fundamental del toro suave es ℤ×ℤ; al pasar al Horn Torus y al trabajar en S∖{c} o en la familia T_r, el modelo retiene un lazo esencial compatible con la repetición (en 2D vía índice de giro alrededor de n; en 3D vía π₁(S²×S¹) ≅ ℤ).

## 4.7.2 Por qué no se fluye el Horn Torus singular

S no es una variedad riemanniana suave en c. El flujo de Ricci se define sobre variedades suaves (o en contextos de métricas con singularidades controladas que esta tesis no desarrolla). Por eso se trabaja sobre T_r con r < 1, o sobre S∖{c}, y se trata c como puerto (Axioma 9), no como punto regular del flujo.

# 4.8 Puentes con el modelo ( Capítulos 5 y 6 )

- Principio de inercia/constancia (Entwurf) ↔ flujo de tipo gradiente

y funcional monótono (Perelman).

- Difusión de curvatura (ΔK) ↔ reorganización de la defensa cuando

cambia el borde (Gauss–Bonnet / Aufwand).

- Flujo restringido a Ω + borde fijo ↔ contrainvestidura; marcas del

Icc atemporales (Axioma 8 corregido).

- Cirugía de cuellos ↔ extracción del trauma recuperable (Axioma 10);

no opera sobre n ni C_δ.

- Ausencia de órbitas periódicas del flujo de métricas ↔ nivel

distinto de la pulsión (Definición 4 corregida: flujo dinámico sobre Γ_θ; C_δ atractor).

- Extinción en tiempo finito (3D) ↔ necesidad de borde (Icc) para que

el espacio psíquico no colapse bajo la sola defensa.

- Gianniotis ↔ existencia del problema de flujo con borde prescrito.

# 4.9 Qué no hace este capítulo

No demuestra la conjetura de Poincaré. No reproduce las estimaciones de Perelman ni el análisis completo de singularidades. No resuelve la compatibilidad fina del dato u = K en c con todas las hipótesis de Gianniotis. No desarrolla un esquema numérico del flujo. No identifica la entropía W con una magnitud clínica.

Esas exclusiones siguen el contrato del Capítulo 1: herramientas citadas, analogía declarada, problemas abiertos listados en el Capítulo 7.

# 4.10 Transición al Capítulo 5

Con Freud (Cap. 2) y Poincaré (Cap. 3) estaban las formas del aparato y de los lazos/ciclos. Con este capítulo están el flujo, la cirugía, el borde y el Horn Torus. El Capítulo 5 construye el diccionario axiomático

proposiciones de indestructibilidad, conservación y cirugía que no toca la fantasía.

# 4.11 Resumen

- Flujo de Ricci: ∂g/∂t = −2 Ric(g); en 2D: ∂g/∂t = −R g, ∂K/∂t = ΔK +

2K².

- Entropía de Perelman: funcional monótono; sin órbitas periódicas no

triviales módulo difeomorfismos y escala.

- Cirugía: corte de cuellos, casquetes; en el modelo, extracción de

marcas de V_T.

- Extinción (Colding–Minicozzi): motiva el Icc como borde en 3D.
- Borde (Gianniotis): respaldo de la contrainvestidura con marcas

fijas.

- Horn Torus: superficie del modelo 2D; se fluye T_r o S∖{c}; c =

puerto.

- Puentes: gradiente ↔ economía; difusión ↔ gasto; cirugía ↔ cura del

trauma; niveles de dinámica ↔ repetición vs. monotonicidad.

# 4.12 Indicaciones para la expansión futura

Para acercar este capítulo a las ~60 páginas del plan original: (1) exposición más detallada de Ricci y de la curvatura escalar; (2) esquema de la prueba de monotonicidad de W; (3) clasificación de singularidades y canónica neighborhood theorem a nivel expositivo; (4) más ejemplos de flujo en superficies; (5) discusión del flujo normalizado vs. no normalizado; (6) bibliografía secundaria (Morgan–Tian, Kleiner–Lott, Cao–Zhu) en clave de lectura para psicoanalistas. Ninguno de esos bloques altera el diccionario del Capítulo 5.

*— Fin del Capítulo 4 —*

*— Fin de la integración del Capítulo 4 —*



> 📌 **Procedencia:** Documento maestro, secciones IX y X (resumen del núcleo y contrainvestidura)

# IX. Capítulo 5 — La analogía axiomática (SÓLIDO)

## Los diez axiomas

- 1. Ding/Real = superficie S tipo Horn Torus con cúspide c
- 2. Marcas VR; n = marca primaria nunca recuperable
- 3. Σ = grafo ponderado (Bahnung); n sin aristas cargadas
- 4. Pulsión = flujo dinámico de Q sobre Γ_θ (no atemporal); la red Γ sí es atemporal [CORREGIDO Def. 4]
- 5. Núcleo = sumidero; ciclo límite Cδ (variante A: n ≠ c)
- 6. Indestructibilidad en Ω (no en S completo): C_δ no null-homotópico en Ω; en 3D clase en π₁ [CORREGIDO Prop.1/Ax.6]
- 7. Nachträglichkeit = salto de aᵢ con g ≥ 1
- 8. Estructura atemporal del Icc (marcas, Γ, n); la pulsión NO es atemporal; t del flujo Ricci solo en Pcc/Cc [CORREGIDO]
- 9. Voz = único observable y(t) por c
- 10. Cura = cirugía solo sobre VT; n y Cδ no se tocan

## Proposiciones

- P1: Cδ indestructible bajo flujo suave
- P2: Gauss–Bonnet → redistribución global al activar una marca
- P3: cirugía en VT no altera la clase de Cδ

# X. Contrainvestidura con borde fijo y el gasto de la defensa (SÓLIDO)

Sección formal integrada. Flujo de Ricci solo en Ω; marcas del Icc como borde fijo (kg = h(aᵢ); kg = 1/δ en n). Gasto (Aufwand) = redistribución obligada de curvatura por Gauss–Bonnet. La defensa no borra marcas ni toca el núcleo. Documento: Capitulo_5_Seccion_Contrainvestidura.docx



> 📌 **Procedencia:** Borrador v2, Parte VII (desarrollo completo del Capítulo 5: decisiones, axiomas 1–10, definiciones, proposiciones, diccionario y revisión de consistencia)

# Parte VII. Capítulo 5: la analogía (núcleo de la tesis)

## 7.1 Tus formulaciones originales [A]

Se registran fielmente las ideas que fuiste aportando, porque son la materia prima de los axiomas.

### Registros, marcas y circuitos

- Vorstellungsrepräsentanz y pulsión. Simbólico e Imaginario como registros (esquema L de Lacan). Todas las marcas del significante están unidas por un hilo Σ de conexión. La pulsión circula por algunos circuitos, y son los que están cargados.
- La pulsión recorre marcas de Vorstellungsrepräsentanz. Una marca es un punto que se puede activar por Nachträglichkeit. El circuito ya estaba cargado, y lo que hace la Nachträglichkeit es cargar esa marca.

### La fantasía

- El segundo tiempo de la fantasía no se recuerda, es primitivo, no sale del Icc, es construido y es el núcleo de la fantasía.
- Hay fantasías que fueron conscientes, pasan al Icc y pueden ser recordadas.
- La pulsión no llega al núcleo porque produce angustia. Lo bordea y ahí se repite. La fantasía es indestructible.
- La fantasía es una marca, pero una que nunca puede ser recordada ni salir a la conciencia.

### El Horn Torus como figura del aparato

- El agujero (cúspide) es el lugar de la voz, el superyó, el oído, el contacto y el preconsciente. Oído y voz comparten ese lugar, y la voz es la del superyó.
- El trauma es una marca sobre la superficie. La superficie es el Ding o lo Real, y sobre ella se va inscribiendo el Icc. El Icc es atemporal.
- Solo vemos lo Icc a través de la salida de la voz por el Horn Torus.

### Análisis, síntoma y cura

- El análisis puede revelar cuáles son las pulsiones que predominan, y cuál es lo que comanda. Que se llegue a eso es contingente y depende del análisis.
- El trauma se puede recordar porque fue reprimido. El síntoma es lo que queda en el cuerpo, fuera del trauma. Lo que no se recuerda se repite en acto.
- La cura es una cirugía, pero solo para el trauma: sacar las partes traumáticas y suavizar esas uniones.
- El flujo de Ricci, que actúa sobre la capa Pcc/Cc, es la contrainvestidura.

## 7.2 Registro de decisiones de modelado

| **N.º** | **Decisión** | **Consecuencia** |
| 1 | Trabajar en 2D (superficie), con el 3D como extensión. | Ecuaciones simples del flujo de Ricci en superficies. Perelman entra por el modelo local del cuello y por la entropía. |
| 2 | Σ es un grafo de relaciones (un hilo que se recorre), no una curva. | Las aristas se realizan sobre la superficie como arcos geodésicos para definir el índice de giro. |
| 3 | La pulsión recorre marcas por los circuitos cargados. | Se modela con los ciclos del subgrafo de aristas con peso sobre un umbral. |
| 4 | El núcleo de la fantasía es un sumidero que la pulsión bordea. | Ciclo límite alrededor del núcleo (axioma 5). |
| 5 | La Nachträglichkeit carga la marca; el circuito ya estaba cargado. | Salto en la carga a_{i}, sin cambiar los pesos w (axioma 7). |
| 6 | El flujo de Ricci es la contrainvestidura y las marcas del Icc quedan fijas como condición de borde. | Resuelve el choque entre inconsciente atemporal y flujo temporal. |
| 7 | Oído y voz comparten el lugar de la cúspide, y la voz es la del superyó. | La cúspide es un puerto con dos cuernos; u entra y y sale (axioma 9). |
| 8 | La cura es una cirugía solo sobre el trauma, con unión suavizada. | Cirugía en cuellos de marcas recuperables (axioma 10). |
| 9 | La fantasía es una marca primaria, nunca recordable. | El núcleo n pertenece a V, no tiene aristas cargadas y no es separable. |
| 10 | Variante A del axioma 5: el núcleo es distinto de la cúspide. | La cúspide queda como puerto de voz y oído. |
| 11 | Borde rígido alrededor del núcleo (la angustia como pared fija). | Condición de borde k_{g} = 1/δ. |
| 12 | Lo de Q (modelo de la cantidad) se deja para más adelante. | La Definición 4 queda como modelo mínimo. |
| 13 | La fase 1 de Pegan a un niño es teorizada por Freud; el punto de partida es el núcleo (fase 2, el fantasma de Lacan). | La fase 1 no tiene objeto propio en el modelo. |
| 14 | Las pulsiones parciales (oral, anal, escópica, invocante) circulan alrededor del mismo núcleo. | Axioma 11: cuatro ciclos límite concéntricos, homotópicos entre sí. |
| 15 | Lo imaginario está atado a lo simbólico; son marcas de memoria S–I distintas de las VR. Las VR son las que recorre la pulsión. | Axioma 12: pares atados (s, ι) en Ω, fuera de Γ. |
| 16 | Las marcas S–I se crean de a pares; algunas se retienen y otras se disuelven. La única pulsión visible de forma directa es la invocante, por el orificio. | Definición 15 y axioma 13. |
| 17 | Las marcas S–I se fijan por el efecto del Nebenmensch: se copia el efecto, lo transmite lo simbólico y el sujeto lo incorpora. | Definición 17 y axioma 14; la parte constante del prójimo es el Ding (S) y la asimilada son las marcas S–I. |
| 18 | El circuito invocante es un círculo deformado que pasa por el orificio; los otros tres siguen siendo círculos. | Definición 18 y Proposición 5: C_{inv} es el generador de π_{1}(S) ≅ ℤ. |

## 7.3 Los diez axiomas

1. **Ding / Real.** Superficie compacta S de tipo Horn Torus con cúspide c.
2. **Marcas VR.** Conjunto discreto V ⊂ S∖{c} de marcas (Vorstellungsrepräsentanz) con curvatura concentrada, latentes o activas. Una de ellas, n, es la marca primaria (el núcleo de la fantasía), que nunca puede recordarse.
3. **Σ.** Grafo ponderado sobre las marcas; el peso es la carga (Bahnung). La marca primaria no tiene aristas cargadas.
4. **Pulsión.** Flujo de cantidad que recorre solo los ciclos cuyo peso supera un umbral θ.
5. **Núcleo de la fantasía.** La marca primaria n es un sumidero que la pulsión bordea por la angustia. Corresponde a la fase 2 de Pegan a un niño. Decidido: variante A (n distinto de c).
6. **Indestructibilidad.** Los ciclos que rodean a n no son contraíbles en Ω; el flujo suave no los elimina.
7. **Nachträglichkeit.** Una marca latente se activa cuando un evento posterior eleva su carga a_{i} por encima de un umbral a*.
8. **Icc atemporal.** La estructura (S, V, Γ, n) es invariante, salvo por los eventos de la Definición 7 y la intervención analítica de la Definición 12. El tiempo t del flujo pertenece solo a Pcc/Cc, donde el flujo de Ricci es la contrainvestidura.
9. **Voz como observable.** Lo único observable del sistema es el flujo que sale por c (voz, oído, superyó, contacto, Pcc).
10. **Cura.** La cirugía se aplica solo a las marcas traumáticas reprimidas: se extrae la parte traumática y se suaviza la unión; el núcleo n y su circuito no se tocan.

## 7.4 Definiciones y proposiciones

### Axiomas 1 a 4

**Definición 1 (Ding / Real).** Sea T_{r} el toro de revolución de radio mayor R = 1 y radio menor r, dado por

φ_{r}(u, v) = ( (1 + r cos v) cos u , (1 + r cos v) sin u , r sin v ), u, v ∈ [0, 2π)

Para r < 1 la superficie es suave y tiene agujero. Para r = 1 el agujero se cierra: el círculo v = π queda aplastado en el origen. Se llama S = T_{1} al Horn Torus y c = (0, 0, 0) a su cúspide. Su ecuación implícita, con s = √(x² + y²), y su forma cerca de c son

s² + z² = 2s (es decir, x² + y² + z² = 2√(x² + y²)), cerca de c: s ≈ z²/2

S es una esfera con dos puntos identificados, y su grupo fundamental es π_{1}(S) ≅ ℤ [estándar; verificar en la redacción final]. S no es una variedad suave en c, de modo que el flujo de Ricci solo se define sobre S∖{c} o sobre la familia T_{r} con r < 1.

**Definición 2 (marcas VR).** Sea V = {p_{1}, …, p_{k}} ⊂ S∖{c} un conjunto finito de puntos. A cada p_{i} se le asocia una carga a_{i} ≥ 0 (curvatura concentrada) y un estado σ_{i} ∈ {latente, activo}. El conjunto se divide en V = V_{T} ∪ {n}: las marcas traumáticas V_{T} (reprimidas, recuperables) y la marca primaria n (nunca consciente, nunca recuperable).

**Definición 3 (hilo Σ).** Sea Γ = (V, E, w) un grafo no dirigido con E ⊂ V × V y w : E → ℝ_{≥0}. El peso w(e) es el grado de facilitación (Bahnung) entre dos marcas. Las aristas son relaciones, pero cada una se realiza sobre S∖D_{δ}(n) como el arco geodésico mínimo entre sus extremos. Así, cada ciclo de Γ define una curva cerrada y tiene índice de giro alrededor de n. La marca primaria n es un vértice sin aristas cargadas: w(e) = 0 para toda arista que incide en ella, de modo que la pulsión nunca la alcanza.

**Definición 4 (pulsión).** Dado un umbral θ > 0, sea Γ_{θ} el subgrafo de las aristas con w ≥ θ. Un circuito es un ciclo en Γ_{θ}. Sea Q : V → ℝ_{≥0} la cantidad en cada marca y s : V → ℝ_{≥0} el estímulo endógeno constante (Triebfeder). El modelo mínimo es

dQ/dt = −L_{θ} Q + s, L_{θ} = D_{θ} − W_{θ}

donde W_{θ} es la matriz de pesos de Γ_{θ} y D_{θ} la matriz diagonal de sus grados. Sin s, cada componente conexa va a un nivel constante de Q, lo que refleja el principio de constancia del Entwurf. **Limitación reconocida:** la difusión explica la constancia pero no la circulación ni la repetición; eso se agrega con los axiomas 5 y 6. El modelo de Q queda para más adelante, por decisión tuya.

### Axiomas 5 y 6: núcleo e indestructibilidad

**Definición 5 (núcleo como sumidero).** Sea n ∈ V la marca primaria, un punto regular de S∖{c}. En un entorno de n se usan coordenadas polares (r, φ), con r la distancia a n. El núcleo es un sumidero: la pulsión tiende hacia él, pero acercarse más allá de un radio δ > 0 produce angustia y la repele. Se modela por

ṙ = −α (r − δ), φ̇ = ω, α > 0, ω > 0

Toda trayectoria con r > δ converge al círculo C_{δ} = {r = δ}, un ciclo límite atractor. El disco {r < δ} queda excluido: la pulsión lo bordea y no lo alcanza. La ley radial es una elección mínima; cualquier ley con un cero estable en r = δ da la misma conclusión. Fuentes: fase 2 de Pegan a un niño (1919) y la angustia como señal (1926) [M].

**Definición 6 (circuito de repetición).** El índice de giro de una curva cerrada γ en S∖{n} alrededor de n es

w(γ, n) = (1/2π) ∮_{γ} dφ

El circuito de la fantasía es C_{δ}, con w(C_{δ}, n) = ±1.

**Proposición 1 (indestructibilidad, borrador).** (i) C_{δ} no es contraíble en Ω, la esfera con k + 3 agujeros (marcas, núcleo y los dos bordes del orificio): su clase es la del lazo alrededor del agujero de n, que no es trivial porque hay otros agujeros. Corrección: en S sin más, el lazo alrededor de n sí es contraíble, porque S es una esfera con dos puntos identificados. (ii) C_{δ} es estructuralmente estable: su exponente de Floquet es −α < 0, así que una perturbación pequeña del campo conserva un ciclo límite cercano. (iii) El flujo de Ricci suave sobre T_{r}, con r < 1, es una familia de métricas sobre la misma variedad y no modifica las clases de homotopía de los lazos. Por (i) a (iii), el circuito de repetición persiste mientras no haya singularidad.

### Axiomas 7 y 8: Nachträglichkeit y atemporalidad

**Definición 7 (Nachträglichkeit).** Un evento E_{j} ocurre en el instante t_{j} con magnitud m_{j} ≥ 0 y asociación κ_{ij} ∈ [0, 1] con la marca p_{i}. La carga salta en ese instante:

a_{i}(t_{j}^{+}) = a_{i}(t_{j}^{−}) + g(t_{j}) κ_{ij} m_{j}, g(t) ≥ 1

La marca pasa a estado activo cuando a_{i} ≥ a*. El evento no modifica los pesos w del grafo: los circuitos ya estaban cargados, y lo que cambia es la carga de la marca. La ganancia g(t) representa que, con los años, el aparato crece y la misma huella produce un efecto mayor que en su momento [VT, carta del 14.2.1897, p. 247]. Un recuerdo ordinario actúa solo como actuó como vivencia, es decir, con g = 1. **Consecuencia (a cerrar con el modelo de Q):** una marca activa inyecta cantidad en los circuitos ya cargados.

**Definición 8 (inconsciente atemporal).** Sea U = (S, V, Γ, n) la estructura inconsciente. Entre dos eventos nada en U depende del tiempo:

da_{i}/dt = 0 (entre eventos), dw_{e}/dt = 0, n fijo

Las cargas no decaen con el paso del tiempo y solo cambian por los saltos de la Definición 7. Fuente: la atemporalidad de los procesos del sistema Icc en Lo inconsciente (1915) [M].

**Definición 9 (contrainvestidura).** Sea Ω la región consciente y preconsciente: la superficie sin los discos D_{ρ}(p_{i}) alrededor de cada marca, sin el disco D_{δ}(n) alrededor del núcleo y sin la cúspide c. El flujo de Ricci actúa solo sobre Ω, y las marcas del Icc quedan fijas como condición de borde:

∂g/∂t = −R g en Ω; k_{g} = h(a_{i}) en el borde de cada marca

donde k_{g} es la curvatura geodésica del borde y h una función creciente de la carga a_{i}. En c, la condición la fija la voz del superyó (Definición 10). En el borde del disco alrededor de n se impone un borde rígido, k_{g} = 1/δ: la angustia como pared fija. Fuentes: en el Entwurf el Yo frena el recuerdo mediante una Seitenbesetzung y paga el gasto [VT, pp. 408-409]; Gegenbesetzung es el término de 1915 [M]. Matemática: Gianniotis (2016) [VW].

**Proposición 2 (conservación de curvatura, borrador).** Para una superficie lisa T_{r} con k + 1 discos removidos, Gauss–Bonnet da

∫_{Ω} K dA + ∮_{∂Ω} k_{g} ds = 2π χ(Ω) = −2π (k + 1)

En el modelo con cúspide, ∂Ω incluye también las dos circunferencias de B: S menos un entorno de c es un anillo, con χ = 0, y la fórmula resulta la misma. El flujo no destruye curvatura: la redistribuye dentro de Ω. Cuando la Nachträglichkeit sube una carga a_{i}, cambia k_{g} en el borde de esa marca y la integral de K sobre Ω debe compensarlo. Interpretación propuesta [P]: una marca que se activa obliga a reorganizar toda la defensa. El costo (Aufwand) de la contrainvestidura queda por definir; una candidata es un funcional monótono del capítulo 4.

### Axioma 9: la cúspide como puerto

**Geometría de c.** Para r = 1, cerca de la cúspide la superficie obedece s ≈ z²/2. Son dos cuernos muy agudos, uno por encima y otro por debajo, que se tocan solo en c. El borde de un entorno pequeño de c consta de dos circunferencias, B_{+} (cuerno superior) y B_{−} (cuerno inferior). De ahí el nombre de Horn Torus.

**Definición 10 (puerto de c).** Sea B = B_{+} ∪ B_{−} el borde de un entorno de c. Se definen dos funciones del tiempo sobre B:

u(t) = K|_{B} (lo oído), y(t) = ∮_{B} ∂_{ν}K ds (lo vocalizado)

u es el dato de Dirichlet de la ecuación ∂K/∂t = ΔK + 2K² en B (lo que entra a Ω) e y es su flujo normal (lo que sale): forman el par de Dirichlet a Neumann. Falta garantizar (capítulo 7) que este dato sea compatible con las condiciones geométricas del flujo de Ricci. La voz del superyó es la señal u que fija la condición de borde de la contrainvestidura en c.

**Axioma 9 (formal).** (a) Lo único observable del sistema es y(t). (b) Oído y voz comparten el puerto B: u e y son variables conjugadas en el mismo borde. (c) El interior (marcas, grafo, núcleo) no se observa directamente.

Fuentes: el Vb está ligado a las representaciones de palabra [VT, carta 52, p. 186], cuyo núcleo es la imagen sonora (La afasia); las fantasías provienen de lo oído [VT, carta del 2.5.1897]; el eslabón superyó–oído se cita de memoria (El yo y el ello, 1923) [M].

**Hipótesis para el capítulo 6 [P].** En un problema de borde elíptico, la relación entre el dato de Dirichlet y el flujo normal es el operador de Dirichlet a Neumann. Recuperar el interior a partir de él es el problema inverso de Calderón, que en dimensión 2 tiene resultados clásicos (Astala y Päivärinta, 2006) [M]. Paralelo: así como el analista solo accede a la voz del paciente y construye lo que no recuerda (fase 2 de Pegan a un niño; Construcciones en el análisis, 1937), el matemático solo accede al borde y reconstruye el interior.

### Axioma 10: trauma, síntoma, fantasía y cura

**Definición 11 (clasificación).** Los elementos del modelo se distinguen por su relación con el recuerdo.

- **Marca traumática (p_{i} ∈ V_{T}).** Estuvo en la conciencia y fue reprimida; por eso puede recordarse. Es latente o activa.
- **Núcleo de la fantasía (n).** Es la marca primaria: pertenece a V, pero nunca fue consciente y nunca puede serlo. No se recuerda: se repite en acto, como el recorrido de C_{δ}. Corresponde a la fase 2 de Pegan a un niño y a la represión primaria de 1915 [M].
- **Síntoma.** Es la parte de la voz que producen las marcas activas y que la contrainvestidura no absorbe: y_{sint}(t) = y(t) − y_{0}(t), donde y_{0} es la salida con todas las marcas latentes. Queda fuera del trauma: en el cuerpo, no en la marca.

Fuente: carta del 30.5.1896 [VT, p. 175], donde las escenas de la histeria se ubican en los primeros cuatro años, cuando faltaba la traducción a representaciones de palabra.

**Definición 12 (cuello y cirugía).** Una marca p_{i} es separable si existe una curva cerrada simple σ_{i} ⊂ Ω que acota un disco D_{i} con p_{i} ∈ D_{i}, n ∉ D_{i}, c ∉ D_{i}, y de longitud ℓ(σ_{i}) < ℓ_{min} (un cuello). La cirugía en σ_{i} consiste en cortar a lo largo de σ_{i}, descartar D_{i} (la parte traumática), pegar un casquete suave en su lugar y seguir con el flujo de Ricci, que suaviza la unión. El efecto sobre el modelo es

V ← V ∖ {p_{i}}, Γ ← Γ − p_{i}, a_{i} ← 0

es decir, se eliminan la marca y las aristas que incidían en ella. La fuente matemática es la cirugía de Perelman [VW].

**Postulado (el núcleo no es separable).** La cirugía solo opera sobre marcas recuperables (V_{T}). La marca primaria n nunca puede recordarse y, por tanto, no es separable. Además se exige 2πδ ≥ ℓ_{min}, de modo que ninguna curva alrededor de n es un cuello.

**Proposición 3 (la cirugía no toca la fantasía, borrador).** Si p_{i} es separable, la cirugía en σ_{i} deja intacta la clase de C_{δ} y su índice de giro w(C_{δ}, n) = ±1. Razón: σ_{i} acota un disco que no contiene a n, y reemplazar ese disco por otro no cambia la clase de homotopía de los lazos alrededor de n. Los ciclos de Σ que pasaban por p_{i} pierden ese vértice; el atractor C_{δ} persiste y la pulsión se reorganiza a su alrededor con las marcas que quedan (a verificar: requiere una regla de formación de nuevas aristas). Por Gauss–Bonnet en el disco, el casquete debe aportar la curvatura total que se retira:

∫_{D_{i}} K dA + ∮_{σ_{i}} k_{g} ds = 2π

**Axioma 10 (formal).** (a) La cirugía se aplica solo a marcas separables, es decir, al trauma y no a la fantasía. (b) La fantasía es indestructible: ninguna cirugía admisible cambia C_{δ}. (c) *Contingencia:* el circuito dominante de Γ_{θ} (el de mayor flujo sostenido) se identifica solo si la salida y(t) lo distingue de los demás. Que el análisis llegue a él es contingente, porque recuperar el interior desde el borde puede no tener solución única.

## 7.5 Diccionario Freud–geometría

| **Concepto psicoanalítico** | **Objeto del modelo** | **Fuente principal** |
| Ding / Real | Superficie S del Horn Torus | Entwurf, pp. 415-416 [VT] |
| Vorstellungsrepräsentanz (marca) | Punto p_{i} con carga a_{i} | Carta del 2.5.1897 [VT]; 1915 [M] |
| Marca primaria, núcleo de la fantasía | Punto n sin aristas cargadas; sumidero | Pegan a un niño, fase 2 [M] |
| Hilo Σ y Bahnung | Pesos w del grafo Γ | Entwurf, Parte I [VT] |
| Pulsión y circuitos cargados | Ciclos de Γ con peso sobre θ; flujo de Q | Entwurf [VT] |
| Repetición en acto | Ciclo límite C_{δ} alrededor de n | 1914 [M] |
| Angustia | Radio δ y pared rígida k_{g} = 1/δ | 1926 [M] |
| Nachträglichkeit | Salto de carga a_{i} con ganancia g ≥ 1 | Cartas del 14.2 y 2.5.1897 [VT] |
| Icc atemporal | Estructura U sin dependencia del tiempo | 1915 [M] |
| Contrainvestidura | Flujo de Ricci sobre Ω con borde fijo | Seitenbesetzung [VT]; 1915 [M] |
| Preconsciente, voz, superyó, oído, contacto | Cúspide c como puerto: u (entra) e y (sale) | Carta 52 [VT]; Afasia; 1923 [M] |
| Efecto del Nebenmensch (incorporación) | Par S–I fijo (λ = 0), entrada por u | Entwurf, pp. 415-416 [VT]; [A] |
| Trauma recordable (reprimido) | Marca p_{i} ∈ V_{T} | Carta del 30.5.1896 [VT] |
| Síntoma | y_{sint} = y − y_{0} | [P] |
| Cura analítica | Cirugía en cuello de una marca separable | Perelman [VW]; [A] |

## 7.6 Revisión de consistencia de los diez axiomas

La relectura de los diez axiomas encontró los problemas siguientes. Todos quedaron resueltos con tus decisiones, salvo lo señalado como abierto.

|  | **Problema detectado** | **Resolución** |
| A | La fantasía vivía en dos capas sin conexión: el grafo abstracto Σ y el círculo continuo C_{δ} con índice de giro. | La fantasía es una marca primaria n ∈ V, sin aristas cargadas. Los ciclos de Σ se realizan como curvas con índice de giro alrededor de n y son atraídos hacia C_{δ}. Los ciclos de Σ pueden perder vértices por cirugía; el atractor persiste. Reorganización posterior: abierta. |
| B | Faltaba la condición de borde alrededor del núcleo. | Borde rígido k_{g} = 1/δ: la angustia como pared fija. |
| C | Oído y voz no eran variables conjugadas en el sentido de Dirichlet a Neumann (u era k_{g} e y flujo de K). | Se tomó u = K en el borde, de modo que u e y forman el par de Dirichlet a Neumann. Falta comprobar compatibilidad con las condiciones geométricas del flujo. |
| D | La variante B del axioma 5 (n = c) chocaba con el axioma 9. | Se cerró en la variante A (n distinto de c). |
| E | El axioma 8 afirmaba invariancia total, pero el axioma 10 elimina marcas. | El axioma 8 admite como excepciones los eventos y la intervención analítica. |
| F | La Proposición 2 omitía el borde de la cúspide. | Se aclaró que ∂Ω incluye B y que el resultado es el mismo (anillo con χ = 0). |



> 📌 **Procedencia:** Documento maestro, addendas vigentes (Axioma 8 y Definición 4 corregidos)

# ADDENDA — Corrección del Axioma 8 (integrada)

Fecha: 20 de octubre de 2026. Esta addenda corrige el Axioma 8 y los tramos asociados del Capítulo 5. Sustituye cualquier formulación anterior que tratara la pulsión como invariante temporal.

## Motivo

La pulsión no es invariante en el tiempo. Lo atemporal es el inconsciente como estructura: las marcas, el trauma, el grafo de facilitaciones y el núcleo de la fantasía. La pulsión es movimiento: circula, se intensifica, se fija en circuitos. Conflar ambas cosas oscurecía el modelo.

## Axioma 8 — versión corregida (vigente)

Axioma 8 — Estructura atemporal del Icc; pulsión no atemporal.

(a) El inconsciente como estructura —marcas V, grafo Γ (Bahnung), núcleo n de la fantasía— es atemporal: no depende del parámetro t del flujo de Ricci. Las cargas aᵢ no decaen entre eventos. Solo cambian por saltos de Nachträglichkeit (Definición 7) o por eliminación en cirugía (Definición 12).

(b) La pulsión no es atemporal. Es el flujo de cantidad que recorre los circuitos de Γ_θ. Ese flujo evoluciona: puede desplazarse, intensificarse, quedar atraído a C_δ, o modificar su distribución entre circuitos. La repetición en acto es un modo de ese movimiento, no una propiedad estática de la marca.

(c) El tiempo t del flujo de Ricci sigue perteneciendo solo a la contrainvestidura (región Ω = Pcc/Cc). La pulsión y la defensa son ambos procesos en el tiempo; lo que no tiene tiempo es la inscripción (las marcas y su red).

## Matiz al Axioma 4

Axioma 4 (matiz). La pulsión es el flujo de cantidad por los ciclos cuyo peso supera θ. Ese flujo no es un invariante del Icc: es dinámico. Lo invariante es la red por la que puede circular (Γ y sus pesos entre eventos).

## Definición 8 — reformulada

Definición 8. Sea U = (S, V, Γ, n) la estructura del Icc. U no depende de t entre eventos y cirugías. La pulsión, en cambio, se describe por un estado de flujo sobre Γ_θ (o por la aproximación del ciclo límite C_δ) y ese estado puede cambiar con el tiempo del aparato.

## Tabla de referencia

- Marcas / trauma / n / Γ (estructura) → atemporales.
- Pulsión (flujo por circuitos) → no atemporal; dinámica.
- Contrainvestidura (flujo de Ricci en Ω) → temporal; tiempo t del modelo.
- Observable y(t) → registro temporal de lo que sale por c.

## Diccionario — filas afectadas

Icc atemporal → leer como estructura de marcas y red, no como pulsión.

Pulsión y circuitos cargados → leer como flujo dinámico sobre esa red.

Repetición en acto (C_δ) → modo en que la pulsión se estabiliza alrededor del núcleo sin que el núcleo mismo «fluya».

## Frase de cierre (vigente en todo el corpus)

Lo atemporal son las marcas y la estructura del Icc. Lo que se mueve en el tiempo es la pulsión —y la defensa.

## Instrucción de lectura

Allí donde el cuerpo del Capítulo 5 (sección IX del maestro) diga «8. Icc atemporal; t del flujo solo en Pcc/Cc», debe leerse el enunciado completo de esta addenda. El archivo Correccion_Axioma_8_Pulsion_atemporalidad.docx conserva el mismo texto como pieza suelta.

*— Fin de la addenda Axioma 8 —*

# ADDENDA — Corrección de la Definición 4 (integrada)

Fecha: 20 de octubre de 2026. Complementa la addenda del Axioma 8. Sustituye la Definición 4 anterior.

## Definición 4 — versión corregida (vigente)

(a) Sea Γ = (V, E, w) el grafo de facilitaciones (Axioma 3). Dado θ > 0, Γ_θ es el subgrafo de aristas con w ≥ θ.

(b) La pulsión es el flujo de cantidad Q que recorre los ciclos de Γ_θ. No es un invariante del Icc: es un proceso. Su estado se describe por la distribución de Q sobre Γ_θ (o por la atracción hacia C_δ).

(c) La red Γ es parte de la estructura atemporal U (Axioma 8). Los pesos solo cambian por Nachträglichkeit o cirugía. El flujo de Q sí cambia con el tiempo del aparato.

(d) Modelo mínimo (borrador): dQ_i/dt = −∑_j L^θ_ij Q_j + s_i(t). Desarrollo completo de Q pospuesto; se fija el estatuto: flujo dinámico, no marca atemporal.

## Relación con C_δ

C_δ es el atractor del flujo de la pulsión alrededor de n; no es la pulsión misma.

## Frase vigente

La red es atemporal; la pulsión es el movimiento sobre esa red.

*— Fin de la addenda Definición 4 —*



> 📌 **Procedencia:** Documento maestro, addenda integrada (Proposición 1/Axioma 6 corregidos y citas actualizadas a [VW])

# ADDENDA — Corrección Prop. 1 / Axioma 6 y citas [VW] (desde v2)

Fecha: 21 de octubre de 2026. Material tomado del borrador v2 (Parte IV §4.4 y corrección a la Proposición 1) e integrado al maestro.

## Axioma 6 corregido

(a) En 2D, los ciclos alrededor de n no son null-homotópicos en Ω (S menos discos de marcas, de n y de c), no necesariamente en el Horn Torus S sin agujeros (S es homeomorfo a una esfera con dos puntos identificados).

(b) El flujo suave no elimina esa clase en Ω.

(c) En 3D, indestructibilidad por π₁(M) ≅ ℤ.

## Proposición 1 corregida

(i) C_δ no es contraíble en Ω (w = ±1). (ii) Estabilidad estructural del atractor. (iii) El flujo suave sobre Ω no elimina la clase.

## Citas actualizadas a [VW]

- Atemporalidad del Icc (1915) — [VW].
- Superyó y oído / Hörkappe (1923) — [VW].
- Pegan a un niño (1919), fase 2 construcción — [VW].
- Contrainvestidura / represión primordial (1915) — [VW].

Pendiente [M]: topología fina Horn Torus y S²×S¹; Astala–Päivärinta; exposiciones Morgan–Tian et al.

*— Fin addenda Prop.1 / citas —*



> 📌 **Procedencia:** Extensión Cap. 5 (archivo de Grok), texto íntegro; sustituye el resumen comprimido que traía el maestro

**Extensión del Capítulo 5**

*Pulsiones parciales, circuito invocante y marcas de memoria S–I*

*No modifica los diez axiomas base; los complementa*

# E.1 Estatuto de esta extensión

Este bloque no sustituye los Axiomas 1–10 ni las Definiciones 1–12. Añade objetos para: (i) diferenciar registros de la pulsión alrededor del mismo núcleo n; (ii) alojar memoria preconsciente/consciente con olvido; (iii) acoplar oído y voz al circuito invocante. Las decisiones marcadas [A] provienen del autor; las lecturas [P] son hipótesis; Lacan entra en el mínimo ya declarado (esquema L, no nudos) [M].

Compatible con las correcciones vigentes: Axioma 8 (estructura Icc atemporal; pulsión dinámica); Definición 4 (flujo de Q); Axioma 6 / Proposición 1 (no contraíble en Ω, no en S completo).

# E.2 Pulsiones parciales y fantasma

## Definición 13 (pulsiones parciales)

Sea K = {oral, anal, escópica, invocante} el conjunto de pulsiones parciales (Lacan [M]; extensible). Cada k ∈ K tiene parámetros propios en el entorno de n:

ṙ = −α_k (r − δ_k), φ̇ = ω_k, con δ_k ≥ δ.

Cada trayectoria converge al círculo C_k de radio δ_k. Los cuatro son ciclos límite concéntricos alrededor de n, con índice de giro ±1, homotópicos entre sí en Ω. En 3D, los cuatro pertenecen a la clase generadora de π₁(M) ≅ ℤ (salvo el refinamiento del circuito invocante en la Definición 18).

## Axioma 11 (fantasma)

Existe una única marca primaria n. Todas las pulsiones parciales circulan alrededor de ella y repiten su recorrido: n es el punto común de la repetición; los cuatro circuitos son la misma repetición en registros distintos. Coherente con el Axioma 5.

## Hipótesis: la voz como huella de la repetición [P]

La voz es el objeto de la pulsión invocante y sale por la cúspide c. Si y(t) está acoplada al circuito invocante, puede heredar periodicidad. Predicción cualitativa: la repetición de la fantasía puede oírse como periodicidad en lo dicho. No se eleva a teorema; es hipótesis contrastable.

## Proposición 4 (borrador)

La cirugía de la Definición 12 sobre marcas recuperables no modifica ninguno de los C_k, por el mismo argumento de la Proposición 3.

# E.3 Marcas de memoria S–I

## Definición 14 (marcas S–I)

Además de las marcas VR, sea W = {w_1, …, w_m} un conjunto de marcas de memoria en Ω. Cada w_j = (s_j, ι_j): marca simbólica s_j y marca imaginaria ι_j, atadas por una ligadura b_j > 0. Las marcas S–I no son vértices de Γ: la pulsión no las recorre. La pulsión recorre solo las marcas VR [A].

Lectura propuesta [P]: s_j ≈ Wortvorstellung, ι_j ≈ Sachvorstellung; la ligadura, la representación consciente de 1915 (Sach + Wort). Viven en Ω porque el preconsciente está ligado a representaciones de palabra [VT carta 52; VW El yo y el ello]. En Lacan: ejes del esquema L [M].

## Axioma 12 (memoria S–I)

Existen marcas de memoria S–I, distintas de las marcas VR, formadas por pares atados (simbólico, imaginario). Viven en Ω y no son recorridas por la pulsión.

## Definición 15 (dinámica de la memoria S–I)

Cada par w_j tiene ligadura b_j(t) ≥ 0:

- Creación: un evento crea un par con b_j = b_0 m_j (símbolo e imagen juntos).
- Entre eventos: db_j/dt = −λ_j b_j, λ_j ≥ 0. Si λ_j = 0 el par queda fijo.
- Refuerzo: b_j(t⁺) = b_j(t⁻) + β κ_ij m_j.
- Disolución: si b_j < b_min, el par desaparece.

Contraste con el Axioma 8: las cargas a_i de las marcas VR no decaen; las ligaduras b_j de las S–I sí pueden. El olvido es propio de lo preconsciente/consciente; el Icc estructural es atemporal.

# E.4 Observabilidad y fijación

## Definición 16 (orificio y observabilidad)

Solo el circuito invocante atraviesa el orificio: C_inv entra por B₊ (lo oído) y sale por B⁻ (lo vocalizado). Los circuitos oral, anal y escópico no cortan a B.

## Axioma 13 (observabilidad)

La única pulsión observable de forma directa es la invocante, a través de y(t). Las demás se infieren.

## Definición 17 (fijación por el prójimo)

Un evento de tipo N llega por lo oído (señal u(t)) con contenido simbólico. El sujeto incorpora el efecto y se crea un par (s_j, ι_j) con:

- λ_j = 0 si nace por incorporación de tipo N (queda fijo);
- λ_j > 0 en otro caso (se disuelve salvo refuerzo).

Recorridos débiles (0 < w(e) < θ) pueden crear pares con b_j = ε y λ_j > 0 que casi siempre se disuelven.

## Axioma 14 (fijación por el Nebenmensch)

Las marcas S–I que se retienen provienen de la incorporación del efecto del prójimo, transmitido por lo simbólico a través de lo oído. Las demás se disuelven.

Fuente: Entwurf pp. 415–416 [VT] — el complejo del prójimo se divide en parte constante (Ding → superficie S) y parte comprendida por el propio cuerpo (→ marcas S–I).

Observación [P]: u es entrada de memoria; y es salida de pulsión.

# E.5 Circuito invocante

## Definición 18 (circuito invocante deformado)

Los circuitos oral, anal y escópico son los C_k de la Definición 13. El circuito invocante C_inv es un círculo deformado: sigue un radio δ_inv alrededor de n, pero hace una excursión que entra al orificio por B₊, cruza c y sale por B⁻ antes de volver. Es una curva cerrada que pasa por c. En cada vuelta entra lo oído y sale la voz.

## Proposición 5 (borrador)

En el modelo con orificio, C_inv no es contraíble del mismo modo que un lazo que solo rodea n en S compactificado. En 3D, C_inv representa (o se acopla a) el generador de π₁(M) ≅ ℤ. Lectura [P]: circuito global que la cirugía admisible no puede cortar. Enunciado sujeto a la topología fina del Horn Torus [M].

# E.6 Diccionario ampliado (solo esta extensión)

- Pulsiones parciales → familia {C_k} alrededor de n.
- Fantasma → única marca n común a todos los C_k.
- Pulsión invocante / voz → C_inv acoplado a y(t).
- Wort / Sach (consciente) → par (s_j, ι_j) en Ω.
- Olvido → decaimiento de b_j (λ_j > 0).
- Fijación por el prójimo → λ_j = 0 vía u(t) (Nebenmensch).
- Esquema L (mínimo) → ejes S–I como pares atados [M].

# E.7 Límites de la extensión

- No se formaliza la transferencia.
- No se desarrollan nudos borromeos ni RSI completo.
- La periodicidad de y(t) es hipótesis [P], no teorema.
- Prop. 5 depende de hechos topológicos aún [M].
- Las pulsiones parciales lacanianas están citadas [M] hasta verificación.



> 📌 **Procedencia:** Borrador v2, Parte VIII (Capítulo 6 completo)

# Parte VIII. Capítulo 6: la fantasía y sus tres fases

El capítulo pondrá sobre el modelo la fantasía de Pegan a un niño (1919) [M]. Con tus aclaraciones, el eje cambia: no se trata de repartir las tres fases por igual, sino de tomar lo que importa de cada una.

- El niño solo recuerda la fase 3 [A].
- La fase 1 es teorizada por Freud y no tiene objeto propio en el modelo [A]. El punto de partida del circuito es el núcleo de la fantasía.
- La fase 2 es la fundamental. Se construye en el análisis y nunca se recuerda [A]. En términos de Lacan, es el fantasma. Freud la llama la más importante y grávida en consecuencias [VW, por referencias secundarias].
- Una construcción certera rinde lo mismo que un recuerdo recuperado (Construcciones en el análisis, 1937) [VW, por referencias secundarias].

**Verificado en Freud (1919).** La fase 2 nunca se recuerda y es una construcción del análisis; la fase 3 es la fase consciente. Sobre la fase 1, Freud duda de si es fantasía o recuerdo de hechos presenciados, y una fuente secundaria dice que se recuerda conscientemente. Por eso «solo se recuerda la fase 3» es una simplificación; el modelo no cambia, porque la fase 1 no tiene objeto propio.

## Correspondencia con el modelo

| **Fase de la fantasía** | **Objeto del modelo** | **Estado** |
| Fase 3 (lo único recordado) | La salida observable y(t) por la cúspide: la voz | Propuesta [P], a confirmar |
| Fase 2 (fundamental, fantasma) | Marca primaria n y los circuitos de las pulsiones parciales que la rodean | Decidido por vos |
| Fase 1 (teorizada por Freud) | Sin objeto propio; el punto de partida es n | Decidido por vos |

## Pulsiones parciales y axioma del fantasma

**Definición 13 (pulsiones parciales).** Sea K = {oral, anal, escópica, invocante} el conjunto de pulsiones parciales (Lacan, de memoria [M]; extensible, es tu «etc.»). Cada pulsión k tiene su circuito, y en el entorno de n el modelo de la Definición 5 se repite con parámetros propios:

ṙ = −α_{k} (r − δ_{k}), φ̇ = ω_{k}, k ∈ K, δ_{k} ≥ δ

Cada trayectoria converge al círculo C_{k} de radio δ_{k}. Los cuatro son ciclos límite concéntricos alrededor de n, todos con índice de giro ±1, y por eso homotópicos entre sí en Ω. En 3D, los cuatro están en la clase generadora de π_{1}(M) ≅ ℤ.

**Axioma 11 (fantasma).** Existe una única marca primaria n. Todas las pulsiones parciales circulan alrededor de ella y repiten su recorrido: n es el punto común de la repetición, y los cuatro circuitos son la misma repetición en registros distintos. Confirmado por vos: las pulsiones rodean al fantasma, de acuerdo con el axioma 5.

**Hipótesis: la voz como huella de la repetición [P].** La voz es el objeto de la pulsión invocante y sale por la cúspide c. Si la salida y(t) está acoplada al circuito invocante, hereda su período:

y(t) = y_{0}(t) + A cos(ω_{inv} t + θ_{0}) + …

Predicción contrastable: la repetición de la fantasía se oye como periodicidad en lo que el paciente dice. Las otras pulsiones (oral, anal, escópica) no tienen puerto propio en el modelo y se observan solo de forma indirecta.

**Proposición 4 (borrador).** La cirugía de la Definición 12 sobre marcas recuperables no modifica ninguno de los C_{k}, por el mismo argumento de la Proposición 3.

## Marcas de memoria S–I (axioma 12)

**Definición 14 (marcas S–I, memoria).** Además de las marcas VR, sea W = {w_{1}, …, w_{m}} un conjunto de marcas de memoria en la región Ω, cada una un par w_{j} = (s_{j}, ι_{j}): una marca simbólica s_{j} y una marca imaginaria ι_{j}, atadas entre sí (la imaginaria está unida a la simbólica por una ligadura b_{j} > 0). Las marcas S–I no son vértices de Γ: la pulsión no las recorre. La pulsión recorre solo las marcas VR [A].

Lectura freudiana propuesta [P]: s_{j} corresponde a la Wortvorstellung, ι_{j} a la Sachvorstellung, y su ligadura a la representación consciente de 1915 (Sach más Wort). Que viven en Ω se apoya en que el preconsciente está ligado a representaciones de palabra, restos de recuerdo [VT, carta 52; VW, El yo y el ello]. En Lacan, son los ejes simbólico e imaginario del esquema L [M].

**Axioma 12 (memoria S–I).** Existen marcas de memoria S–I, distintas de las marcas VR, formadas por pares atados de una marca simbólica y una imaginaria. Viven en Ω y no son recorridas por la pulsión.

## Dinámica de la memoria S–I, observabilidad y fijación (axiomas 13 y 14, definición 18)

**Decisiones tuyas [A].** Las marcas S–I se crean de a pares; algunas se retienen (quedan fijas) y otras se disuelven. De las pulsiones, la única que se ve de forma directa es la invocante, que pasa por el orificio del Horn Torus. Las otras (oral, anal, escópica) circulan por el Icc y solo se infieren.

**Nota de terminología.** «Puerto» es un término mío para el orificio del Horn Torus, el lugar por donde algo entra (lo oído) y algo sale (la voz). Es el borde B de la Definición 10.

**Definición 15 (dinámica de la memoria S–I).** Cada par w_{j} tiene una ligadura b_{j}(t) ≥ 0 y evoluciona así:

- *Creación.* Un evento E_{j} crea un par nuevo, con b_{j} = b_{0} m_{j}. Símbolo e imagen aparecen juntos.
- *Evolución entre eventos.* db_{j}/dt = −λ_{j} b_{j}, con λ_{j} ≥ 0. Si λ_{j} = 0 el par queda fijo: se retiene.
- *Refuerzo.* Cuando un evento reactiva el par, la ligadura salta: b_{j}(t^{+}) = b_{j}(t^{−}) + β κ_{ij} m_{j}.
- *Disolución.* Si b_{j} < b_{min}, el par desaparece: las dos marcas se disuelven juntas.

db_{j}/dt = −λ_{j} b_{j} (entre eventos), b_{j}(t^{+}) = b_{j}(t^{−}) + β κ_{ij} m_{j}, se disuelve si b_{j} < b_{min}

Contraste con el axioma 8: las cargas a_{i} de las marcas VR no decaen, mientras que las ligaduras b_{j} de las marcas S–I sí pueden. El olvido es propio de lo preconsciente y consciente, y el inconsciente es atemporal. Fuente: [P]; la memoria como facilitación (Bahnung) [VT].

**Definición 16 (orificio y observabilidad).** Solo el circuito invocante atraviesa el orificio: C_{inv} entra por B_{+} (lo oído) y sale por B_{−} (lo vocalizado), y los circuitos oral, anal y escópico no cortan a B.

**Axioma 13 (observabilidad).** La única pulsión observable de forma directa es la invocante, a través de y(t). Las demás se infieren a partir del Icc.

**Decisión tuya [A].** Las marcas S–I se fijan por el efecto del Nebenmensch: se copia su efecto, lo transmite lo simbólico (S) y el sujeto lo incorpora, y queda como marca S–I. También hay recorridos de poca carga que la pulsión atraviesa y que dejan marcas débiles, pero eso importa poco.

**Definición 17 (fijación por incorporación del prójimo).** Un evento de tipo N es un evento E_{j} de la Definición 7 cuyo efecto llega por lo oído, a través de la señal u(t) del orificio, con un contenido simbólico s_{j}. El sujeto copia el efecto, lo incorpora y se crea un par w_{j} = (s_{j}, ι_{j}) según la Definición 15, con:

- λ_{j} = 0 si el par nace por incorporación de un evento de tipo N: queda fijo.
- λ_{j} > 0 en cualquier otro caso: se disuelve salvo refuerzo.

Recorridos débiles: una arista e de Γ con 0 < w(e) < θ es atravesada por la pulsión con poco flujo y puede crear un par con ligadura pequeña b_{j} = ε y λ_{j} > 0. Son marcas débiles que casi siempre se disuelven; se registran pero no se desarrollan.

**Axioma 14 (fijación por el Nebenmensch).** Las marcas S–I que se retienen son las que provienen de la incorporación del efecto del prójimo, transmitido por lo simbólico a través de lo oído. Las demás se disuelven.

**Fuente.** Entwurf, pp. 415-416 [VT]: el complejo del prójimo se divide en una parte constante, el Ding, y otra comprensible por la memoria del propio cuerpo. En el modelo, la parte constante es la superficie S (el Real) y la parte comprendida y asimilada queda como marcas S–I.

**Observación [P].** Lo que entra por el orificio (u) es el canal por el que el prójimo fija marcas S–I, y lo que sale (y) es la voz. El oído es entrada de memoria y la voz es salida de pulsión.

**Definición 18 (circuito invocante deformado).** Los circuitos oral, anal y escópico son los círculos C_{k} de la Definición 13. El circuito invocante C_{inv} es un círculo deformado: sigue un círculo de radio δ_{inv} alrededor de n, pero hace una excursión que entra al orificio por B_{+}, cruza c y sale por B_{−} antes de volver al círculo. Es una curva cerrada en S que pasa por c. En cada vuelta entra lo oído y sale la voz.

**Proposición 5 (el circuito invocante es el generador).** π_{1}(S) ≅ ℤ está generado por el lazo que pasa por c. Por tanto C_{inv}, a diferencia de los C_{k}, no es contraíble en S. En 3D, como M = S ∪ e³ y pegar una 3-celda no cambia π_{1}, la inclusión S → M induce un isomorfismo en π_{1}, y C_{inv} representa el generador de π_{1}(M) ≅ ℤ. Lectura [P]: el circuito invocante es el circuito global e indestructible del modelo 3D, el que la cirugía admisible no puede cortar.

**Corrección de la Proposición 1.** Al estudiar C_{inv} se detectó un error: en el Horn Torus S sin más, el lazo que rodea a n es contraíble, porque S es una esfera con dos puntos identificados. Los circuitos C_{k} son no contraíbles solo en Ω, donde el orificio y las marcas aportan agujeros. Quedó corregido en el axioma 6, la Proposición 1 y la Definición 13.

**Pendiente.** Si querés reemplazar «puerto» por «orificio» en todo el texto, y verificar en Freud (1919) qué dice sobre el recuerdo de la fase 1.

## La construcción como problema inverso [P]

Como solo se observa y(t), el interior (marcas, grafo, núcleo) se reconstruye desde el borde. Criterio propuesto: una construcción es un candidato de interior (V, Γ, n); es certera si reproduce la salida y(t) observada y predice la salida ante nuevos eventos de la Definición 7. Es el análogo formal de que una construcción certera rinda lo mismo que un recuerdo recuperado.

## Decisiones pendientes para este capítulo

1. ¿Las marcas S–I se mueven con el flujo de Ricci o quedan fijas, y cómo se relacionan con lo oído (el dato u del puerto)?
2. Fijar la edición y las páginas de Pegan a un niño (1919).



> 📌 **Procedencia:** Borrador v2, Parte X (modelo 3D completo)

# Parte X. Extensión a 3D: primer modelo (versión 0)

Todo lo de esta parte es propuesta [P] salvo lo indicado. Decisión tuya: un cuello que se estrangula es primero una disociación espontánea y después una extracción analítica. La indestructibilidad global y las marcas como bulbos los propuse yo y quedan a tu aprobación.

## 10.1 El espacio M = S²×S¹

Hechos estándar [M; verificar]: M es cerrada y orientable; π_{1}(M) ≅ ℤ (el lazo que da la vuelta al factor S¹); π_{2}(M) ≅ ℤ; su recubrimiento universal es S²×ℝ; contiene la esfera esencial Σ_{0} = S²×{pt}, que no separa. Además M = (S² ∨ S¹) ∪ e³: su 2-esqueleto es homotópicamente equivalente al Horn Torus S, de modo que M se obtiene de S pegando una 3-celda. Lectura propuesta: el Real (S) es el esqueleto del espacio psíquico, y lo que no es Real es una 3-celda abierta donde se despliega el Pcc/Cc. Hacerlo compatible con el borde fijo queda pendiente.

## 10.2 Sin Icc fijo, el flujo extingue todo (cálculo)

Tómese la métrica producto S²(ρ) × S¹(ℓ). Su Ricci es (1/ρ²) por la métrica de la esfera, y cero en la dirección del círculo. El flujo ∂g/∂t = −2 Ric(g) da

d(ρ²)/dt = −2 ⇒ ρ²(t) = ρ_{0}² − 2t, T = ρ_{0}²/2

La curvatura escalar R = 2/ρ² tiende a infinito en T y M colapsa al círculo S¹. Es un caso de la extinción en tiempo finito de Colding y Minicozzi [VW], porque M no tiene sumandos asféricos. Lectura propuesta: sin un Icc fijo, la contrainvestidura colapsaría todo el espacio. Hipótesis a investigar: con el borde fijo de las marcas (curvatura media y clase conforme prescritas, Gianniotis [VW]) esa extinción podría evitarse.

## 10.3 Definiciones en 3D

**Definición 3D-1 (región Pcc/Cc).** Sea Ω = M menos las bolas abiertas B_{ρ}(p_{i}) alrededor de cada marca, B_{δ}(n) alrededor del núcleo y B_{ε}(c) alrededor del puerto. Sus fronteras son esferas. Quitar bolas de una 3-variedad no cambia π_{1}, de modo que π_{1}(Ω) ≅ ℤ.

**Definición 3D-2 (contrainvestidura).** En Ω, la métrica evoluciona por ∂g/∂t = −2 Ric(g), con estas condiciones de borde:

- en el borde de B_{ρ}(p_{i}): curvatura media H = h(a_{i}) y clase conforme fijas entre eventos;
- en el borde de B_{δ}(n): pared rígida H = 2/δ (la angustia como pared fija);
- en el borde de B_{ε}(c): dato de la voz del superyó (por definir en 3D).

**Definición 3D-3 (fantasía como estructura global).** El circuito de repetición C es un lazo cerrado en Ω a distancia al menos δ de n, cuya clase en π_{1}(M) ≅ ℤ es un generador (grado ±1). Los ciclos de Σ se realizan como curvas en Ω y tienen un grado d(γ) ∈ ℤ. En 3D, quitar un punto o una bola no crea lazos nuevos: la indestructibilidad ya no viene de rodear a n, sino de la topología global de M. El núcleo n sigue siendo el ancla de la angustia: fija la distancia δ que el circuito respeta, pero no aporta topología.

**Proposición 3D-1 (indestructibilidad global, borrador).** Mientras el flujo sea suave, la topología de M no cambia y el grado de C se conserva. Una cirugía a lo largo de una esfera que acota una bola y no corta a C no cambia π_{1}(M) ni la clase de C.

**Definición 3D-4 (disociación espontánea).** Un cuello es una región difeomorfa a S²×I con curvatura escalar que crece sin cota. Cuando un cuello σ_{i} se estrangula alrededor de una marca p_{i} en un instante T_{i}, el flujo no puede continuar. Lectura: la defensa aísla por sí sola la parte traumática (el texto inicial identificaba esto con la disociación). Nadie la decide.

**Definición 3D-5 (extracción analítica).** La cirugía en σ_{i} consiste en cortar el cuello, descartar la pieza que contiene a la marca (que queda como una componente S³ tras taparla), tapar el lado principal con un casquete estándar y continuar el flujo, que suaviza la unión. Efecto en el modelo: V ← V∖{p_{i}}, se eliminan las aristas incidentes y a_{i} ← 0. Perelman hace la cirugía a mano en los tiempos singulares [VW]. Sin ese acto el flujo no continúa más allá de T_{i}; lectura clínica propuesta: una crisis detenida.

**Proposición 3D-2 (cirugía prohibida).** Cortar M a lo largo de la esfera esencial Σ_{0} da S²×I, y tapando ambos bordes con bolas se obtiene S³, que es simplemente conexa. Esa cirugía destruiría π_{1} y, con ella, la fantasía. El axioma 10 en 3D restringe la cirugía a esferas que acotan bolas y no cortan a C.

## 10.4 La S³ como ideal inalcanzable [P]

El texto inicial decía que el homeomorfismo con la 3-esfera representaba al Yo integrado. La conjetura de Poincaré dice que toda 3-variedad cerrada y simplemente conexa es una S³ [M]. En este modelo, llegar a S³ exige matar π_{1}, es decir, cortar Σ_{0}, y eso está prohibido. El análisis puede extraer las partes traumáticas, cada una de las cuales queda como una S³ separada y descartada, pero lo que queda nunca es S³. La fantasía es lo que impide esa integración total.

## 10.5 Qué cambia respecto del modelo 2D

| **Aspecto** | **2D** | **3D (propuesta)** |
| Espacio | Superficie S (Horn Torus) | M = S²×S¹; S es su 2-esqueleto |
| Marcas | Puntos con curvatura concentrada | Bolas con frontera esférica fija |
| Núcleo n | Sumidero con ciclo límite e índice de giro | Bola con pared rígida; ancla de la distancia δ |
| Indestructibilidad | Índice de giro en S∖{n} | Clase en π_{1}(M) ≅ ℤ |
| Datos de borde | Curvatura geodésica k_{g} | Curvatura media H y clase conforme |
| Puerto de la voz | Cúspide con dos cuernos y par (K, ∂_{ν}K) | Esfera en el borde de B_{ε}(c); par por definir |
| Cura | Intervención decidida en un cuello | Disociación espontánea y extracción analítica |
| Ley de conservación | Gauss–Bonnet (Proposición 2) | Ninguna análoga; candidata: la entropía de Perelman |

## 10.6 Problemas abiertos del modelo 3D

1. ¿Pueden formarse cuellos con el borde fijo? Hay que estudiar el flujo con borde cerca de singularidades.
2. Relación entre el Horn Torus S (el 2-esqueleto) y las fronteras de Ω.
3. El puerto de la voz en 3D: se pierden los dos cuernos.
4. El costo (Aufwand) de la contrainvestidura, medido con la entropía de Perelman.
5. Existencia del flujo con borde fijo para tiempos largos; Colding y Minicozzi no cubre el caso con borde.
6. Verificar los hechos topológicos marcados [M].



> 📌 **Procedencia:** Documento maestro, integración (Capítulo 7 completo)

# INTEGRACIÓN — Capítulo 7 completo

Se incorpora el Capítulo 7 (Límites y objeciones) en la versión del 21 de octubre de 2026. Archivo: Capitulo_7_Limites_y_objeciones.docx.

*— Inicio del Capítulo 7 integrado —*

# 7.1 Propósito del capítulo

Una tesis de analogía controlada se mide también por lo que declara no sostener. Este capítulo enumera las tensiones internas del modelo, las objeciones previsibles (del lado psicoanalítico y del matemático) y el estado de cada una: resuelta, parcial, abierta o postulada. No es un apéndice de modestia: es parte del contrato del Capítulo 1 (criterio de éxito y etiquetado de incertidumbre).

Se agrupan los puntos en cuatro bloques: (A) geometría y dimensión; (B) tiempo, pulsión y defensa; (C) cirugía, fantasía y clínica; (D) fuentes, formalismo y alcance. Al final, una tabla-resumen.

# 7.2 Bloque A — Geometría y dimensión

## 7.2.1 Singularidad del Horn Torus

Objeción. El Horn Torus no es una variedad riemanniana suave en la cúspide; el flujo de Ricci no se define allí de modo estándar.

Respuesta. Se trabaja sobre la familia T_r con r < 1 o sobre S∖{c}. La cúspide c se trata como puerto (Axioma 9), no como punto regular del flujo. Estado: resuelta a nivel de modelado; la geometría fina del entorno de c (métricas cónicas, etc.) no se desarrolla.

## 7.2.2 Dimensión 2 frente a la conjetura de Poincaré (3D)

Objeción. La conjetura de Poincaré es un teorema sobre 3-variedades; el núcleo del modelo es 2D.

Respuesta. El 2D se elige por simplicidad de las ecuaciones y por Gauss–Bonnet. El modelo 3D (S²×S¹) es la extensión natural cuando se quiere estrangulamiento espontáneo e indestructibilidad por π₁. Estado: parcial — el puente está declarado; la equivalencia de lecturas clínicas 2D/3D no está demostrada.

## 7.2.3 Compatibilidad del dato de borde en c con Gianniotis

Objeción. No está probado que u = K (o el par Dirichlet–Neumann adoptado) satisfaga exactamente las hipótesis de existencia/unicidad de Gianniotis (2016) y trabajos afines.

Respuesta. Se invoca el marco de flujo con borde prescrito como garantía de que el problema está bien planteado en la literatura; la verificación fina de nuestras condiciones concretas queda abierta. Estado: abierta.

## 7.2.4 Existencia a tiempos largos con borde fijo (3D)

Objeción. Aunque exista el flujo local con borde, no se demuestra existencia global ni se controla la formación de cuellos con las paredes kg = 1/δ y H = h(a_i).

Respuesta. El modelo no pretende un teorema de existencia global; usa el flujo como analogía de la defensa y la cirugía como acto. Estado: abierta (matemática); no bloquea el diccionario.

# 7.3 Bloque B — Tiempo, pulsión y defensa

## 7.3.1 Atemporalidad del Icc frente al tiempo del flujo

Objeción. ¿Cómo puede haber un objeto atemporal dentro de un modelo con EDP temporal?

Respuesta. Axioma 8 corregido: atemporal es la estructura (marcas, Γ, n); el tiempo t del flujo de Ricci es solo el de la contrainvestidura en Ω. La pulsión es dinámica (Definición 4 corregida), no la estructura. Estado: resuelta a nivel axiomático.

## 7.3.2 Repetición (ciclos) frente a monotonicidad de Perelman

Objeción. Perelman demuestra que el flujo, módulo difeomorfismos y escala, no tiene órbitas periódicas no triviales; la clínica insiste en la compulsión de repetición.

Respuesta. Axioma de método M3: dos niveles de dinámica. Ciclos de la pulsión sobre S (o clase en π₁) ≠ trayectorias periódicas en el espacio de métricas. Estado: resuelta por separación de niveles; no es un teorema que «unifique» ambos, es una distinción declarada.

## 7.3.3 Modelo mínimo de Q incompleto

Objeción. La Definición 4 anuncia un esquema dQ_i/dt = −∑ L^θ_ij Q_j + s_i(t) pero no lo desarrolla ni lo acopla al flujo de Ricci.

Respuesta. Decisión explícita de posponer el modelo completo de Q; se fija el estatuto (flujo dinámico, no marca atemporal). Estado: parcial / pospuesto.

## 7.3.4 Forma de h(a_i) y de g en Nachträglichkeit

Objeción. Las funciones que ligan carga a curvatura geodésica de borde (h) y la ganancia g ≥ 1 del salto no están determinadas.

Respuesta. Se postula existencia de h creciente y de g ≥ 1; la forma concreta es libre mientras preserve la lógica cualitativa (más carga → borde más rígido; posterioridad intensifica). Estado: postulada.

# 7.4 Bloque C — Cirugía, fantasía y clínica

## 7.4.1 Cirugía en 2D no cambia la topología global

Objeción. En 2D, extraer discos y tapar con casquetes no reproduce el cambio topológico rico de la cirugía de Perelman en 3D.

Respuesta. En 2D la cirugía es intervención decidida sobre marcas de V_T; la topología relevante para la fantasía es el índice de giro alrededor de n, que se preserva (Proposición 3). En 3D el estrangulamiento puede ser espontáneo. Estado: aceptada como límite del 2D; motivó la extensión 3D.

## 7.4.2 Regla de reorganización de aristas tras cirugía

Objeción. Al eliminar un vértice p_i, ¿cómo se redefinen las aristas de Γ?

Respuesta. Falta una regla explícita (unión de vecinos, redistribución de pesos, etc.). El atractor C_δ persiste; los ciclos que pasaban por p_i se rompen. Estado: abierta.

## 7.4.3 Postulado 2πδ ≥ ℓ_min

Objeción. La desigualdad que impide que la cirugía «trague» el núcleo no es un teorema.

Respuesta. Es un postulado de separación de escalas (angustia vs. cuellos operables). Estado: postulado.

## 7.4.4 Fases 1 y 2 de la fantasía como construcciones

Objeción. ¿No se pierde la clínica del trauma al insistir en que las fases 1 y 2 no son recuperables?

Respuesta. Se distingue trauma reprimido elaborable (V_T, operable) de las construcciones de la fantasía de paliza (n, C_δ). Ambas cosas existen en el modelo; no se confunden. Estado: resuelta por decisión de lectura de Freud 1919 [contrastada en Cap. 6].

## 7.4.5 Contingencia del análisis (problema inverso)

Objeción. Si recuperar el interior desde y(t) puede no ser único, el modelo ¿no vacía la pretensión de verdad de la construcción analítica?

Respuesta. Axioma de método M6: la contingencia se formaliza, no se niega. Una construcción es un candidato de interior compatible con y(t); el análisis puede fallar en identificar el circuito dominante. Estado: resuelta como límite declarado, no como defecto oculto.

## 7.4.6 Transferencia y segunda tópica no modeladas

Objeción. Faltan la transferencia y el ello/yo/superyó como regiones.

Respuesta. Exclusiones del Capítulo 1. El superyó entra solo vía puerto c (voz/oído). Estado: exclusión deliberada.

# 7.5 Bloque D — Fuentes, formalismo y alcance

## 7.5.1 Citas marcadas [M]

Objeción. Atemporalidad (1915), Gegenbesetzung, superyó–oído (1923), texto exacto de Pegan a un niño (1919) no están todas verificadas página a página en la edición definitiva.

Respuesta. Etiquetado [M] transparente; anclas [VT] en Imago para Entwurf y cartas. Estado: pendiente de verificación final.

## 7.5.2 Originalidad y falta de tradición «Ricci freudiano»

Objeción. Sin literatura previa del cruce, cada paso carece de red de citas afines.

Respuesta. Asumido en Cap. 1: la carga de rigor es mayor; el diccionario debe defenderse punto a punto. Estado: condición de trabajo, no error.

## 7.5.3 Riesgo de analogía desbocada

Objeción. Se lee en la geometría lo que ya se puso en la interpretación.

Respuesta. Mitigado por etiquetas [P]/[A], revisión de consistencia (problemas A–F) y este capítulo de límites. No eliminado del todo. Estado: riesgo residual declarado.

## 7.5.4 El modelo no predice clínica ni se implementa numéricamente

Objeción. ¿De qué sirve un modelo que no genera predicciones testables ni simulaciones?

Respuesta. El criterio de éxito del Cap. 1 es coherencia del diccionario, fidelidad a fuentes y proposiciones internas — no predicción epidemiológica ni código. Estado: alcance deliberado.

# 7.6 Tabla-resumen

- A1 Horn Torus singular: Resuelta (T_r / S∖{c})
- A2 Dimensión 2 vs 3: Parcial (extensión 3D)
- A3 Borde c vs Gianniotis: Abierta
- A4 Existencia global 3D con borde: Abierta
- B1 Atemporalidad vs flujo: Resuelta (Ax. 8 corregido)
- B2 Repetición vs monotonicidad: Resuelta (dos niveles)
- B3 Modelo de Q: Pospuesto
- B4 Forma de h y g: Postulada
- C1 Cirugía 2D y topología: Límite 2D aceptado
- C2 Reorganización de aristas: Abierta
- C3 2πδ ≥ ℓ_min: Postulado
- C4 Fases 1–2 construcciones: Resuelta (Cap. 6)
- C5 Problema inverso / contingencia: Resuelta como límite
- C6 Transferencia / 2.ª tópica: Exclusión deliberada
- D1 Citas [M]: Pendiente
- D2 Sin tradición previa: Condición asumida
- D3 Analogía desbocada: Riesgo residual
- D4 Sin predicción numérica: Alcance deliberado

# 7.7 Consecuencias para el resto de la tesis

Las tensiones resueltas (atemporalidad, niveles de dinámica, fases de la fantasía, contingencia) refuerzan el núcleo del Capítulo 5. Las abiertas (borde de Gianniotis, reorganización de aristas, Q, citas [M]) no invalidan el diccionario; acotan lo que aún no se afirma. El Capítulo 8 debe recoger esta frontera: qué se sostuvo, qué quedó abierto, qué se excluyó de propósito.

# 7.8 Cierre

El modelo no es una teoría cerrada del aparato psíquico. Es un sistema de axiomas, definiciones y proposiciones con una lista explícita de fallas y de tareas. Quien objete un punto debería poder señalar la fila de la tabla de la §7.6; quien lo defienda, el mismo mapa.

*— Fin del Capítulo 7 —*

*— Fin de la integración del Capítulo 7 —*



> 📌 **Procedencia:** Documento maestro, integración (Capítulo 8 completo)

# INTEGRACIÓN — Capítulo 8 completo

Se incorpora el Capítulo 8 (Conclusiones) en la versión del 21 de octubre de 2026. Archivo: Capitulo_8_Conclusiones.docx.

*— Inicio del Capítulo 8 integrado —*

Qué se sostuvo, qué quedó abierto y qué se excluyó de propósito

# 8.1 Retorno a la pregunta inicial

La pregunta que abrió la tesis era si es posible formalizar, por analogía controlada, aspectos de la metapsicología freudiana con herramientas de la geometría del flujo de Ricci y de la topología de Poincaré, sin pretender que la psique «sea» una variedad ni que el análisis «sea» una cirugía de Perelman.

La respuesta no es un sí o un no global. Es un sistema de diez axiomas, un conjunto de definiciones y proposiciones, un diccionario Freud–geometría, una extensión 3D y una lista explícita de límites. Ese sistema existe, es internamente coherente en los puntos revisados y declara dónde no alcanza.

# 8.2 Qué se sostuvo

## 8.2.1 El diccionario

Se construyó un diccionario que traduce: Ding → superficie S; Vorstellungsrepräsentanz → marcas con carga; Bahnung → pesos del grafo Γ; pulsión → flujo dinámico sobre Γ_θ (no atemporal); núcleo de la fantasía → n + ciclo límite C_δ (o clase en π₁ en 3D); contrainvestidura → flujo de Ricci en Ω con borde fijo; Nachträglichkeit → saltos de carga; voz/oído → puerto c; trauma recuperable → marcas separables de V_T; cura → cirugía solo sobre V_T.

Las correcciones al Axioma 8 y a la Definición 4 fijaron una distinción que el trabajo no puede perder: la estructura del Icc (marcas, red, núcleo) es atemporal; la pulsión y la defensa son procesos en el tiempo.

## 8.2.2 Proposiciones internas

Se argumentó que el ciclo de la fantasía es indestructible bajo flujo suave (Proposición 1); que la activación de una marca obliga a redistribuir curvatura en toda Ω por Gauss–Bonnet (Proposición 2, Aufwand); y que la cirugía admisible no altera la clase de C_δ (Proposición 3). En 3D, cortar la esfera esencial está prohibido porque destruiría π₁.

## 8.2.3 Lectura de la fantasía

Las fases 1 y 2 de «Pegan a un niño» se trataron como construcciones, no como recuerdos recuperables; la fase 3 como forma consciente observable en y(t). El trauma elaborable existe en el modelo, pero no se confunde con esas fases.

## 8.2.4 Separación de niveles

La tensión entre compulsión de repetición y monotonicidad del flujo de Perelman se resolvió declarando dos niveles de dinámica: pulsión sobre la superficie versus evolución de la métrica en el espacio de métricas. No se forzó una identificación que el formalismo no admite.

## 8.2.5 Fuentes

El ancla freudiano prioritario fue el Entwurf y las cartas a Fliess verificadas en Imago [VT], completado por 1915–1919 con marcas [M] donde faltaba verificación página a página. Del lado matemático se citaron Perelman, Colding–Minicozzi, Gianniotis y el marco de Hamilton, sin pretender reproducir las pruebas.

# 8.3 Qué quedó abierto

- Compatibilidad fina del dato de borde en c con las hipótesis de

Gianniotis.

- Existencia global del flujo con las paredes de angustia y las marcas

en 3D.

- Regla de reorganización de aristas de Γ tras cirugía.
- Forma concreta de h(a_i) y de la ganancia g de Nachträglichkeit.
- Desarrollo completo del modelo de Q y su eventual acoplamiento al

flujo de Ricci.

- Verificación definitiva de las citas [M] en ediciones Amorrortu/GW.
- Problemas específicos del modelo 3D (puerto de la voz, cuellos con

borde fijo).

Ninguno de estos puntos invalida el diccionario; todos acotan lo que aún no se afirma. El Capítulo 7 los detalla con estado (abierta, postulada, pendiente).

# 8.4 Qué se excluyó de propósito

- Ontología de la psique como variedad riemanniana.
- Modelo del cerebro o de redes neuronales contemporáneas.
- Topología lacaniana de nudos (solo esquema L mínimo y Real ≈ Ding).
- Formalización de la transferencia y de la segunda tópica como

partición de la variedad.

- Predicción clínica cuantitativa o implementación numérica del flujo.

Esas exclusiones no son olvidos: son el reverso del Axioma de método M1 (analogía, no identidad) y del criterio de éxito del Capítulo 1.

# 8.5 Contribución

La contribución, si se sostiene, es haber mostrado un camino practicable: un sistema axiomático explícito, con fuentes controladas, con proposiciones internas y con un mapa de fallas. En un campo sin tradición de «Ricci freudiano», el valor no está en cerrar el debate, sino en ofrecer un objeto que se puede criticar punto por punto —axioma por axioma, etiqueta por etiqueta.

En particular, la reformulación de trauma recuperable versus fantasía indestructible como objetos operables por cirugía versus objetos protegidos por topología (índice de giro o π₁) da forma geométrica a una distinción ya presente en Freud (lo reprimido elaborable frente a lo que solo se construye).

# 8.6 Límites de estas conclusiones

Este capítulo no añade teoremas nuevos. Resume el contrato cumplido y el no cumplido. La densidad de los Capítulos 2–4 puede aún crecer hacia el plan de 35–60 páginas; el núcleo (Caps. 5–7 y correcciones) es lo que fija el alcance teórico actual.

# 8.7 Cierre

El inconsciente freudiano, en el fragmento trabajado, admite una hospedaje geométrico parcial: marcas que no fluyen, una red que facilita, una pulsión que sí se mueve, una defensa que redistribuye curvatura bajo borde fijo, una fantasía que no se corta y un acto que solo extrae lo separable. Poincaré aporta los lazos y los ciclos; Perelman, el flujo y la cirugía; Freud, las formas que merecían esa traducción.

Lo que permanece, cuando se apaga el flujo de la defensa, no es la 3-esfera. Es un espacio con resto —con lazo, con núcleo, con marcas—. El modelo no promete la integración total. Promete un lenguaje en el que esa imposibilidad se puede enunciar sin metáfora vaga.

Ahí termina el trabajo de esta tesis y empieza el de quien quiera continuar, refutar o densificar cada flecha del diccionario.

*— Fin del Capítulo 8 —*

*— Fin de la integración del Capítulo 8 —*

Con el Capítulo 8 queda cerrado el arco de los ocho capítulos previstos. El documento maestro reúne marco, Caps. 1–8 (con distinta densidad), correcciones de Axioma 8 y Definición 4, modelo 3D y límites.



> 📌 **Procedencia:** Documento maestro, secciones XIV y apéndice de archivos del proyecto

# XIV. Próximos pasos prioritarios

- 1. Expandir Capítulo 2 a ~50 páginas (fuentes ya verificadas)
- 2. Expandir Capítulo 3 a ~35 páginas
- 3. Expandir Capítulo 4 a ~60 páginas
- 4. Redactar Capítulo 7 (límites) y Capítulo 8 (conclusiones)
- 5. Verificar citas [M] en ediciones definitivas
- 6. Unificar bibliografía y numeración final

# Apéndice — Archivos del proyecto

- Tesis_DOCUMENTO_MAESTRO.docx — este archivo
- Capitulo_1_Introduccion_y_axiomas_de_metodo.docx
- Capitulo_2_Freud_Proyecto.docx (borrador)
- Capitulo_3_Poincare.docx (borrador)
- Capitulo_4_Ricci_Perelman.docx (borrador)
- Capitulo_5_Seccion_Contrainvestidura.docx
- Capitulo_6_Pegan_a_un_nino.docx
- Modelo_3D_S2xS1.docx

*— Fin del documento maestro integrado —*



> 📌 **Procedencia:** Borrador v2, Parte XI (preguntas abiertas)

# Parte XI. Preguntas abiertas y próximos pasos

## 11.1 Para vos

1. Aprobar o corregir las propuestas del modelo 3D (indestructibilidad global, marcas como bulbos) y elegir el próximo frente: el capítulo 6.
2. Decidir cómo entran S e I (esquema L) en el modelo.
3. Aclarar la frase «el axioma que lo comanda»: se interpretó como el circuito dominante, de mayor flujo sostenido.
4. Retomar el modelo de Q cuando quieras (Definición 4 y consecuencia del axioma 7).
5. Indicar las ediciones de Freud con las que querés citar (Amorrortu, Standard, GW).

## 11.2 Para mí

- Verificar las citas marcadas [M] contra fuentes antes de la redacción final.
- Completar la referencia del artículo de Metapsychologica y los autores de arXiv:1209.2386.
- Redactar los capítulos 2, 3 y 4 con el material de las Partes III, IV y VI.
- Hacer la prueba de lectura (etapa 3 del flujo de coautoría) con un lector que no conozca la conversación.



> 📌 **Procedencia:** Borrador v2, apéndices A–D

# Apéndice A. Glosario alemán–español

| **Término alemán** | **Traducción usada** | **Uso en la tesis** |
| Vorstellung | representación | Concepto base. |
| Vorstellungsrepräsentanz | representante de la representación | Marca VR (axioma 2). |
| Sachvorstellung / Wortvorstellung | representación de cosa / de palabra | Cap. 2; Vb ligado a la palabra. |
| Niederschrift | transcripción, inscripción | Carta 52 (cap. 2). |
| Bahnung | facilitación | Pesos w de Σ. |
| Kontaktschranke | barrera de contacto | Noción de contacto en la cúspide. |
| Besetzung | investidura, carga | Carga a_{i} de las marcas. |
| Seitenbesetzung | investidura lateral | Antecedente de la contrainvestidura. |
| Gegenbesetzung | contrainvestidura | Flujo de Ricci sobre Ω. |
| Nachträglichkeit | posterioridad, acción diferida | Axioma 7. |
| Nebenmensch | prójimo | Origen del Ding. |
| Ding | cosa | Superficie S (Real). |
| Trägheitsprinzip | principio de inercia neuronal | Cap. 2. |
| Konstanzprinzip | principio de constancia | Definición 4. |
| Triebfeder | resorte pulsional (estímulo endógeno) | Término s en la Definición 4. |
| Urverdrängung | represión primaria | Marca primaria n. |
| Schutzbau | construcción protectora | Carta del 2.5.1897: fantasías. |
| Agieren | actuar, repetir en acto | Ciclo C_{δ}. |

# Apéndice B. Notación matemática

| **Símbolo** | **Significado** |
| S, c | Horn Torus (superficie) y su cúspide. |
| T_{r} | Toro de revolución de radio mayor 1 y radio menor r (r = 1 da S). |
| V, V_{T}, n | Conjunto de marcas, marcas traumáticas recuperables y marca primaria. |
| a_{i}, σ_{i}, a* | Carga de la marca p_{i}, su estado (latente o activo) y el umbral de activación. |
| Γ = (V, E, w), Γ_{θ} | Grafo Σ con pesos de facilitación y su subgrafo de aristas con w ≥ θ. |
| Q, s, L_{θ} | Cantidad en las marcas, estímulo endógeno y laplaciano del subgrafo Γ_{θ}. |
| δ, α, ω, C_{δ} | Radio de angustia, tasa radial, velocidad angular y ciclo límite alrededor de n. |
| w(γ, n) | Índice de giro de la curva γ alrededor de n. |
| g, K, R | Métrica, curvatura de Gauss y curvatura escalar (R = 2K en dimensión 2). |
| Ω | Región Pcc/Cc: S sin los discos de las marcas, sin el del núcleo y sin la cúspide. |
| k_{g}, h, ρ | Curvatura geodésica del borde, función creciente de la carga y radio de los discos de las marcas. |
| B = B_{+} ∪ B_{−} | Borde de un entorno de c, con una circunferencia por cuerno. |
| u, y | Dato de Dirichlet K en B (lo oído) y flujo normal de K en B (lo vocalizado). |
| κ_{ij}, m_{j}, g(t) | Asociación, magnitud del evento y ganancia de maduración. |
| σ_{i}, D_{i}, ℓ_{min} | Curva del cuello, disco que acota y longitud máxima de un cuello. |
| M, Σ_{0}, d(γ) | Espacio S²×S¹, esfera esencial S²×{pt} y grado de una curva en π_{1}(M) ≅ ℤ (3D). |
| H | Curvatura media del borde (3D). |
| W, s_{j}, ι_{j}, b_{j} | Marcas de memoria S–I, su componente simbólica, su componente imaginaria y la ligadura entre ambas. |
| χ | Característica de Euler. |
| π_{1} | Grupo fundamental. |

# Apéndice C. Ideas de trabajo propias del proceso [P]

Ideas que surgieron durante el trabajo. No son fuentes; son hipótesis para evaluar.

1. **Inercia y gradiente.** El principio de inercia neuronal (tender a descargar Q) se parece a un flujo gradiente que desciende un funcional. Perelman construye un funcional monótono para el flujo de Ricci.
2. **Repetición frente a ausencia de ciclos.** Perelman prueba que su flujo no tiene órbitas periódicas no triviales, y Freud postula una compulsión de repetición que sí cicla. Esa tensión puede ser el núcleo de la tesis. Se resuelve declarando dos niveles de dinámica.
3. **Contacto.** La cúspide es el punto donde la superficie se toca a sí misma, y las barreras de contacto del Entwurf aparecen unas 41 veces en el texto alemán.
4. **Soluciones antiguas.** Perelman estudia soluciones definidas para todo tiempo negativo. Podrían servir como modelo matemático de lo atemporal. No se desarrolló.
5. **El análisis como problema inverso.** El analista solo accede a la voz y construye el interior, como el problema de recuperar el interior a partir del borde.
6. **Conservación de curvatura.** Por Gauss–Bonnet, la defensa no destruye curvatura, solo la redistribuye. Una marca que se activa obliga a reorganizarla.
7. **La S³ como ideal inalcanzable.** En 3D, llegar a la 3-esfera (el Yo integrado del texto inicial) exige matar el grupo fundamental, y eso destruiría la fantasía. El análisis puede extraer partes traumáticas, pero no integrar todo.
8. **Extinción sin Icc.** Con la métrica producto en S²×S¹, el radio de la esfera cumple ρ² = ρ_{0}² − 2t y el espacio colapsa en tiempo finito. El Icc fijo, como borde, podría evitarlo.
9. **Poincaré tres veces.** Poincaré aparece como autor de la conjetura, de la psicología de la invención (trabajo inconsciente) y de los ciclos límite.

# Apéndice D. Cronología del trabajo

| **Paso** | **Qué se hizo** |
| 1 | Entrega inicial: tres archivos (afasia, resumen de orígenes, texto del Horn Torus) y el pedido de más fuentes para recrear una teoría freudiana, con algo de Lacan, desde Poincaré y Perelman. Se activó el flujo de coautoría. |
| 2 | Primera evaluación del texto del Horn Torus: qué es real y qué no tiene fuente. Se enviaron diez preguntas de contexto. |
| 3 | Tus respuestas (tesis, psicoanalistas, analogía matemática, fuentes primarias y axiomas propios, 300 hojas en seis meses). Primera ronda de búsqueda de fuentes. Propuesta de estructura en ocho capítulos. |
| 4 | Subida del texto alemán completo. Verificación de los pasajes clave y corrección de la cita de Sach y Wort. |
| 5 | Tu volcado conceptual: VR, pulsión, S e I, Σ, circuitos, fantasía, agujero del Horn Torus, trauma, Icc atemporal. |
| 6 | Mapa del modelo y tensiones. Preguntas de precisión y tus respuestas. Propuesta de diez axiomas y decisión de trabajar en 2D. |
| 7 | Se creó el esqueleto de la tesis y se redactó el capítulo 5 por secciones: definiciones 1 a 4; núcleo como sumidero e indestructibilidad; Nachträglichkeit y atemporalidad; flujo de Ricci como contrainvestidura; cúspide como puerto de oído y voz; trauma, síntoma, fantasía y cura. |
| 8 | Releída de consistencia de los diez axiomas: se detectaron los problemas A a F y se resolvieron con tus decisiones (la fantasía como marca primaria, borde rígido, par de Dirichlet a Neumann, variante A). |
| 9 | Primera compilación del trabajo en un documento Word. |
| 10 | Paso a 3D. Se detectó que en 3D quitar un punto no crea lazos no contraíbles, y se propuso la indestructibilidad global por π_{1}(S²×S¹) ≅ ℤ. Decisión tuya: el estrangulamiento del cuello es primero disociación espontánea y después extracción analítica. Se redactó el primer modelo 3D. |


*— Fin del documento unificado —*
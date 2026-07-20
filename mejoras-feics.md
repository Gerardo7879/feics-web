# Mejoras y contenido nuevo — Sitio FEICS

Este archivo contiene TODO el contenido nuevo que debe incorporarse a la landing,
ya redactado y listo para usar. Los datos provienen de documentos oficiales del
foro. Solo lo marcado como `[PENDIENTE: ...]` queda por confirmar.

**Nombre oficial de esta edición:** IV Foro Estudiantil de Investigación en
Ciencias de la Salud (IV FEICS-UG) · FEICS 2026
**Fecha del evento:** 26 de noviembre de 2026 · Campus León, Universidad de Guanajuato
**Correo oficial:** feicsug@gmail.com

---

## A. Recursos gráficos (carpeta `public/`)

| Archivo | Uso |
|---|---|
| `logo-feics-completo.jpeg` | Logo FEICS con wordmark — hero y footer |
| `logo-feics-f.jpeg` | Isotipo "F" — favicon, navbar, marca de agua decorativa |
| `logo-ug.jpeg` | Escudo UG dorado — footer y sección institucional |
| `logo-ug-campus-leon.jpeg` | Escudo + "Campus León \| División de Ciencias de la Salud" — footer |
| `feics-2025-01.jpeg` | Foto: estudiantes junto a carteles científicos |
| `feics-2025-02.jpeg` | Foto: presentación de cartel con público |

Notas de implementación:
- Convertir los JPEG de logos a PNG con transparencia o SVG si es posible; el
  fondo blanco/gris se nota sobre el fondo crema. Como mínimo, recortar márgenes.
- Optimizar y servir las fotos en WebP con `<Image />` de Astro, con `alt`
  descriptivo y `loading="lazy"`.
- Falta el logo del **Cuerpo Académico en Biomedicina Traslacional (CABMT)**:
  dejar un espacio reservado en el footer con comentario `[PENDIENTE: logo CABMT]`.

---

## B. Sección: Acerca de FEICS (ampliar la existente)

**Historia**

La idea de crear el Foro Estudiantil en Ciencias de la Salud surge en noviembre
de 2023, impulsada por miembros del Cuerpo Académico en Biomedicina Traslacional
(CABMT) y del posgrado de la Maestría en Investigación Clínica (MIC), a partir de
la necesidad de abrir un espacio interactivo de vinculación entre la comunidad
estudiantil y académica de la Universidad de Guanajuato, Campus León, junto con
instituciones externas del ámbito de la salud y la sociedad en general.

El foro busca presentar a los alumnos las líneas de investigación vigentes del
cuerpo docente, fomentar la colaboración y el intercambio de ideas, alentar el
interés de los estudiantes por involucrarse en futuros protocolos científicos,
impulsar el acceso al conocimiento e incentivar vocaciones científicas.

**Objetivo general**

Brindar un espacio de comunicación entre estudiantes y profesores investigadores
de la Universidad de Guanajuato y de instituciones externas. Esta actividad
facilita el acercamiento e interacción de las y los estudiantes de pregrado con
expertos en investigación en el área de la salud, regionales y nacionales,
promoviendo el conocimiento de las líneas de investigación vigentes para que en
un futuro se involucren en el desarrollo de protocolos científicos.

**Bloque destacado (badge o tarjeta):** Evento gratuito · Sin costo de
inscripción ni de participación.

---

## C. Sección nueva: Comité Organizador

Título: **Comité Organizador**
Intro: "El FEICS es organizado por miembros del Cuerpo Académico en Biomedicina
Traslacional (CABMT) y de la Maestría en Investigación Clínica (MIC)."

| Nombre | Cargo |
|---|---|
| Dr. Marco Antonio Hernández Luna | Presidente |
| Dr. Sergio López Briones | Secretario |
| Dra. Esmeralda Rodríguez Miranda | Vocal |
| Dra. Mayra Remedios Montecillo Aguado | Vocal |
| Dra. Rebeca Monroy Torres | Vocal |
| Dr. Benigno Linares Segovia | Vocal |
| Dr. José A. de Jesús Álvarez Canales | Vocal |

Diseño sugerido: tarjetas limpias en grid (Presidente y Secretario destacados
arriba, vocales en grid de 2-3 columnas). Sin fotos por ahora; usar la inicial o
el isotipo "F" como avatar en marino/dorado.

Al final de la sección, agregar el bloque:
**Comité Estudiantil** — "Próximamente." `[PENDIENTE: integrantes por definir y
aprobar]`. Mantener el mismo diseño de "Próximamente" ya usado en el sitio.

---

## D. Ejes temáticos (actualizar)

Mantener los seis existentes y AGREGAR uno nuevo:

7. **Divulgación científica**
   Comunicación del conocimiento en salud hacia la comunidad: estrategias,
   materiales y proyectos que acercan la ciencia a públicos no especializados.

---

## E. Convocatoria / Trabajos Libres (REESCRIBIR COMPLETA)

Título: **Lineamientos para el envío de trabajos libres**

Intro: El IV FEICS-UG invita a estudiantes y profesionales de las licenciaturas
en Medicina, Nutrición, Enfermería, Ciencias Biomédicas y CAFYD, entre otras
áreas de la salud, a enviar sus trabajos libres. Todos los trabajos aceptados se
presentarán en modalidad de **cartel científico con defensa oral**.

> IMPORTANTE: ya NO existe la modalidad de "presentación oral" como categoría
> aparte. La única modalidad es cartel científico con defensa oral.
> `[PENDIENTE: confirmar con el Dr. Marco]`

### 1. Modalidades

- **Trabajos de investigación:** básicos o clínicos, con objetivos, metodología y
  resultados. Se aceptan protocolos de investigación en curso.
- **Reportes de caso clínico:** de interés para las ciencias de la salud, con una
  breve revisión de la literatura.

### 2. Requisitos del resumen

- Idioma español, en documento Word (.docx), fuente Arial 11, alineación justificada.
- Extensión máxima: 400 palabras (sin contar título, autores y adscripción).
- Título en negritas, máximo 20 palabras, sin abreviaturas.
- Máximo 5 autores, en formato "Apellidos, Nombre(s)", indicando la adscripción de
  cada autor (departamento o licenciatura e institución) y el correo electrónico
  del autor de correspondencia.
- Estructura con encabezados en negritas: Introducción, Objetivos, Metodología
  (o Descripción del caso), Resultados y Discusión, y Conclusiones.
- Sin faltas de ortografía ni de gramática; los errores graves o recurrentes
  podrán ser motivo de no aceptación.
- No mencionar la institución ni datos que identifiquen a los autores en el cuerpo
  del resumen: **la evaluación es anónima**.
- En investigación clínica o en modelos animales, incluir el número de aprobación
  del Comité de Ética en Investigación correspondiente.

### 3. Envío y dictamen

- Enviar el resumen al correo **feicsug@gmail.com** antes del **30 de octubre**,
  23:59 horas. Se confirmará la recepción con un número de registro.
- Dos revisores del Comité Científico evalúan cada resumen de forma independiente
  y anónima, conforme a la rúbrica oficial (máximo 30 puntos).
- Dictamen: el trabajo que obtenga 70% o más (21.0 puntos o más en promedio) será
  **Aceptado** para presentación oral de cartel científico. El dictamen es
  definitivo y se notificará por correo al autor de correspondencia.

### 4. Del cartel científico

- Medidas: **90 × 120 cm**, orientación vertical, legible a un metro de distancia.
- Título: en negritas y mayúsculas; máximo 20 palabras.
- Autores: apellidos seguidos del nombre(s); adscripción al pie.
- Secciones: Introducción, Objetivos, Metodología / Descripción del caso,
  Resultados y Discusión, Conclusiones y Referencias (formato Vancouver).
- El contenido del cartel debe corresponder al resumen aceptado.

### 5. Presentación oral

- Podrán presentar y defender el trabajo hasta 4 autores; se recomienda que sean 2.
  Todos los autores podrán estar presentes.
- Presentación: 5 a 10 minutos cronometrados. Réplica: 3 a 5 minutos de preguntas
  del jurado.
- La fecha y hora de presentación se notificarán con anticipación al autor de
  correspondencia.

### 6. Premiación y consideraciones finales

- Se premiarán los tres primeros lugares de cada categoría según la calificación
  final del jurado.
- No se aceptarán trabajos ya publicados o aceptados para publicación, ni enviados
  fuera del plazo o por un medio distinto al oficial.
- El plagio o la fabricación de datos descalifica el trabajo de forma inmediata.
  El uso de inteligencia artificial en la redacción debe ser declarado.
- Al enviar su resumen, los autores aceptan las reglas descritas en estos
  lineamientos.

**CTA de la sección:** botón "Enviar mi trabajo a feicsug@gmail.com"
(enlace `mailto:feicsug@gmail.com`) + botón secundario "Descargar lineamientos
(PDF)" `[PENDIENTE: subir el PDF a public/]`.

---

## F. Sección nueva: Participación y costos

Título: **Participación**

- **Costo:** El foro es **gratuito**, tanto para asistentes como para
  participantes. No hay cuota de inscripción.
- **Constancias / material:** A los participantes se les entrega gafete.
  `[PENDIENTE: confirmar con el Dr. Marco si hay constancia además del gafete]`
- **A quién va dirigido:** estudiantes y profesionales de Medicina, Nutrición,
  Enfermería, Ciencias Biomédicas, CAFYD y áreas afines de la salud.

Diseño sugerido: tres tarjetas con ícono, la de "Gratuito" destacada en dorado.

---

## G. Preguntas frecuentes (sección nueva, acordeón)

1. **¿Tiene costo asistir o participar?** No. El foro es completamente gratuito.
2. **¿Quién puede enviar trabajos?** Estudiantes y profesionales de licenciaturas
   en Medicina, Nutrición, Enfermería, Ciencias Biomédicas, CAFYD y otras áreas
   de la salud.
3. **¿Cuál es la fecha límite?** 30 de octubre a las 23:59 horas.
4. **¿En qué modalidad se presenta?** Cartel científico con defensa oral.
5. **¿Cuánto dura la presentación?** De 5 a 10 minutos, más 3 a 5 minutos de
   preguntas del jurado.
6. **¿Cuántos autores puede tener un trabajo?** Máximo 5 autores; hasta 4 pueden
   presentar y defender el cartel.
7. **¿Se puede enviar un protocolo en curso?** Sí, se aceptan protocolos de
   investigación en curso.
8. **¿Cómo sé si mi trabajo fue aceptado?** Se notifica por correo al autor de
   correspondencia. Se acepta con 21.0 puntos o más de 30.

---

## H. Imágenes por sección (petición de la retroalimentación)

La página se ve "plana": cada sección debe llevar apoyo visual.

- **Hero:** isotipo "F" grande como marca de agua sutil (opacidad baja) + líneas
  doradas onduladas.
- **Acerca de FEICS:** `feics-2025-02.jpeg` en tarjeta con esquinas suaves y un
  marco/acento dorado.
- **Ejes temáticos:** íconos de línea (marino, acento dorado) por cada eje.
- **Convocatoria:** `feics-2025-01.jpeg` a un costado o como banda de fondo con
  overlay marino al 85% y texto en blanco.
- **Comité:** avatares con el isotipo "F" o iniciales; fondo crema.
- **Galería:** las dos fotos de 2025 en grid con lightbox, listo para agregar más.
- **Sede:** mapa embebido del Campus León.
- Usar las líneas onduladas doradas como separador entre secciones para dar ritmo
  sin saturar. Mantener el estilo limpio: nada de sombras pesadas ni degradados.

---

## I. Estado de pendientes (mostrar como "Próximamente")

- Ponentes / invitados.
- Comité estudiantil.
- Programa detallado con horarios.
- Enlace del Google Form de registro (mientras tanto, el CTA de registro puede
  apuntar al correo feicsug@gmail.com).
- Logo del CABMT.
- Sede exacta (edificio/aula) dentro del Campus León.

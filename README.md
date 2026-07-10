# FEICS — Foro Estudiantil de Investigación en Ciencias de la Salud

Landing page de una sola página para el FEICS, de la División de Ciencias de la
Salud, Departamento de Medicina y Nutrición, Universidad de Guanajuato, Campus León.

Construida con **Astro** + **Tailwind CSS**, sin backend. El registro se hace
mediante un enlace externo a un Google Form.

## 🚀 Correr el proyecto

```sh
npm install      # instalar dependencias (solo la primera vez)
npm run dev      # servidor de desarrollo en http://localhost:4321
npm run build    # genera el sitio estático en ./dist/
npm run preview  # previsualiza el build de producción
```

## ✏️ Qué editar y dónde

Casi todo el contenido editable está centralizado o marcado con `[EDITAR]`.

### 1. Enlaces de los Google Forms

Edita `src/config.ts`:

```ts
formUrl: '...',         // registro de asistentes (botones Registro / Registrarme)
trabajosFormUrl: '...', // envío de trabajos libres (botón Enviar mi trabajo)
```

### 2. Fecha y sede del foro

También en `src/config.ts`:

```ts
eventDate: '[EDITAR] 00 de mes de 2026',  // fecha legible
eventDateISO: '2026-01-01',               // formato AAAA-MM-DD
venue: { name: '...', detail: '...', city: '...' },
```

### 3. Contacto y redes sociales

En `src/config.ts`: `contactEmail`, `socials.facebook`, `socials.instagram`.

### 4. Contenido de las secciones

Un componente por sección en `src/components/`:

| Archivo             | Sección                                    |
| ------------------- | ------------------------------------------ |
| `Header.astro`      | Navegación fija + botón Registro           |
| `Hero.astro`        | Portada con lema                           |
| `QueEs.astro`       | ¿Qué es FEICS? + foto                      |
| `Ejes.astro`        | Áreas de investigación (tarjetas)          |
| `Programa.astro`    | Agenda / línea de tiempo                   |
| `Ponentes.astro`    | Grid de ponentes                           |
| `Convocatoria.astro`| Cómo enviar trabajos + fecha límite        |
| `Galeria.astro`     | Galería de ediciones pasadas               |
| `SedeFecha.astro`   | Sede y fecha (lee `src/config.ts`)         |
| `Footer.astro`      | Pie institucional, escudo UG y redes       |

Busca `[EDITAR]` en el proyecto para localizar todos los placeholders de texto.

### 5. Imágenes

Los placeholders viven en `public/images/` (SVG). Reemplázalos por fotografías
reales conservando el nombre (o actualiza la ruta en el componente):

- `foro.svg` → foto del foro (sección ¿Qué es?)
- `ponente-1.svg` … `ponente-4.svg` → fotos de ponentes
- `galeria-1.svg` … `galeria-6.svg` → fotos de ediciones pasadas
- `public/og.png` → imagen para compartir en redes (1200×630)
- El escudo UG del footer es un SVG placeholder dentro de `Footer.astro`

Recuerda actualizar los textos `alt` con descripciones reales.

### 6. Identidad de marca (colores y tipografías)

Los tokens viven en `tailwind.config.mjs`: `navy`, `gold`, `gold-dark`, `cream`,
`card`, `secondary`, y las fuentes `heading` (Poppins) y `body` (Inter).

## 🌐 Desplegar

### Netlify

1. Sube el repositorio a GitHub.
2. En [netlify.com](https://app.netlify.com) → **Add new site → Import an existing project**.
3. Configuración: *Build command* `npm run build`, *Publish directory* `dist`.
4. Deploy. Cada push a la rama principal publica automáticamente.

### Vercel

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com/new) importa el repositorio.
3. Vercel detecta Astro automáticamente (build `npm run build`, salida `dist`).
4. Deploy.

> El sitio es 100 % estático, por lo que el plan gratuito de cualquiera de las
> dos plataformas es suficiente.

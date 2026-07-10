/**
 * ⚙️ CONFIGURACIÓN DEL SITIO FEICS
 * ---------------------------------------------------------------
 * Edita este archivo para actualizar los datos del evento sin
 * tocar los componentes. Todo lo marcado con [EDITAR] es placeholder.
 */

export const SITE = {
  /** Enlace de registro de asistentes (Google Form). Se abre en pestaña nueva. */
  formUrl: 'https://forms.gle/iLxb5V9kvt5J8ux17',

  /** Enlace para enviar trabajos libres / carteles (Google Form). */
  trabajosFormUrl: 'https://forms.gle/NKUF5rsk5QQndDvo7',

  /** Fecha del foro en formato legible. */
  eventDate: '26 de noviembre de 2026',

  /** Fecha en formato ISO (para SEO / datos estructurados). */
  eventDateISO: '2026-11-26',

  /** Sede del evento. */
  venue: {
    name: 'Universidad de Guanajuato, Campus León',
    detail: 'Auditorio por confirmar', // [EDITAR] edificio y dirección exacta cuando se definan
    city: 'León, Guanajuato, México',
  },

  /** Contacto y redes sociales. [EDITAR] con los enlaces reales. */
  contactEmail: 'feics@ugto.mx', // [EDITAR]
  socials: {
    facebook: 'https://www.facebook.com/PENDIENTE', // [EDITAR]
    instagram: 'https://www.instagram.com/PENDIENTE', // [EDITAR]
  },

  /** SEO */
  title: 'FEICS — Foro Estudiantil de Investigación en Ciencias de la Salud',
  description:
    'Foro Estudiantil de Investigación en Ciencias de la Salud (FEICS) de la División de Ciencias de la Salud, Departamento de Medicina y Nutrición, Universidad de Guanajuato, Campus León. Investigación. Innovación. Impacto.',
} as const;

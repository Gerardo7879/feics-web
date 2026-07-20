/**
 * ⚙️ CONFIGURACIÓN DEL SITIO FEICS
 * ---------------------------------------------------------------
 * Edita este archivo para actualizar los datos del evento sin
 * tocar los componentes. Todo lo marcado con [EDITAR] es placeholder.
 */

export const SITE = {
  /** Nombre oficial de la edición actual. */
  eventName: 'IV Foro Estudiantil de Investigación en Ciencias de la Salud',
  eventShortName: 'IV FEICS-UG',

  /** Enlace de registro de asistentes (Google Form). Se abre en pestaña nueva. */
  formUrl: 'https://forms.gle/iLxb5V9kvt5J8ux17',

  /** Fecha del foro en formato legible. */
  eventDate: '26 de noviembre de 2026',

  /** Fecha en formato ISO (para SEO / datos estructurados). */
  eventDateISO: '2026-11-26',

  /** Inicio del evento con hora y zona horaria (countdown y schema.org).
   *  08:00 corresponde al registro según el programa. */
  eventStartDateTime: '2026-11-26T08:00:00-06:00',

  /** Fecha límite para el envío de resúmenes (trabajos libres). */
  abstractDeadline: '30 de octubre',
  abstractDeadlineTime: '23:59 horas',

  /** Sede del evento. */
  venue: {
    name: 'Universidad de Guanajuato, Campus León',
    detail: 'Edificio y aula por confirmar', // [EDITAR] sede exacta cuando se defina
    city: 'León, Guanajuato, México',
    /** Mapa embebido de Google Maps para la sección "Cómo llegar". */
    mapEmbedUrl:
      'https://www.google.com/maps?q=Universidad+de+Guanajuato+Campus+Le%C3%B3n,+Le%C3%B3n,+Guanajuato&output=embed',
  },

  /** Contacto y redes sociales. [EDITAR] con los enlaces reales.
   *  Deja una red como '' (vacío) para ocultar su ícono en el footer. */
  contactEmail: 'feicsug@gmail.com',
  socials: {
    facebook: '', // [EDITAR] p. ej. 'https://www.facebook.com/feicsug'
    instagram: '', // [EDITAR] p. ej. 'https://www.instagram.com/feicsug'
  },

  /** SEO */
  title: 'IV FEICS-UG — Foro Estudiantil de Investigación en Ciencias de la Salud',
  description:
    'IV Foro Estudiantil de Investigación en Ciencias de la Salud (IV FEICS-UG) de la Universidad de Guanajuato, Campus León. 26 de noviembre de 2026. Evento gratuito. Convocatoria abierta: cartel científico con defensa oral.',
} as const;

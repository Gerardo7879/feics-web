/**
 * Tokens de identidad de marca FEICS
 * (cargado por Tailwind v4 mediante la directiva @config en src/styles/global.css)
 */
export default {
  theme: {
    extend: {
      colors: {
        /** Azul marino — color principal */
        navy: '#1b2a4d',
        /** Dorado — color de acento. `gold-dark` es una variante con
         * contraste AA para texto pequeño sobre fondos claros. */
        gold: {
          DEFAULT: '#c08a2d',
          dark: '#8a651f',
        },
        /** Crema — fondo general */
        cream: '#f5f3ef',
        /** Blanco — tarjetas */
        card: '#ffffff',
        /** Texto secundario */
        secondary: '#39466a',
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        /** Espaciado amplio para el wordmark FEICS */
        brand: '0.3em',
      },
    },
  },
};

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
         * contraste AA (≥4.5:1) para texto pequeño sobre fondos claros,
         * incluido el fondo translúcido `bg-gold/15` de los badges. */
        gold: {
          DEFAULT: '#c08a2d',
          dark: '#7a591c',
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

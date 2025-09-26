/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* primary with opacity */
        input: 'var(--color-input)', /* white */
        ring: 'var(--color-ring)', /* olive-600 */
        background: 'var(--color-background)', /* gray-50 */
        foreground: 'var(--color-foreground)', /* gray-800 */
        primary: {
          DEFAULT: 'var(--color-primary)', /* olive-600 */
          foreground: 'var(--color-primary-foreground)', /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* yellow-600 */
          foreground: 'var(--color-secondary-foreground)', /* gray-800 */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* brown-400 */
          foreground: 'var(--color-destructive-foreground)', /* gray-800 */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* amber-100 */
          foreground: 'var(--color-muted-foreground)', /* gray-600 */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* brown-600 */
          foreground: 'var(--color-accent-foreground)', /* white */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)', /* gray-800 */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* white */
          foreground: 'var(--color-card-foreground)', /* gray-800 */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* olive-700 */
          foreground: 'var(--color-success-foreground)', /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* yellow-700 */
          foreground: 'var(--color-warning-foreground)', /* gray-800 */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* brown-400 */
          foreground: 'var(--color-error-foreground)', /* gray-800 */
        },
        surface: 'var(--color-surface)', /* amber-100 */
        'liquid-gold': {
          DEFAULT: 'var(--color-liquid-gold)', /* yellow-600 */
          dark: 'var(--color-liquid-gold-dark)', /* yellow-700 */
        },
        'heritage-green': 'var(--color-heritage-green)', /* green-900 */
        'warm-cream': 'var(--color-warm-cream)', /* amber-100 */
      },
      fontFamily: {
        'heading': ['Playfair Display', 'serif'],
        'body': ['Lato', 'sans-serif'],
        'accent': ['Cinzel', 'serif'],
        'sans': ['Lato', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        'golden-xs': '8px',
        'golden-sm': '13px',
        'golden-md': '21px',
        'golden-lg': '34px',
        'golden-xl': '55px',
      },
      borderRadius: {
        'organic': '8px',
        'premium': '24px',
        'full-organic': '50px',
      },
      boxShadow: {
        'soft': '0 4px 12px rgba(112, 130, 56, 0.15)',
        'premium': '0 4px 20px rgba(112, 130, 56, 0.15), 0 8px 40px rgba(212, 160, 23, 0.1), 0 16px 60px rgba(0, 0, 0, 0.05)',
        'warm': '0 4px 20px rgba(112, 130, 56, 0.15), 0 8px 40px rgba(212, 160, 23, 0.1)',
        'glow': '0 0 20px rgba(212, 160, 23, 0.3)',
      },
      animation: {
        'liquid-gold': 'liquidGoldFlow 8s ease-in-out infinite',
        'heritage-reveal': 'heritageReveal 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'certification-rotate': 'certificationRotate 12s linear infinite',
        'purity-reveal': 'purityReveal 2s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        liquidGoldFlow: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        heritageReveal: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        certificationRotate: {
          '0%': { transform: 'rotateY(0deg)' },
          '100%': { transform: 'rotateY(360deg)' },
        },
        purityReveal: {
          '0%': { strokeDashoffset: '100' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'elastic': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      backdropBlur: {
        'organic': '20px',
      },
      zIndex: {
        'header': '50',
        'sidebar': '40',
        'modal': '100',
        'tooltip': '110',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate'),
  ],
}
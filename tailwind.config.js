/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bellano-dark': '#0a0f1f',
        'bellano-gold': '#D4AF37',
        'bellano-black': '#05070f',
      },
      fontFamily: {
        'tight': ['Inter Tight', 'sans-serif'],
        'mono': ['IBM Plex Mono', 'monospace'],
      },
      backgroundColor: {
        'glass': 'rgba(255, 255, 255, 0.01)',
        'glass-gold': 'rgba(212, 175, 55, 0.08)',
      },
      backdropFilter: {
        'blur-xl': 'blur(40px)',
        'blur-lg': 'blur(24px)',
      },
      borderColor: {
        'glass': 'rgba(255, 255, 255, 0.1)',
        'glass-gold': 'rgba(212, 175, 55, 0.3)',
      },
      animation: {
        'spin': 'spin 1s linear infinite',
        'pulse': 'pulse 2.4s ease-in-out infinite',
        'blur-fade-up': 'blurFadeUp 1s ease-out forwards',
      },
      keyframes: {
        blurFadeUp: {
          from: {
            opacity: '0',
            filter: 'blur(20px)',
            transform: 'translateY(40px)',
          },
          to: {
            opacity: '1',
            filter: 'blur(0)',
            transform: 'translateY(0)',
          },
        },
        freePop: {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.06)',
          },
        },
        hueDrift: {
          '0%, 100%': {
            opacity: '0.85',
          },
          '50%': {
            opacity: '1',
          },
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      boxShadow: {
        'gold-glow': '0 0 40px -12px rgba(212, 175, 55, 0.5)',
        'inner-gold': 'inset 0 1px 1px rgba(212, 175, 55, 0.2)',
      },
      transitionDuration: {
        '2000': '2000ms',
        '3000': '3000ms',
      },
      opacity: {
        '15': '0.15',
        '25': '0.25',
        '35': '0.35',
        '45': '0.45',
        '55': '0.55',
        '65': '0.65',
        '75': '0.75',
        '85': '0.85',
        '95': '0.95',
      },
    },
  },
  plugins: [],
  safelist: [
    // Gold accent utilities
    'text-[#D4AF37]',
    'bg-[#D4AF37]',
    'border-[#D4AF37]',
    'hover:text-[#D4AF37]',
    'hover:bg-[#D4AF37]',
    'hover:border-[#D4AF37]',
    
    // Background utilities
    'bg-[#0a0f1f]',
    'bg-[#05070f]',
    
    // Glass utilities
    'backdrop-blur-xl',
    'backdrop-blur-lg',
    'backdrop-blur-sm',
    
    // Opacity utilities
    'text-white/30',
    'text-white/40',
    'text-white/50',
    'text-white/60',
    'text-white/65',
    'text-white/70',
    'text-white/80',
    'text-white/90',
    'bg-black/20',
    'bg-black/30',
    'bg-black/40',
    'bg-black/50',
    
    // Border utilities
    'border-white/10',
    'border-[#D4AF37]/10',
    'border-[#D4AF37]/25',
    'border-[#D4AF37]/30',
    'border-[#D4AF37]/50',
    
    // Animation delays
    ...Array.from({ length: 10 }, (_, i) => `delay-${i * 100}`),
  ],
}

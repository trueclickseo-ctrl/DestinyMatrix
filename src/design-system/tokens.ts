/**
 * Design System Tokens (Source of Truth)
 * Governed by 01_ARCHITECTURE.md Section 3
 * Theme: Vibrant Celestial & Soul Contrast Palette
 */

export const colors = {
  brand: {
    primary: '#6d28d9', // Deep Violet
    primaryHover: '#5b21b6',
    secondary: '#db2777', // Vivid Magenta / Cosmic Rose
    accent: '#0284c7', // Sky Cyan
    gold: '#d97706', // Radiant Amber Gold
  },
  surface: {
    light: '#fdf4ff', // Fuchsia pearl background
    cardLight: '#ffffff',
    cardElevated: '#ffffff',
  },
  text: {
    primary: '#1e1b4b', // Deep Indigo Dark Text
    secondary: '#4338ca',
    muted: '#6366f1',
  },
  semantic: {
    success: '#047857',
    warning: '#b45309',
    error: '#b91c1c',
    info: '#1d4ed8',
  },
};

export const spacing = {
  xs: '0.25rem', // 4px
  sm: '0.5rem',  // 8px
  md: '1rem',    // 16px
  lg: '1.5rem',  // 24px
  xl: '2rem',    // 32px
  '2xl': '3rem', // 48px
  '3xl': '4rem', // 64px
};

export const typography = {
  fontFamily: {
    sans: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    arabic: '"Amiri", "Traditional Arabic", Noto Naskh Arabic, serif',
    heading: 'Outfit, Inter, system-ui, sans-serif',
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  },
};

export const radii = {
  none: '0px',
  sm: '0.5rem',
  md: '0.875rem',
  lg: '1.25rem',
  xl: '1.75rem',
  full: '9999px',
};

export const shadows = {
  sm: '0 2px 4px 0 rgb(109 40 217 / 0.06)',
  md: '0 10px 25px -5px rgb(109 40 217 / 0.12), 0 8px 10px -6px rgb(109 40 217 / 0.08)',
  lg: '0 20px 35px -8px rgb(109 40 217 / 0.18), 0 10px 15px -6px rgb(109 40 217 / 0.1)',
  glow: '0 0 30px 2px rgba(219, 39, 119, 0.35)',
};

export const tokens = {
  colors,
  spacing,
  typography,
  radii,
  shadows,
};

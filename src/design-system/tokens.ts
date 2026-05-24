/**
 * Token bridge for Tailwind.
 *
 * Each entry resolves to a CSS variable declared in tokens.css. Tailwind's
 * `theme.extend` consumes this object, so utilities like `bg-primary` or
 * `p-section` resolve to `var(--color-primary)` / `var(--section-y-md)`.
 *
 * Rule: NEVER put literal hex / px / font-family strings here. Add a CSS
 * variable in tokens.css first, then reference it from this file.
 */

export const tokens = {
  colors: {
    transparent: 'transparent',
    current: 'currentColor',

    /* Each value wraps an RGB-triplet CSS variable so Tailwind can fold in
       its <alpha-value> for utilities like `bg-primary/10`. Edit tokens.css
       (the triplet values) — not this file — to rebrand.                   */

    bg: 'rgb(var(--color-bg) / <alpha-value>)',
    'bg-muted': 'rgb(var(--color-bg-muted) / <alpha-value>)',
    'bg-accent': 'rgb(var(--color-bg-accent) / <alpha-value>)',
    'bg-warm': 'rgb(var(--color-bg-warm) / <alpha-value>)',
    surface: 'rgb(var(--color-surface) / <alpha-value>)',
    'surface-raised': 'rgb(var(--color-surface-raised) / <alpha-value>)',

    fg: 'rgb(var(--color-fg) / <alpha-value>)',
    'fg-muted': 'rgb(var(--color-fg-muted) / <alpha-value>)',
    'fg-subtle': 'rgb(var(--color-fg-subtle) / <alpha-value>)',
    'fg-inverse': 'rgb(var(--color-fg-inverse) / <alpha-value>)',

    border: 'rgb(var(--color-border) / <alpha-value>)',
    'border-strong': 'rgb(var(--color-border-strong) / <alpha-value>)',

    primary: {
      DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
      hover: 'rgb(var(--color-primary-hover) / <alpha-value>)',
      fg: 'rgb(var(--color-primary-fg) / <alpha-value>)',
    },
    accent: {
      DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
      hover: 'rgb(var(--color-accent-hover) / <alpha-value>)',
      fg: 'rgb(var(--color-accent-fg) / <alpha-value>)',
    },

    success: 'rgb(var(--color-success) / <alpha-value>)',
    warning: 'rgb(var(--color-warning) / <alpha-value>)',
    danger: 'rgb(var(--color-danger) / <alpha-value>)',
    info: 'rgb(var(--color-info) / <alpha-value>)',
  },

  fontFamily: {
    sans: 'var(--font-sans)',
    display: 'var(--font-display)',
    mono: 'var(--font-mono)',
  },

  fontSize: {
    xs: 'var(--text-xs)',
    sm: 'var(--text-sm)',
    base: 'var(--text-base)',
    lg: 'var(--text-lg)',
    xl: 'var(--text-xl)',
    '2xl': 'var(--text-2xl)',
    '3xl': 'var(--text-3xl)',
    '4xl': 'var(--text-4xl)',
    '5xl': 'var(--text-5xl)',
    '6xl': 'var(--text-6xl)',
    '7xl': 'var(--text-7xl)',
  },

  fontWeight: {
    regular: 'var(--font-regular)',
    medium: 'var(--font-medium)',
    semibold: 'var(--font-semibold)',
    bold: 'var(--font-bold)',
  },

  lineHeight: {
    none: 'var(--leading-none)',
    tight: 'var(--leading-tight)',
    snug: 'var(--leading-snug)',
    normal: 'var(--leading-normal)',
    relaxed: 'var(--leading-relaxed)',
    loose: 'var(--leading-loose)',
  },

  letterSpacing: {
    tight: 'var(--tracking-tight)',
    normal: 'var(--tracking-normal)',
    wide: 'var(--tracking-wide)',
  },

  spacing: {
    0: 'var(--space-0)',
    px: 'var(--space-px)',
    0.5: 'var(--space-0_5)',
    1: 'var(--space-1)',
    2: 'var(--space-2)',
    3: 'var(--space-3)',
    4: 'var(--space-4)',
    5: 'var(--space-5)',
    6: 'var(--space-6)',
    8: 'var(--space-8)',
    10: 'var(--space-10)',
    12: 'var(--space-12)',
    14: 'var(--space-14)',
    16: 'var(--space-16)',
    20: 'var(--space-20)',
    24: 'var(--space-24)',
    28: 'var(--space-28)',
    32: 'var(--space-32)',
    40: 'var(--space-40)',
    48: 'var(--space-48)',
    56: 'var(--space-56)',
    64: 'var(--space-64)',
    gutter: 'var(--gutter)',
    'gutter-mobile': 'var(--gutter-mobile)',
    'section-sm': 'var(--section-y-sm)',
    section: 'var(--section-y-md)',
    'section-lg': 'var(--section-y-lg)',
    'section-sm-mobile': 'var(--section-y-sm-mobile)',
    'section-mobile': 'var(--section-y-md-mobile)',
    'section-lg-mobile': 'var(--section-y-lg-mobile)',
  },

  maxWidth: {
    container: 'var(--container-max)',
    narrow: 'var(--container-narrow)',
  },

  borderRadius: {
    none: 'var(--radius-none)',
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
    '3xl': 'var(--radius-3xl)',
    full: 'var(--radius-full)',
  },

  boxShadow: {
    xs: 'var(--shadow-xs)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
    focus: 'var(--shadow-focus)',
    none: 'none',
  },

  zIndex: {
    base: 'var(--z-base)',
    raised: 'var(--z-raised)',
    sticky: 'var(--z-sticky)',
    nav: 'var(--z-nav)',
    dropdown: 'var(--z-dropdown)',
    overlay: 'var(--z-overlay)',
    modal: 'var(--z-modal)',
    toast: 'var(--z-toast)',
    tooltip: 'var(--z-tooltip)',
  },

  transitionDuration: {
    fast: 'var(--duration-fast)',
    base: 'var(--duration-base)',
    slow: 'var(--duration-slow)',
  },

  transitionTimingFunction: {
    standard: 'var(--ease-standard)',
    emphasized: 'var(--ease-emphasized)',
  },

  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

export type DesignTokens = typeof tokens;

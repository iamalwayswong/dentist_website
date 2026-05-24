import type { Config } from 'tailwindcss';
import { tokens } from './src/design-system/tokens';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    screens: tokens.screens,
    extend: {
      colors: tokens.colors,
      fontFamily: tokens.fontFamily,
      fontSize: tokens.fontSize,
      fontWeight: tokens.fontWeight,
      lineHeight: tokens.lineHeight,
      letterSpacing: tokens.letterSpacing,
      spacing: tokens.spacing,
      maxWidth: tokens.maxWidth,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.boxShadow,
      zIndex: tokens.zIndex,
      transitionDuration: tokens.transitionDuration,
      transitionTimingFunction: tokens.transitionTimingFunction,
    },
  },
  plugins: [],
};

export default config;

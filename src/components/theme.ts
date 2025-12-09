import { defineConfig, createSystem, defaultConfig } from '@chakra-ui/react';

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: 'blue',
    },
  },
  theme: {
    tokens: {
      colors: {
        // Custom brand colors
        brand: {
          darkBlue: { value: '#013365' },
          darkGray: { value: '#222831' },
          lightBg: { value: '#f6f7f9' },
          lightGray: { value: '#c4c4c4' },
          borderGray: { value: '#cecece' },
          orange: { value: '#f3a265' },
          green: { value: '#c4d69b' },
        },
        // Primary palette based on brand colors
        primary: {
          50: { value: '#f6f7f9' },
          100: { value: '#c4c4c4' },
          200: { value: '#cecece' },
          300: { value: '#c4d69b' },
          400: { value: '#f3a265' },
          500: { value: '#013365' },
          600: { value: '#013365' },
          700: { value: '#222831' },
          800: { value: '#222831' },
          900: { value: '#222831' },
        },
      },
      fonts: {
        body: { value: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
        heading: { value: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);

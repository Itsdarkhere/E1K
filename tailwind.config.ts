import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        bg_secondary: '#F9FAFB',
        bg_secondary_hover: '#F2F4F7',
        bg_secondary_solid: '#475467',
        bg_tertiary: '#F2F4F7',
        bg_quarterary: '#EAECF0',
        text_brand_primary: '#42307D',
        text_brand_secondary: '#6941C6',
        text_brand_tertiary: '#7F56D9',
        text_primary: '#101828',
        text_secondary: '#344054',
        text_secondary_hover: '#182230',
        text_tertiary: '#475467',
        text_tertiary_hover: '#344054',
        text_quarterary: '#667085',
        text_placeholder: '#667085',
        text_disabled: '#667085',
      }
    },
  },
  plugins: [],
}
export default config

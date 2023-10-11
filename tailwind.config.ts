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
      transitionProperty: {
        'opacity': 'opacity',
      },
      colors: {
        bg_primary_hover: '#F9FAFB',
        bg_primary_solid: '#0C111D',
        bg_secondary: '#F9FAFB',
        bg_secondary_hover: '#F2F4F7',
        bg_secondary_solid: '#475467',
        bg_tertiary: '#F2F4F7',
        bg_quarterary: '#EAECF0',
        bg_active: '#F9FAFB',
        bg_disabled: '#F2F4F7',
        bg_overlay: '#0C111D',
        bg_brand_primary: '#F9F5FF',
        bg_brand_secondary: '#F4EBFF',
        bg_brand_solid: '#7F56D9',
        bg_brand_solid_hover: '#6941C6',
        bg_brand_section: '#53389E',
        bg_error_primary: '#FEF3F2',
        bg_error_secondary: '#FEE4E2',
        bg_error_solid: '#D92D20',
        bg_warning_primary: '#FFFAEB',
        bg_warning_secondary: '#FEF0C7',
        bg_warning_solid: '#DC6803',
        bg_success_primary: '#ECFDF3',
        bg_success_secondary: '#DCFAE6',
        bg_success_solid: '#079455',
        button_secondary_fg: '#344054',
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
        border_primary: '#D0D5DD',
        border_secondary: '#EAECF0',
        border_tertiary: '#F2F4F7',
        border_disabled: '#D0D5DD',
        border_brand: '#D6BBFB',
        border_brand_solid: '#7F56D9',
        border_error: '#FDA29B',
        border_error_solid: '#D92D20',
        border_app_store: '#A6A6A6',
      }
    },
  },
  variants: {
    extend: {
      opacity: ['responsive', 'hover', 'focus', 'disabled'],
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [],
}
export default config

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // SOMMOS color palette
        primary: {
          DEFAULT: '#A575E8',
          light: '#E9DBFE',
          dark: '#8647E0',
        },
        surface: '#FFFFFF',
        text: {
          primary: '#222745',
        },
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6',
        background: {
          primary: '#FFFFFF',
          secondary: '#F9FAFB',
        },
        border: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(34, 39, 69, 0.06), 0 1px 2px 0 rgba(34, 39, 69, 0.04)',
        elevated: '0 4px 6px -1px rgba(34, 39, 69, 0.1), 0 2px 4px -1px rgba(34, 39, 69, 0.06)',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
    },
  },
  plugins: [],
};

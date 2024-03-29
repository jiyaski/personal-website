/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{html,js,jsx,ts,tsx}'],
    theme: {
        extend: {
            opacity: { '97': '0.97' }, 
            typography: (theme) => ({
                DEFAULT: {
                  css: {
                    maxWidth: 'none', 
                    color: theme('colors.gray.900')
                  },
                },
              }),
        },
    },
    plugins: [
        require('@tailwindcss/typography')
    ],
}


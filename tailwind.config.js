/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        ],
    theme: {
        extend: {
            fontFamily: {
                displayFont: ['PlayfairDisplay', 'serif']
            }, 
            opacity: {
                '97': '0.97'
            }
        },
    },
    plugins: [],
}


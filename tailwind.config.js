/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
        require('daisyui')
    ],
    daisyui: {
        themes: ["light", "dark", "cyberpunk", "halloween", "night", "winter"]
    }
}
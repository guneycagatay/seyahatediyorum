/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/admin/**/*.{js,ts,jsx,tsx}',
        './src/app/giris/**/*.{js,ts,jsx,tsx}',
    ],
    corePlugins: {
        preflight: false,
    },
    theme: {
        extend: {},
    },
    plugins: [],
}

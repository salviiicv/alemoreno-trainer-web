/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                mint: '#6dffb5',
                teal: {
                    DEFAULT: '#009b9e',
                    dark: '#00066b',
                },
                ink: {
                    DEFAULT: '#0a2323',
                    soft: '#3d5555',
                },
                paper: {
                    DEFAULT: '#ffffff',
                    soft: '#f4fbf9',
                },
                line: '#dceeec',
            },
            fontFamily: {
                sans: ['Manrope', 'sans-serif'],
                oswald: ['Oswald', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
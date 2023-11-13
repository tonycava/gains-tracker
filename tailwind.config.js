/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite/**/*.js'],
    theme: {
        extend: {
            keyframes: {
                scaleZeroToOne: {
                    '0%': { transform: 'scale(0)' },
                    '100%': { transform: 'scale(1)' }
                },
                scaleOneToZero: {
                    '0%': { transform: 'scale(1)' },
                    '100%': { transform: 'scale(0)' }
                },
                dotFadeOut: {
                    '0%': { transform: 'translate(0, 0)' },
                    '100%': { transform: 'translate(24px, 0)' }
                }
            },
            animation: {
                scaleZeroToOne: 'scaleZeroToOne 0.6s infinite',
                scaleOneToZero: 'scaleOneToZero 0.6s infinite',
                dotFadeOut: 'dotFadeOut 0.6s infinite'
            },
            fontFamily: {
                'poppins-bold': ['poppins-bold'],
                'poppins-medium': ['poppins-medium'],
                'poppins-regular': ['poppins-regular'],
                'poppins-light': ['poppins-light'],
                'popins-thin': ['poppins-thin']
            }
        }
    },
    plugins: [require('flowbite/plugin')]
};
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '1xl': '1440px',
            '2xl': '1536px',
            lgmax: { max: '1023px' },
            mdmax: { max: '767px' },
            mdminmax: { min: '640px', max: '1023px' },
        },
        extend: {
            colors: {
                primaryText: '#33475b',
                magenta: '#400935',
                green: '#00bda5',
                grey1: '#f5f8fa',
                border: '#c9d3df',
                grey2: '#e5f5f8',
                border2: '#33475b',
                skyBlue: '#00a4bd',
                border3: '#7c98b6',
            },
            backgroundImage: {
                'faq-background': "url('./images/faq-background.png')",
            },
        },
    },
    plugins: [],
};

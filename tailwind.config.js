tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/cometly/dist/**/*.js",
    ],
    theme: {
        extend: {
            animation: {
                'border': 'border 4s linear infinite',
            },
            keyframes: {
                'border': {
                    to: { '--border-angle': '360deg' },
                }
            }                      
        },
    },
}
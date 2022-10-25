/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			keyframes: {
				fadeInDown: {
					"0%": {
						opacity: 0,
					},
					"100%": {
						opacity: 1,
					},
				},
				shake: {
					"0%, 100%": {
						transform: "rotate(0deg)",
					},

					"10%": {
						transform: "rotate(4deg)",
					},

					"20%, 40%, 60%": {
						transform: "rotate(-4deg)",
					},

					"30%, 50%, 70%": {
						transform: "rotate(4deg)",
					},

					"80%": {
						transform: "rotate(-4deg)",
					},

					"90%": {
						transform: "rotate(4deg)",
					},
				},
			},
			animation: {
				fadeInDown: "fadeInDown 1s",
				shake: "shake 5s ease 0s infinite normal none",
			},
			colors: {
				swamp: {
					50: "#ecf9ff",
					100: "#bde6ff",
					200: "#7bcdff",
					300: "#31afff",
					400: "#00a5ff",
					500: "#00a1ed",
					600: "#007cbf",
					700: "#006097",
					800: "#004a77",
					900: "#000d15",
				},
			},
		},
	},
	plugins: [],
};

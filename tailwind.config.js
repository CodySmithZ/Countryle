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
				bounce: {
					"0%  ": { transform: "scale(1,1) translateY(0)" },
					"10% ": { transform: "scale(1.1,.9) translateY(0)" },
					"30% ": { transform: "scale(.9,1.1)   translateY(-55px)" },
					"50% ": { transform: "scale(1.05,.95) translateY(0)" },
					"58% ": { transform: "scale(1,1) translateY(-7px)" },
					"65% ": { transform: "scale(1,1) translateY(0)" },
					"100%": { transform: "scale(1,1) translateY(0)" },
				},

				upDown: {
					"0%": { transform: "translateY(0px)" },
					"25%": { transform: "translateY(-20px)" },
					"50%": { transform: "translateY(0px)" },
					"75%": { transform: "translateY(20px)" },
					"100%": { transform: "translateY(0px)" },
				},
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
				slideIn: {
					"0%": {
						opacity: "0",
						transform: "translateY(-250px)",
					},

					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
			},
			animation: {
				fadeInDown: "fadeInDown 1s",
				shake: "shake 5s ease 0s infinite normal none",
				upDown: "bounce 2s ease infinite ",
				slideIn: "slideIn 1s ease",
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

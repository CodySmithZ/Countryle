/** @type {import('tailwindcss').Config} */
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
		},
	},
	plugins: [],
};

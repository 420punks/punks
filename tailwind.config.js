module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				primary: "#040a0d",
			},
			animation: {
				hover: "hover 3s ease-in-out infinite alternate",
			},
			keyframes: {
				hover: {
					"0%": { transform: "translateY(0)" },
					"100%": { transform: "translateY(-0.75rem)" },
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

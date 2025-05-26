/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#025940",
				secondary: "#F2911B",
				accent: "#FDC906",
				beige: "#FDF2D5",
				redCustom: "#BF0F13",
				black: "#000000",
			},
			fontFamily: {
				headline: ['"Archivo Black"', "sans-serif"],
				body: ['"Open Sans"', "sans-serif"],
			},
		},
	},
	plugins: [],
};
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#f33f3f",
				black: "#141414",
				gray: "rgba(213, 213, 213, 0.3)",
				darkGray: "rgb(23, 23, 23)",
			},
		},
	},
	plugins: [],
};

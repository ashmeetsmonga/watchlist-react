/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#f33f3f",
				black: "#141414",
				gray: "#d9d9d9",
			},
		},
	},
	plugins: [],
};

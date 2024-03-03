/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}"
	],
	theme: {
		colors: {
			"text-dark": "#000000",
			"text-light": "#ffffff",
			"background-white": "#ffffff",
			"background-grey": "#f0f4f5",
			"brand-colour": "#85b09a",
			"accent-colour": "#ffc72c",
			"softer-black": "#2c2a29",
			"link-normal": "#1d70b8",
			"link-hover": "#003078",
			"link-visited": "#4c2c92"
		},
		fontFamily: {
			sans: ["Jost", "sans-serif"],
			mono: [
				"ui-monospace",
				"SFMono-Regular",
				"Menlo",
				"Monaco",
				"Consolas",
				"Liberation Mono",
				"Courier New",
				"monospace"
			]
		},
		extend: {
			maxWidth: {
				gutter: "768px"
			}
		}
	},
	plugins: []
};

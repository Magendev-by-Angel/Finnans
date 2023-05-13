/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				table: 'rgba(130, 119, 141, 0.2)',
				whitegreen: '#70E9AF',
				whitepurple: '#B176EB'
			}
		}
	},
	plugins: []
}

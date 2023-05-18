/** @type {import('tailwindcss').Config} */
import colors from './tailwindConfig/colors'
import boxShadow from './tailwindConfig/boxShadow'
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors,
			boxShadow
			
		}
	},
	plugins: []
}

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			screens: {
				laptop: '1600px',
				base: '500px'
			},
			colors: {
				table: 'rgba(130, 119, 141, 0.2)',
				whitegreen: '#70E9AF',
				whitepurple: '#B176EB',
				paidgreenbg: '#70E9AF',
				paidgreenfg: '#148F43',
				declinedredbg: '#FFEBEB',
				declinedredfg: '#CC5A5D',
				pendingyellowbg: '#FEF5E6',
				pendingyellowfg: '#DFA62E',
				darkpurple: '#82778D'
			}
		}
	},
	plugins: []
}

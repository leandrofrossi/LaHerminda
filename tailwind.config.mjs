/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js'
],
	theme: {
		extend: {
			blur: {
			xs: '2px',
			}
		},
		colors:{
			'bg-principal':'#D6B99E',
			'bg-footer':'#282c34',
			'bg-copy':'#242323',			
			'bg-cards':'#e6d4c2',
			'text-header':'#eef5e7',
			'text-principal':'#426e69'
		},
		backgroundImage: {
			'header-img': "url('../..//assets/bg.jpg')",			
		},
		transitionDuration: {
			'3000': '3000ms',
		},		
	},
	plugins: [
		require('flowbite/plugin')
	],
}

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				pokeTheme: {
					primary: '#FB1B1B',
					'primary-content': '#FFFFFF',
					secondary: '#3B4CCA',
					'secondary-content': '#FFFFFF',
					accent: '#FFDE00',
					'accent-content': '#000000',
					neutral: '#4F4F4F',
					'neutral-content': '#FFFFFF',
					'base-100': 'F5F5F5',
					'base-content': '#000000',
					info: '#5EEAD4',
					success: '#23D163',
					warning: '#FB9E5B',
					error: '#811818',
					'error-content': '#FFFFFF',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};

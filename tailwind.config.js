/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			screens: {
				xs: '480px',
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'custom-xl': '1350px',
				'2xl': '1600px',
			},
			fontFamily: {
				'ibm-mono': ['"IBM Plex Mono"', 'monospace'],
				'ibm-sans': ['"IBM Plex Sans"', 'sans-serif'],
			},
			textColor: {
				'gray-text': 'rgba(255, 255, 255, 0.50)',
				'gray-roadmap': 'rgba(255, 255, 255, 0.70)',
			},

			backgroundImage: {
				'btn-gradient': 'linear-gradient(90deg, #f78c2e -1.8%, #f64340 77.37%)',
				'hero-pattern': 'url("@/assets/img/heroBg.png")',
				'traders-pattern': 'url("@/assets/img/tradersBg.png")',
				'roadmap-pattern': 'url("@/assets/img/roadmapBg.png")',
				'hero-pattern-mobil': 'url("@/assets/img/heroBgMobil.png")',
				'traders-pattern-mobil': 'url("@/assets/img/tradersBgMobil.png")',
			},
			backgroundColor: {
				'gray-benefit': 'rgba(255, 255, 255, 0.01)',
			},
			backgroundSize: {
				ggg: '100% 100%',
				mascot: 'auto 100%',
			},
			borderColor: {
				cards: 'rgba(255, 255, 255, 0.40)',
				benefits: 'rgba(255, 255, 255, 0.20)',
			},
			animation: {
				marquee: 'marquee 15s linear infinite',
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' },
				},
			},
		},
	},
	plugins: [],
}

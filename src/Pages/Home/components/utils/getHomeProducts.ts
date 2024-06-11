export interface HomeProduct {
	halfSize?: boolean
	class: HomeProductClass
	name: string
	price: string
	desc: { strong: string; text: string }
	textColor: string
	informationBgColor: string
	link: string
	images: {
		desktop: HomeProductImage
		tablet: HomeProductImage
		mobile: HomeProductImage
	}
}
export interface HomeProductImage {
	url: string
	size: string
	position: string
}
export interface HomeProductClass {
	name: string
	color: string
	bg: string
}
export const getHomeProducts = () => {
	const data: HomeProduct[] = [
		{
			class: { bg: '#000', color: '#fff', name: 'Keyboard' },
			desc: { strong: '', text: '' },
			images: {
				desktop: {
					position: 'top center',
					size: '160% auto',
					url: '/home/nomad-4-colours-bright.webp',
				},
				tablet: {
					position: 'top center',
					size: '160% auto',
					url: '/home/nomad-4-colours-bright.webp',
				},
				mobile: {
					position: 'top center',
					size: '160% auto',
					url: '/home/nomad-4-colours-bright.webp',
				},
			},
			informationBgColor: '#EDFF00',
			link: '/nomad-e',
			name: 'nomad[e]',
			price: '$349',
			textColor: '#000',
		},
		{
			class: { bg: '#fff', color: '#000', name: 'wrk.shop' },
			desc: {
				strong: 'Evoking the look of both classic and modern technology',
				text: 'Designed by Ben Fryc.',
			},
			images: {
				desktop: {
					url: '/home/frontal-knob.png',
					size: '70% auto',
					position: 'center center',
				},
				tablet: {
					url: '/home/homewl-scaled.webp',
					size: 'cover',
					position: 'center left',
				},
				mobile: {
					url: '/home/k-no-b.webp',
					size: '115% auto',
					position: '50% -10px',
				},
			},
			informationBgColor: '#FF4D00',
			link: '/knob1',
			name: 'k•no•b•1',
			price: '$439',
			textColor: '#000',
		},
		{
			halfSize: true,
			class: { bg: '#fff', color: '#000', name: 'collabo' },
			desc: { strong: 'Little big shortcuts.', text: 'Just the way you like.' },
			images: {
				desktop: {
					position: 'center center',
					size: '140% auto',
					url: '/home/Figma-Creator-Micro.png',
				},
				tablet: {
					position: 'center center',
					size: '140% auto',
					url: '/home/Figma-Creator-Micro.png',
				},
				mobile: {
					position: '50% 15px',
					size: '110% auto',
					url: '/home/Creator-micro-Figma-2.png',
				},
			},
			informationBgColor: '#5551FF',
			link: '/creator-micro',
			name: 'Figma creator micro',
			price: '$139 - limited time',
			textColor: '#fff',
		},
		{
			halfSize: true,
			class: { bg: '#5551FF', color: '#fff', name: 'collabo' },
			desc: { strong: '45x1U Keyset', text: '30 Figma icons + 15 solid color' },
			images: {
				desktop: {
					position: 'center center',
					size: 'cover',
					url: '/home/Caps-together-3.224.png',
				},
				tablet: {
					position: 'center center',
					size: 'cover',
					url: '/home/Caps-together-3.224.png',
				},
				mobile: {
					position: '50% 15px',
					size: '100% auto',
					url: '/home/wrk-Together-shop.png',
				},
			},
			informationBgColor: '#DFDFDF',
			link: '/',
			name: 'wrk. together',
			price: '$64',
			textColor: '#000',
		},
		{
			halfSize: true,
			class: { bg: '#EDFF00', color: '#000', name: 'Keyboard' },
			desc: {
				strong: 'Everythin you love and want from the Creator Board',
				text: 'And a little more, distilled into a compact device.',
			},
			images: {
				desktop: {
					position: 'center center',
					size: '140% auto',
					url: '/home/Micro-RGB-1.png',
				},
				tablet: {
					position: 'center center',
					size: '140% auto',
					url: '/home/Micro-RGB-1.png',
				},
				mobile: {
					position: 'center center',
					size: '150% auto',
					url: '/home/Micro-RGB-1.png',
				},
			},
			informationBgColor: '#DFDFDF',
			link: '/creator-micro',
			name: 'Creator micro',
			price: '$129',
			textColor: '#000',
		},
		{
			halfSize: true,
			class: { bg: '#EDFF00', color: '#000', name: 'Keyboard' },
			desc: {
				strong: 'The first modular keyboard for digital creators',
				text: 'Designed for those who defy limits and change the world.',
			},
			images: {
				desktop: {
					position: 'center center',
					size: '120% auto',
					url: '/home/R4-CB-1-rgb.png',
				},
				tablet: {
					position: 'center center',
					size: '120% auto',
					url: '/home/R4-CB-1-rgb.png',
				},
				mobile: {
					position: 'center center',
					size: '120% auto',
					url: '/home/R4-CB-1-rgb.png',
				},
			},
			informationBgColor: '#DFDFDF',
			link: '/creator-board',
			name: 'Creator board',
			price: 'Starting at $249',
			textColor: '#000',
		},
		{
			class: { bg: '#EDFF00', color: '#000', name: 'Keyboard' },
			desc: {
				strong: 'Sometimes bigger is better.',
				text: 'Expand your creativity.',
			},
			images: {
				desktop: {
					position: 'center center',
					size: '75% auto',
					url: '/home/XL-RGB-Std.png',
				},
				tablet: {
					position: 'center center',
					size: '110% auto',
					url: '/home/XL-RGB-Std.png',
				},
				mobile: {
					position: 'center center',
					size: '120% auto',
					url: '/home/XL-RGB-Std.png',
				},
			},
			informationBgColor: '#DFDFDF',
			link: '/creator-board-xl',
			name: 'Creator board XL',
			price: '$559',
			textColor: '#000',
		},
	]
	return data
}

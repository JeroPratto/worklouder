import { Product } from '../Types/Product'
import { lazy } from 'react'

const getProducts = () => {
	const NomadeFooter = lazy(
		() =>
			import(
				'@/Pages/ProductPage/components/Footers/NomadeFooter/NomadeFooter'
			),
	)
	const Knob1Footer = lazy(
		() =>
			import('@/Pages/ProductPage/components/Footers/Knob1Footer/Knob1Footer'),
	)
	const CreatorMicroFooter = lazy(
		() =>
			import(
				'@/Pages/ProductPage/components/Footers/CreatorMicroFooter/CreatorMicroFooter'
			),
	)
	const CreatorBoardFooter = lazy(
		() =>
			import(
				'@/Pages/ProductPage/components/Footers/CreatorBoardFooter/CreatorBoardFooter'
			),
	)
	const products: Product[] = [
		{
			id: 'nomad-e',
			marqueeText: '[no] distractions - [no] compromise - [e] for everyone -',
			urlImage: '/product-page/nomade/Atomic-US.webp',
			footer: NomadeFooter,
			carouselImages: [
				'/product-page/nomade/carousel/Nomad-Atom.webp',
				'/product-page/nomade/carousel/Nomad-Atom-4.102-scaled.webp',
				'/product-page/nomade/carousel/Nomad-Atom-5.103-scaled.webp',
				'/product-page/nomade/carousel/Nomad-Atom-6.104-scaled.webp',
				'/product-page/nomade/carousel/Nomad-Purple-1.109-2048x1365.webp',
				'/product-page/nomade/carousel/Nomad-Purple-4.112-2048x1365.webp',
				'/product-page/nomade/carousel/Nomad-Purple-5.114-2048x1365.webp',
				'/product-page/nomade/carousel/Nomad-Graphite-1.117-2048x1365.webp',
				'/product-page/nomade/carousel/Nomad-Chalk-1.131-2048x1365.webp',
			],
			name: 'Nomad[E]',
			stock: {
				preOrder: true,
				state: true,
				text: 'In production, ships mid-late Q2 2024',
			},
			price: {
				currentPrice: 349.0,
				sale: true,
				salePrice: 379.0,
			},
			settings: [
				{
					title: 'Colorway',
					options: [
						{
							option: 'Atomic',
							changeImage: true,
							urlImage: '/product-page/nomade/Atomic-US.webp',
						},
						{
							option: 'Atomic Purple',
							changeImage: true,
							urlImage: '/product-page/nomade/Purple-US.webp',
						},
						{
							option: 'Graphite',
							changeImage: true,
							urlImage: '/product-page/nomade/Graphite-US.webp',
						},
						{
							option: 'Chalk',
							changeImage: true,
							urlImage: '/product-page/nomade/Chalk-US.webp',
						},
					],
				},
				{
					title: 'Language',
					options: [
						{ option: 'English- US' },
						{ option: 'English - UK' },
						{ option: 'French' },
						{ option: 'German' },
						{ option: 'Nordic' },
						{ option: 'Italian' },
						{ option: 'Spanish' },
					],
				},
			],
			features: [
				{
					icon: '/icons/world-feature.svg',
					text: 'Worldwide shipping',
				},
				{
					icon: '/icons/computer.svg',
					text: 'Mac, IOS, Win & Linux',
				},
				{
					icon: '/icons/wifi.svg',
					text: 'Bluetooth & Wired',
				},
				{
					icon: '/icons/magic.svg',
					text: 'Works with all software',
				},
				{
					icon: '/icons/microchip.svg',
					text: 'On-board memory',
				},
				{
					icon: '/icons/turn-up.svg',
					text: 'Hot-swap MX switches',
				},
			],
		},
		{
			id: 'knob1',
			marqueeText: 'The low-profile mechanical keyboard of your dreams.',
			urlImage: '/product-page/knob1/Knob-ANSI.webp',
			footer: Knob1Footer,
			name: 'Knob1',
			stock: {
				preOrder: true,
				state: true,
				text: 'In development, ships Q3 204',
			},
			price: {
				currentPrice: 439.0,
			},
			settings: [
				{
					title: 'Language',
					options: [
						{ option: 'English- US' },
						{ option: 'English - UK' },
						{ option: 'French' },
						{ option: 'German' },
						{ option: 'Nordic' },
						{ option: 'Italian' },
						{ option: 'Spanish' },
					],
				},
			],
			features: [
				{
					icon: '/icons/world-feature.svg',
					text: 'Worldwide shipping',
				},
				{
					icon: '/icons/computer.svg',
					text: 'Mac, IOS, Win & Linux',
				},
				{
					icon: '/icons/wifi.svg',
					text: 'Bluetooth & Wired',
				},
				{
					icon: '/icons/magic.svg',
					text: 'Works with all software',
				},
				{
					icon: '/icons/microchip.svg',
					text: 'On-board memory',
				},
				{
					icon: '/icons/turn-up.svg',
					text: 'Hot-swap MX switches',
				},
			],
		},
		{
			id: 'creator-micro',
			marqueeText: 'Creative - Versatile - Powerful -',
			urlImage: '/product-page/creator-micro/Micro-clear-bkg-3.webp',
			footer: CreatorMicroFooter,
			carouselImages: [
				'/product-page/creator-micro/Micro-RGB-1-2048x1365.webp',
				'/product-page/creator-micro/Micro-3-2048x1365.webp',
				'/product-page/creator-micro/Micro-3-2048x13652.webp',
				'/product-page/creator-micro/Micro-5-2048x1365.webp',
				'/product-page/creator-micro/Micro-4-2048x1365.webp',
			],
			name: 'Creator Micro',
			stock: {
				preOrder: false,
				state: true,
				text: 'In-stock, ships in 1-3 business days',
			},
			price: {
				currentPrice: 129.0,
				sale: true,
				salePrice: 139.0,
			},
			settings: [
				{
					title: 'Switches',
					options: [{ option: 'Clicky' }, { option: 'Silent' }],
				},
			],
			features: [
				{
					icon: '/icons/world-feature.svg',
					text: 'Worldwide shipping',
				},
				{
					icon: '/icons/computer.svg',
					text: 'Mac, IOS, Win & Linux',
				},
				{
					icon: '/icons/microchip.svg',
					text: 'On-board memory',
				},
				{
					icon: '/icons/magic.svg',
					text: 'Works with all software',
				},
			],
		},
		{
			id: 'creator-board',
			marqueeText: 'Modular keyboard for digital creators -',
			urlImage: '/product-page/creator-board/CreatorboardFull.webp',
			footer: CreatorBoardFooter,
			carouselImages: [
				'/product-page/creator-board/R4-CB-1-rgb-2048x1365.webp',
				'/product-page/creator-board/R4-CB-1-2048x1365.webp',
				'/product-page/creator-board/R4-CB-6-2048x1365.webp',
				'/product-page/creator-board/R4-CB-5-2048x1365.webp',
			],
			name: 'Creator Board [r4]',
			stock: {
				preOrder: false,
				state: true,
				text: 'In-stock, ships in 1-3 business days',
			},
			price: {
				currentPrice: 409.0,
				sale: true,
				salePrice: 419.0,
			},
			settings: [
				{
					title: 'Model',
					options: [{ option: 'The creator' }, { option: 'The Starter' }],
				},
				{
					title: 'Switches',
					options: [
						{ option: 'Kailh Choc Red' },
						{ option: 'Kailh Choc Brown' },
					],
				},
			],
			features: [
				{
					icon: '/icons/world-feature.svg',
					text: 'Worldwide shipping',
				},
				{
					icon: '/icons/computer.svg',
					text: 'Mac, IOS, Win & Linux',
				},
				{
					icon: '/icons/turn-up.svg',
					text: 'Hot-swap MX switches',
				},
				{
					icon: '/icons/microchip.svg',
					text: 'On-board memory',
				},
			],
		},
		{
			id: 'creator-board-xl',
			marqueeText: 'Bigger is better -',
			urlImage: '/product-page/creator-board-xl/CreatorboardXL.webp',
			carouselImages: [
				'/product-page/creator-board-xl/XL-RGB-Std-2048x1365.webp',
				'/product-page/creator-board-xl/XL-Std-4-2048x1365.webp',
				'/product-page/creator-board-xl/XL-Std-5-2048x1365.webp',
			],
			name: 'Creator Board XL',
			stock: {
				preOrder: true,
				state: true,
				text: 'In production, ships June 2024',
			},
			price: {
				currentPrice: 559.0,
			},
			settings: [
				{
					title: 'Switches',
					options: [
						{ option: 'Kailh Choc Red' },
						{ option: 'Kailh Choc Brown' },
					],
				},
			],
			features: [
				{
					icon: '/icons/world-feature.svg',
					text: 'Worldwide shipping',
				},
				{
					icon: '/icons/computer.svg',
					text: 'Mac, IOS, Win & Linux',
				},
				{
					icon: '/icons/turn-up.svg',
					text: 'Hot-swap MX switches',
				},
				{
					icon: '/icons/microchip.svg',
					text: 'On-board memory',
				},
			],
		},
	]
	return products
}

export default getProducts

interface ItemShop {
	urlImage: string
	widthImage: string
	bgColor: string
	class: {
		text: string
		color: string
		bgColor: string
	}
	name: string
	link: string
	widthType: 'whole' | 'half' | 'one-third' | 'one-fourth' | 'one-fourth'
}

const getItemShop = () => {
	const data: ItemShop[] = [
		{
			urlImage: '/shop/Nomad-Atom-4.102.webp',
			widthImage: 'one-hundred',
			bgColor: '#DFDFDF',
			class: {
				bgColor: '#EDFF00',
				color: '#000',
				text: 'Keyboard',
			},
			name: 'nomad [e]',
			link: '/nomad-e',
			widthType: 'whole',
		},
		{
			urlImage: '/shop/Figma-Creator-Micro-768x512.webp',
			bgColor: '#DFDFDF',
			widthImage: 'ninety',
			class: {
				bgColor: '#5551FF',
				color: '#fff',
				text: 'collabo',
			},
			link: '/creator-micro',
			name: 'Figma creator micro',
			widthType: 'half',
		},
		{
			urlImage: '/shop/wrk-Together-shop-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'fifty',
			class: {
				bgColor: '#5551FF',
				color: '#fff',
				text: 'collabo',
			},
			link: '/creator-micro',
			name: 'wrk. together',
			widthType: 'half',
		},
		// ultimo
		{
			urlImage: '/shop/Micro-RGB-1-768x512.webp',
			bgColor: '#DFDFDF',
			widthImage: 'one-hundred',
			class: {
				bgColor: '#EDFF00',
				color: '#000',
				text: 'Keyboard',
			},
			link: '/creator-micro',
			name: 'creator micro',
			widthType: 'one-third',
		},
		{
			urlImage: '/shop/R4-CB-1-rgb-768x512.webp',
			bgColor: '#DFDFDF',
			widthImage: 'one-hundred',
			class: {
				bgColor: '#EDFF00',
				color: '#000',
				text: 'Keyboard',
			},
			link: '/creator-board',
			name: 'creator board',
			widthType: 'one-third',
		},
		{
			urlImage: '/shop/XL-RGB-Std-768x512.webp',
			bgColor: '#DFDFDF',
			widthImage: 'one-hundred',
			class: {
				bgColor: '#EDFF00',
				color: '#000',
				text: 'Keyboard',
			},
			link: '/creator-board-xl',
			name: 'creator board XL',
			widthType: 'one-third',
		},
		{
			urlImage: '/shop/micro-parts-product-web-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'one-hundred',
			class: {
				bgColor: '#444444',
				color: '#fff',
				text: 'module',
			},
			link: '/shop',
			name: 'micro pcb',
			widthType: 'one-fourth',
		},
		{
			urlImage: '/shop/numpad-product-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'one-hundred',
			class: {
				bgColor: '#444444',
				color: '#fff',
				text: 'module',
			},
			link: '/shop',
			name: 'num pad',
			widthType: 'one-fourth',
		},
		{
			urlImage: '/shop/micro-parts-product2-web-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'ninety',
			class: {
				bgColor: '#444444',
				color: '#fff',
				text: 'module',
			},
			link: '/shop',
			name: 'micro base',
			widthType: 'one-fourth',
		},
		{
			urlImage: '/shop/xl-baseplate-WP-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'one-hundred',
			class: {
				bgColor: '#444444',
				color: '#fff',
				text: 'module',
			},
			link: '/shop',
			name: 'XL base',
			widthType: 'one-fourth',
		},
		{
			urlImage: '/shop/Biip-cartridge-comp.982-2048x1152.webp',
			bgColor: '#DFDFDF',
			widthImage: 'one-hundred',
			class: {
				bgColor: '#FF6700',
				color: '#000',
				text: 'Keycaps',
			},
			link: '/shop',
			name: 'wrk. cartridge',
			widthType: 'whole',
		},
		{
			urlImage: '/shop/wrk-Icon-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'ninety',
			class: {
				bgColor: '#FF6700',
				color: '#000',
				text: 'Keycaps',
			},
			link: '/shop',
			name: 'wrk. icon',
			widthType: 'one-third',
		},
		{
			urlImage: '/shop/dime-CURE-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'ninety',
			class: {
				bgColor: '#FF6700',
				color: '#000',
				text: 'Keycaps',
			},
			link: '/shop',
			name: 'wrk. pure',
			widthType: 'one-third',
		},
		{
			urlImage: '/shop/blind-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'ninety',
			class: {
				bgColor: '#FF6700',
				color: '#000',
				text: 'Keycaps',
			},
			link: '/shop',
			name: 'wrk. blind',
			widthType: 'one-third',
		},
		{
			urlImage: '/shop/legend-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'seventy',
			class: {
				bgColor: '#FF6700',
				color: '#000',
				text: 'Keycaps',
			},
			link: '/shop',
			name: 'wrk. legend',
			widthType: 'half',
		},
		{
			urlImage: '/shop/daily-ok-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'seventy',
			class: {
				bgColor: '#FF6700',
				color: '#000',
				text: 'Keycaps',
			},
			link: '/shop',
			name: 'wrk. daily',
			widthType: 'half',
		},
		{
			urlImage: '/shop/untitled.611-CJ7KH0-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'one-hundred',
			class: {
				bgColor: '#FF6700',
				color: '#000',
				text: 'Keycaps',
			},
			link: '/shop',
			name: 'wrk. dial',
			widthType: 'one-fourth',
		},
		{
			urlImage: '/shop/00-nano-pad-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'ninety',
			class: {
				bgColor: '#444444',
				color: '#fff',
				text: 'module',
			},
			link: '/shop',
			name: 'nano pad',
			widthType: 'one-fourth',
		},
		{
			urlImage: '/shop/00-loop-pad-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'ninety',
			class: {
				bgColor: '#444444',
				color: '#fff',
				text: 'module',
			},
			link: '/shop',
			name: 'loop pad',
			widthType: 'one-fourth',
		},
		{
			urlImage: '/shop/wrk-stick-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'one-hundred',
			class: {
				bgColor: '#E77FFF',
				color: '#000',
				text: 'merchandise',
			},
			link: '/shop',
			name: 'stickers',
			widthType: 'one-fourth',
		},
		{
			urlImage: '/shop/animo-wp-home.webp',
			bgColor: '#1D1D1D',
			widthImage: 'one-hundred',
			class: {
				bgColor: '#0EE077',
				color: '#000',
				text: 'deskmat',
			},
			link: '/shop',
			name: 'A.N.I.M.O',
			widthType: 'whole',
		},
		{
			urlImage: '/shop/floppy-prod-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'ninety',
			class: {
				bgColor: '#0EE077',
				color: '#000',
				text: 'deskmat',
			},
			link: '/shop',
			name: 'Floppy Chameleon',
			widthType: 'half',
		},
		{
			urlImage: '/shop/muriicle-prod-768x768.webp',
			bgColor: '#DFDFDF',
			widthImage: 'ninety',
			class: {
				bgColor: '#0EE077',
				color: '#000',
				text: 'deskmat',
			},
			link: '/shop',
			name: 'Muriicle collabo',
			widthType: 'half',
		},
	]
	return data
}

export default getItemShop

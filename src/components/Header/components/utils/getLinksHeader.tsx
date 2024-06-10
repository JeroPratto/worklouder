export interface HeaderLink {
	title: string
	list: { text: string; link: string }[]
}
export default function getLinksHeader(): HeaderLink[] {
	const data = [
		{
			title: 'Keyboards',
			list: [
				{ text: 'Nomad [e]', link: '/nomad-e' },
				{ text: 'Knob1', link: '/knob1' },
				{ text: 'Creator micro', link: '/creator-micro' },
				{ text: 'Creator board', link: '/creator-board' },
				{ text: 'Creator board XL', link: '/creator-board-xl' },
			],
		},
		{
			title: 'Accessories',
			list: [
				{ text: 'Keycaps', link: '#' },
				{ text: 'Deskmat', link: '#' },
			],
		},
		{
			title: 'Support',
			list: [
				{ text: 'About us', link: '#' },
				{ text: 'Setup', link: '#' },
				{ text: 'Wrk.shop', link: '#' },
				{ text: 'Updates', link: '#' },
			],
		},
	]
	return data
}

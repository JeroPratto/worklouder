export interface Product {
	id: string
	marqueeText: string
	name: string
	urlImage: string
	footer?: React.FC
	carouselImages?: string[]
	stock: ProductStockI
	price: ProductPriceI
	settings: ProductSettingsI[]
	features: { icon: string; text: string }[]
}

export interface ProductStockI {
	preOrder?: boolean
	state: boolean
	text: string
}

export interface ProductPriceI {
	currentPrice: number
	sale?: boolean
	salePrice?: number
}

export interface ProductSettingsI {
	title: string
	options: ProductSettingsOptionI[]
}

export interface ProductSettingsOptionI {
	option: string
	changeImage?: boolean
	urlImage?: string
}

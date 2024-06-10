import { Product } from '@/Types/Product'
import { ProductState } from '@/store/cartStore'

interface handleAddProductProps {
	product: Product
	urlImage: string
	settings: {
		name: string
		value: string
	}[]
}
const handleAddProduct = ({
	product,
	settings,
	urlImage,
}: handleAddProductProps) => {
	let createId = ''
	for (let i = 0; i < settings.length; i++) {
		const aux = settings[i].name + ':' + settings[i].value + ','
		createId = createId + aux
	}
	const item: ProductState = {
		id: product.id,
		name: product.name,
		price: product.price,
		quantity: 1,
		settings: settings,
		urlImage: urlImage,
		idSettings: createId,
	}
	return item
}

export default handleAddProduct

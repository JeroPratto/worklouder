import getProducts from './getProducts'

// -1 if not found
const getProductsById = (id: string | undefined) => {
	if (!id) return -1
	const products = getProducts()
	const index = products.findIndex((product) => product.id === id)
	if (index === -1) return -1
	else return products[index]
}

export default getProductsById

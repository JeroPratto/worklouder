import { ProductPriceI } from '@/Types/Product'
import { create } from 'zustand'

export interface ProductState {
	id: string
	name: string
	urlImage: string
	price: ProductPriceI
	quantity: number
	settings: { name: string; value: string }[]
	idSettings: string
}

interface State {
	products: ProductState[]
	totalPrice: number
	updateTotalPrice: (price: number) => void
	addProduct: (product: ProductState) => void
	deleteProduct: (id: string, idSettings: string) => void
	addQuantity: (id: string, idSettings: string) => void
	lessQuantity: (id: string, idSettings: string) => void
	updateProducts: (product: ProductState[]) => void
	statusSynchronizer: () => void
	purchase: () => void
}

const initialProducts = () => {
	const products = localStorage.getItem('products')
	if (products === null) return []
	else return JSON.parse(products)
}

const initialTotalPrice = () => {
	const price = localStorage.getItem('total-price')
	if (price === null) return 0
	else return JSON.parse(price)
}

export const useCartStore = create<State>((set) => ({
	products: initialProducts(),
	totalPrice: initialTotalPrice(),
	purchase: () => {
		set((state) => {
			console.log('-- Start of user purchase --')
			state.products.forEach((product) => console.log(product.name, product))
			console.log('Total Price: ', state.totalPrice)

			state.updateTotalPrice(0)
			localStorage.setItem('products', JSON.stringify([]))
			console.log('-- End of user purchase --')
			return { products: [] }
		})
	},
	statusSynchronizer: () => {
		const preProducts = localStorage.getItem('products')
		const prePrice = localStorage.getItem('total-price')
		if (preProducts && prePrice) {
			const newProducts = JSON.parse(preProducts)
			const newPrice = JSON.parse(prePrice)
			set({ products: newProducts, totalPrice: newPrice })
		}
	},
	updateTotalPrice: (price: number) => {
		localStorage.setItem('total-price', JSON.stringify(price))
		set({ totalPrice: price })
	},
	updateProducts: (products: ProductState[]) => {
		localStorage.setItem('products', JSON.stringify(products))
	},
	addProduct: (product: ProductState) => {
		set((state) => {
			const storedProducts = localStorage.getItem('products')
			const index = state.products.findIndex(
				(p) => p.id === product.id && p.idSettings === product.idSettings,
			)
			let currentPrice = state.totalPrice
			// only change of quantity because the product exists
			if (index != -1) {
				const currentProducts = JSON.parse(storedProducts!)
				currentProducts[index].quantity++
				currentPrice += currentProducts[index].price.currentPrice
				state.updateTotalPrice(currentPrice)
				state.updateProducts(currentProducts)
				return { products: currentProducts }
			} else {
				// new product then the quantity is not changed, only the product is added.
				let newProducts
				if (storedProducts) {
					newProducts = [product, ...JSON.parse(storedProducts)]
				} else {
					newProducts = [product]
				}
				state.updateTotalPrice(state.totalPrice + product.price.currentPrice)
				state.updateProducts(newProducts)
				return { products: newProducts }
			}
		})
	},
	deleteProduct: (id: string, idSettings: string) => {
		set((state) => {
			const index = state.products.findIndex(
				(p) => p.id === id && p.idSettings === idSettings,
			)
			const newProducts = state.products
			const newPrice =
				state.totalPrice -
				newProducts[index].quantity * newProducts[index].price.currentPrice
			state.updateTotalPrice(newPrice)
			newProducts.splice(index, 1)
			state.updateProducts(newProducts)
			return { products: newProducts }
		})
	},
	addQuantity: (id: string, idSettings: string) => {
		set((state) => {
			const index = state.products.findIndex(
				(p) => p.id === id && p.idSettings === idSettings,
			)
			const newProducts = state.products
			newProducts[index].quantity++
			const newPrice = state.totalPrice + newProducts[index].price.currentPrice
			state.updateTotalPrice(newPrice)
			state.updateProducts(newProducts)
			return { products: newProducts }
		})
	},
	lessQuantity: (id: string, idSettings: string) => {
		set((state) => {
			const index = state.products.findIndex(
				(p) => p.id === id && p.idSettings === idSettings,
			)
			const newProducts = state.products
			newProducts[index].quantity--
			const newPrice = state.totalPrice - newProducts[index].price.currentPrice
			state.updateTotalPrice(newPrice)
			state.updateProducts(newProducts)
			return { products: newProducts }
		})
	},
}))

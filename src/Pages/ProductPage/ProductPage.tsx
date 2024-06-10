import { useCartStore } from '@/store/cartStore'
import { useOpenCartStore } from '@/store/openCartStore'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import { useLocation } from 'react-router-dom'
import {
	Product,
	ProductPriceI,
	ProductSettingsI,
	ProductStockI,
} from '../../Types/Product'
import styles from './ProductPage.module.css'
import { ProductPageCarousel } from './components/ProductPageCarousel'
import Settings from './components/ProductSettings/ProductSettings'
import handleAddProduct from './utils/handleAddProduct'

export type ProductPageProps = {
	product: Product
}

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
	const { pathname } = useLocation()
	const [currentImage, setImage] = useState<string>(product.urlImage)
	const addProduct = useCartStore((state) => state.addProduct)
	const openCart = useOpenCartStore((state) => state.openCart)

	useEffect(() => {
		setImage(product.urlImage)
	}, [pathname])

	const [errors, setErrors] = useState<{ [key: string]: boolean }>({})

	const submit = (event: React.FormEvent) => {
		const currentSettings = handleSubmit({
			event,
			setErrors,
			settings: product.settings,
		})
		if (currentSettings != null) {
			addProduct(
				handleAddProduct({
					product,
					settings: currentSettings,
					urlImage: currentImage,
				}),
			)
			openCart()
		}
	}

	return (
		<div className={styles.container}>
			<section className={styles.section}>
				<div className={styles.imageAndInformation}>
					<div className={styles.containerImage}>
						<img src={currentImage} alt={product.name} />
					</div>
					<div className={styles.informationContainer}>
						<h1 className={styles.title}>{product.name}</h1>
						<StockState {...product.stock} />
						<ProductPrice {...product.price} />
						<form onSubmit={submit} id='product-page-form'>
							{product.settings.map((p, index) => (
								<Settings
									options={p.options}
									setImage={setImage}
									title={p.title}
									hasError={errors[p.title]}
									key={index}
								/>
							))}
							<OrderAndDisclaimer stock={product.stock} />
						</form>
						<Features features={product.features} />
					</div>
				</div>
			</section>
			<Marquee className={styles.marquee} speed={200} autoFill>
				{product.marqueeText}
			</Marquee>
			{product.carouselImages && (
				<ProductPageCarousel images={product.carouselImages} />
			)}
			{product.footer && <product.footer></product.footer>}
		</div>
	)
}

export default ProductPage

const Features = ({
	features,
}: {
	features: { icon: string; text: string }[]
}) => {
	return (
		<ul className={styles.features}>
			{features.map((f, index) => (
				<li
					className={`${styles.feature} ${
						index % 2 === 0 ? styles.left : styles.right
					}`}
					key={index}
				>
					<p>
						<img src={f.icon} alt='' className={styles.featureIcon} />
						{f.text}
					</p>
				</li>
			))}
		</ul>
	)
}

const OrderAndDisclaimer = ({ stock }: { stock: ProductStockI }) => {
	return (
		<>
			{stock.preOrder && (
				<>
					<button className={styles.orderBtn}>Pre-order*</button>
					<p className={styles.preOrderDisclaimer}>
						*By clicking "Pre-order"{' '}
						<strong>
							I understand that I am purchasing a PRE-ORDER product and not an
							IN-STOCK product.{' '}
						</strong>
						Therefore I agree to <span>Terms & conditions</span> of the
						pre-order process.
					</p>
				</>
			)}
			{!stock.preOrder && (
				<button className={styles.orderBtn}>Add to cart</button>
			)}
		</>
	)
}

const StockState = (stock: ProductStockI) => {
	return (
		<p className={styles.stockState}>
			<span
				className={
					stock.preOrder
						? styles.inProduction
						: stock.state
						? styles.inStock
						: styles.outOfStock
				}
			></span>
			{stock.text}
		</p>
	)
}

const ProductPrice = (price: ProductPriceI) => {
	return (
		<p className={styles.price}>
			US${price.currentPrice.toFixed(2)}
			{price.sale && (
				<>
					<span className={styles.sale}>Sale!</span>
					<span className={styles.salePrice}>
						US${price.salePrice?.toFixed(2)}
					</span>
				</>
			)}
		</p>
	)
}

interface handleSubmitProps {
	event: React.FormEvent<Element>
	setErrors: React.Dispatch<
		React.SetStateAction<{
			[key: string]: boolean
		}>
	>
	settings: ProductSettingsI[]
}

const handleSubmit = ({ event, setErrors, settings }: handleSubmitProps) => {
	event.preventDefault()
	const newErrors: { [key: string]: boolean } = {}
	let hasErrors = false

	// Check each setting if it's selected
	settings.forEach((setting) => {
		const radioButtons = document.getElementsByName(setting.title)
		let isSelected = false
		if (radioButtons) {
			for (let i = 0; i < radioButtons.length; i++) {
				if ((radioButtons[i] as HTMLInputElement).checked) {
					isSelected = true
					break
				}
			}
		}

		if (!isSelected) {
			newErrors[setting.title] = true
			hasErrors = true
		}
	})

	setErrors(newErrors)

	if (!hasErrors) {
		const settingsData: { name: string; value: string }[] = []
		settings.forEach((setting) => {
			const radioButtons = document.getElementsByName(setting.title)
			for (let i = 0; i < radioButtons.length; i++) {
				const radio = radioButtons[i] as HTMLInputElement
				if (radio.checked) {
					settingsData.push({
						name: radio.name,
						value: radio.value,
					})
					break
				}
			}
		})
		return settingsData
	} else {
		console.log('Please fill in all required fields')
		return null
	}
}

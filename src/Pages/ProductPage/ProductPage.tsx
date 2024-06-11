import { useCartStore } from '@/store/cartStore'
import { useOpenCartStore } from '@/store/openCartStore'
import React, { useEffect, useState } from 'react'
import Marquee from 'react-fast-marquee'
import Skeleton from 'react-loading-skeleton'
import { useLocation } from 'react-router-dom'
import { Product } from '../../Types/Product'
import styles from './ProductPage.module.css'
import { Features } from './components/Features'
import { HandleSubmitProductPage } from './components/HandleSubmitProductPage'
import { OrderAndDisclaimer } from './components/OrderAndDisclaimer'
import { ProductPageCarousel } from './components/ProductPageCarousel'
import { ProductPrice } from './components/ProductPrice'
import Settings from './components/ProductSettings/ProductSettings'
import { StockState } from './components/StockState'
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
		const currentSettings = HandleSubmitProductPage({
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
	const [isLoaded, setIsLoaded] = useState(false)
	return (
		<div className={styles.container}>
			<section className={styles.section}>
				<div className={styles.imageAndInformation}>
					<div className={styles.containerImage}>
						{!isLoaded && (
							<Skeleton
								height='75%'
								containerClassName={styles.containerSkeleton}
							/>
						)}
						<img
							src={currentImage}
							alt={product.name}
							style={{ display: isLoaded ? 'block' : 'none' }}
							onLoad={() => setIsLoaded(true)}
						/>
					</div>
					<div className={styles.informationContainer}>
						<h1 className={styles.title}>{product.name}</h1>
						<StockState stock={product.stock} />
						<ProductPrice price={product.price} />
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

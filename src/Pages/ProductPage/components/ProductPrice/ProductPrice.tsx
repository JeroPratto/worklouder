import { ProductPriceI } from '@/Types/Product'
import React from 'react'
import styles from './ProductPrice.module.css'

export type ProductPriceProps = {
	price: ProductPriceI
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
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

export default ProductPrice

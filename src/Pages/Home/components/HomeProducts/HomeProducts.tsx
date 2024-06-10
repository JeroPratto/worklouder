import React from 'react'
import { getHomeProducts } from '../utils/getHomeProducts'
import styles from './HomeProducts.module.css'
import { ProductViewSection } from '../ProductViewSection'

const HomeProducts: React.FC = () => {
	const products = getHomeProducts()
	return (
		<div className={styles.container}>
			{products.map((product, index) => (
				<ProductViewSection product={product} key={index} />
			))}
		</div>
	)
}

export default HomeProducts

import { ProductStockI } from '@/Types/Product'
import React from 'react'
import styles from './StockState.module.css'

export type StockStateProps = {
	stock: ProductStockI
}

const StockState: React.FC<StockStateProps> = ({ stock }) => {
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

export default StockState

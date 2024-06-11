import { ProductStockI } from '@/Types/Product'
import React from 'react'
import styles from './OrderAndDisclaimer.module.css'

export type OrderAndDisclaimerProps = {
	stock: ProductStockI
}

const OrderAndDisclaimer: React.FC<OrderAndDisclaimerProps> = ({ stock }) => {
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

export default OrderAndDisclaimer

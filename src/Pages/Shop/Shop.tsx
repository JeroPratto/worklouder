import React from 'react'
import styles from './Shop.module.css'
import getItemShop from './utils/getItemShops'
import { Link } from 'react-router-dom'

const Shop: React.FC = () => {
	const items = getItemShop()
	return (
		<div className={styles.container}>
			<div className={styles.hero}>
				<h1>Our products</h1>
			</div>
			<div className={styles.gridItems}>
				{items.map((item, index) => (
					<div
						className={`${styles.item} ${styles[item.widthType]}`}
						key={index}
					>
						<div
							className={styles.class}
							style={{
								backgroundColor: item.class.bgColor,
								color: item.class.color,
							}}
						>
							{item.class.text}
						</div>
						<div
							className={styles.imageContainer}
							style={{ backgroundColor: item.bgColor }}
						>
							<img
								src={item.urlImage}
								alt={item.name}
								className={`${styles.productImage} ${styles[item.widthImage]}`}
							/>
						</div>
						<div className={styles.footer}>
							<p className={styles.name}>{item.name}</p>
							<Link to={item.link} className={styles.goTo}>
								Shop <img src='/icons/arrow-right-white.svg' alt='' />
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Shop

import React, { useEffect, useState } from 'react'
import styles from './ProductViewSection.module.css'
import { Link } from 'react-router-dom'
import arrow from '/icons/arrow-right.svg'
import arrowWhite from '/icons/arrow-right-white.svg'
import { HomeProduct } from '../utils/getHomeProducts'

export type ProductViewSectionProps = {
	product: HomeProduct
}

const ProductViewSection: React.FC<ProductViewSectionProps> = ({ product }) => {
	const [currentImage, setCurrentImg] = useState(product.images.mobile)

	useEffect(() => {
		const selectImage = () => {
			const width = window.innerWidth
			if (width <= 768) {
				setCurrentImg(product.images.mobile)
			} else if (width <= 1024 && width > 768)
				setCurrentImg(product.images.tablet)
			else setCurrentImg(product.images.desktop)
		}
		window.addEventListener('resize', selectImage)
		return () => {
			window.removeEventListener('resize', selectImage)
		}
	}, [])

	return (
		<div
			className={`${styles.container} ${product.halfSize ? styles.half : ''}`}
		>
			<p
				className={styles.classMobile}
				style={{
					backgroundColor: product.class.bg,
					color: product.class.color,
				}}
			>
				{product.class.name}
			</p>
			<div
				className={styles.left}
				style={{
					backgroundColor: product.informationBgColor,
					color: product.textColor,
				}}
			>
				<div>
					<p
						className={styles.classDesktop}
						style={{
							backgroundColor: product.class.bg,
							color: product.class.color,
						}}
					>
						{product.class.name}
					</p>
					<p className={styles.name}>{product.name}</p>
					<p className={styles.price}>{product.price}</p>
				</div>
				<div>
					<p className={styles.desc}>
						<strong>{product.desc.strong}</strong>
						{product.desc.text}
					</p>
					<Link
						to={product.link}
						className={styles.explore}
						style={{ borderColor: product.textColor, color: product.textColor }}
					>
						Explore{' '}
						<img
							src={product.textColor === '#fff' ? arrowWhite : arrow}
							alt=''
						/>
					</Link>
				</div>
			</div>
			<div
				className={styles.productImage}
				style={{
					backgroundImage: `url(${currentImage.url})`,
					backgroundSize: currentImage.size,
					backgroundPosition: currentImage.position,
				}}
			></div>
		</div>
	)
}

export default ProductViewSection

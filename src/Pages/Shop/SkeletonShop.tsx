import styles from './SkeletonShop.module.css'

const SkeletonShop = () => {
	return (
		<div className={styles.container}>
			<div className={styles.hero}>
				<h1>Our products</h1>
			</div>
			<div className={styles.section}>
				<div className={styles.item}></div>
				<div className={styles.half}></div>
				<div className={styles.half}></div>
			</div>
		</div>
	)
}

export default SkeletonShop

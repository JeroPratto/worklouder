import React from 'react'
import styles from './OurProductsSection.module.css'
import { Link } from 'react-router-dom'
import arrow from '/icons/arrow-right.svg'
import arrowWhite from '/icons/arrow-right-white.svg'

const OurProductsSection: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.ourProducts}>
				<div className={styles.overlay}></div>
				<div className={styles.classesAndTitle}>
					<Classes />
					<p className={styles.title}>our products</p>
				</div>
				<Link to='/shop' className={styles.toShop}>
					go to shop <img src={arrow} alt='' />{' '}
				</Link>
			</div>
			<div className={styles.wrk}>
				<div className={styles.wrkOverlay}></div>
				<p className={styles.wrkTitle}>wrk.shop</p>
				<p className={styles.wrkDesc}>
					Where your renders <strong>become reality</strong>
				</p>
				<Link to='/' className={styles.explore}>
					Explore <img src={arrowWhite} alt='' />
				</Link>
			</div>
		</div>
	)
}

export default OurProductsSection

const Classes = () => {
	return (
		<div className={styles.classes}>
			<div>
				<span style={{ backgroundColor: '#EDFF00' }}>keyboard</span>
				<span style={{ backgroundColor: '#0EE077' }}>dekmat</span>
				<span style={{ backgroundColor: '#FF6700' }}>keycaps</span>
			</div>
			<div>
				<span style={{ backgroundColor: '#444', color: '#fff' }}>modules</span>
				<span style={{ backgroundColor: '#5551FF', color: '#fff' }}>
					collabo
				</span>
				<span style={{ backgroundColor: '#fff' }}>merchandise</span>
			</div>
		</div>
	)
}

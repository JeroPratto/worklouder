import React from 'react'
import styles from './HomeHero.module.css'
import { Link } from 'react-router-dom'
import arrow from '/icons/arrow-right.svg'
import star from '/home/star-icon.png'

const HomeHero: React.FC = () => {
	return (
		<div className={styles.container}>
			<main className={styles.main}>
				<div className={styles.overlay}></div>
				<div className={styles.titleAndDesc}>
					<img src={star} alt='' className={styles.starIconDesktop} />
					<h1 className={styles.title}>
						<span className={styles.textAndImage}>
							<img src={star} alt='' className={styles.starIconMobile} />
							focus.
						</span>
						<br />
						work.
						<br />
						rest.
					</h1>
					<Link to='/nomad-e' className={styles.discover}>
						discover nomad <img src={arrow} alt='' />
					</Link>
					<p className={styles.desc}>
						<strong>*Our tools help you focus </strong>in ways you've only
						dreamt of
					</p>
				</div>
			</main>
		</div>
	)
}

export default HomeHero

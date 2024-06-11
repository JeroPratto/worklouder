import React from 'react'
import styles from './Nomade.module.css'
import { Link } from 'react-router-dom'
import arrow from '/icons/arrow-right.svg'

const Nomade: React.FC = () => {
	return (
		<section className={styles.container}>
			<div className={styles.main}>
				<div className={styles.left}></div>
				<div className={styles.right}>
					<div className={styles.titleContainer}>
						<div>
							<p className={styles.class}>Keyboard</p>
							<p className={styles.name}>nomad[e]</p>
							<p className={styles.desc}>
								4x colors - 7x layouts <span>$349</span>
							</p>
						</div>
						<div className={styles.descriptionContainer}>
							<p>
								<strong>Low profile, mechanical, wireless.</strong>The first
								keyboard designed to get you in the zone, and keep you there.
							</p>
							<Link to='/nomad-e' className={styles.explore}>
								Explore
								<img src={arrow} alt='' />
							</Link>
						</div>
					</div>
					<div className={styles.rightImages}>
						<img
							src='/home/nomad-4-colours-bright-crop.webp'
							alt=''
							className={styles.firstImage}
						/>
						<img
							src='/home/RW-Classic-Studio-NOMAD-KICK-UP.216.webp'
							alt=''
							className={styles.secondImage}
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Nomade

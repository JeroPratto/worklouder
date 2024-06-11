import React from 'react'
import styles from './NomadeFooter.module.css'
import { OneThirdCard } from '../OneThirdCard'

const NomadeFooter: React.FC = () => {
	return (
		<div className={styles.container}>
			<p className={styles.titleSection}>
				<span>
					Know Productiviy - Efficiency - Passion - Creativity with no limits.
				</span>{' '}
				A crisp IPS display boasts everything from pomodoro timer, to a playful
				Tamagotchi-style companion, a trusty clock and much more.
			</p>
			<div className={styles.grid}>
				<OneThirdCard
					bgColor='#EDFF00'
					textColor='#000'
					title={['Backed', 'by science']}
					desc={
						<>
							<strong>The integrated pomodoro timer</strong> leverages a
							scientifically proven work/rest methodology that is adaptable to
							any workflow – empowering you to accomplish more in less time
						</>
					}
				/>
				<div className={styles.twoThirds}>
					<Video src='/product-page/nomade/Pomodoro-tmr.mp4' />
				</div>
				<div className={styles.oneThird}>
					<Video src='/product-page/nomade/caps-press_1.mp4' />
				</div>
				<div className={`${styles.oneThird} ${styles.mxContainer}`}>
					<img src='/product-page/nomade/MX.webp' alt='' />
					<div className={styles.mxDesc}>
						<p className={styles.mx}>MX</p>
						<p className={styles.mxText}>
							Atomic <br /> Gateron™
						</p>
					</div>
				</div>
				<OneThirdCard
					bgColor='#DFDFDF'
					textColor='#000'
					title={['Mechanical &', 'hotswap']}
					desc={
						<>
							<strong>
								We redesigned our custom keycaps to hug your fingertips even
								more perfectly than before
							</strong>
							. Mounted on our custom tuned "Atomic" MX Gateron hotswap
							switches, so you can try different switches without needing to
							desolder them.
						</>
					}
				/>
				<OneThirdCard
					bgColor='#1D1D1D'
					textColor='#fff'
					title={['No hablo English?', 'Pas de probleme.']}
					desc={
						<>
							<strong>"E" for Every nomad out there.</strong>. With dual layout
							ISO/ANSI, typing with your native layout is no probleme.
						</>
					}
				/>
				<div className={styles.twoThirds}>
					<img src='/product-page/nomade/Language-chalk.webp' alt='' />
				</div>
			</div>
		</div>
	)
}

export default NomadeFooter

const Video = ({ src }: { src: string }) => {
	return <video autoPlay muted playsInline loop src={src}></video>
}

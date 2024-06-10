import React from 'react'
import styles from './Knob1Footer.module.css'
import { OneThirdCard } from '../OneThirdCard'

const Knob1Footer: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.containerNonCarousel}>
				<picture>
					<source
						srcSet='/product-page/knob1/carousel-image-mobile.webp'
						media='(max-width:768px)'
					/>
					<img src='/product-page/knob1/carousel-image.webp' alt='' />
				</picture>
			</div>
			<p className={styles.titleSection}>
				<span>
					The Knob / k•no•b•1 is a low-profile mechanical keyboard being
					designed by 3D Artist and Motion Designer{' '}
					<span style={{ color: '#ff4d00' }}>Ben Fryc</span>, and developed by
					Work Louder.
				</span>{' '}
				Evoking the look of both classic and modern technology, the k•no•b•1 is
				designed to be a beautiful and functional part of your every day
				workflow.
			</p>
			<div className={styles.grid}>
				<div className={styles.twoThirds}>
					<img src='/product-page/knob1/grid-footer.webp' alt='' />
				</div>
				<OneThirdCard
					bgColor='#ff4d00'
					textColor='#000'
					desc={
						<>
							<strong>
								A 100x310px full color screen with customizable software
								features.
							</strong>
							<br />
							<br />
							Timer / Custom Wallpapers / More to come
						</>
					}
					title={['Pixel pefect', 'crispy display']}
				/>
				<div className={styles.column}>
					<OneThirdCard
						totalWidth
						bgColor='#1D1D1D'
						textColor='#fff'
						desc={
							<>
								<strong>
									Built with an aluminum top and bottom shell for maximum
									durability.
								</strong>
								<br />
								<br />
								The k•no•b•1 have uniquely designed keycaps mounted on custom
								tuned MX Gateron hotswap switches and two multi-function knobs.
							</>
						}
						title={['Full CNC', 'high grade build']}
					/>
					<div className={styles.oneThirdSpecial}>
						<img src='/product-page/knob1/grid-one.webp' alt='' />
					</div>
				</div>
				<div className={`${styles.twoThirds} ${styles.specialHeight}`}>
					<img src='/product-page/knob1/grid-two.webp' alt='' />
				</div>
			</div>
		</div>
	)
}

export default Knob1Footer

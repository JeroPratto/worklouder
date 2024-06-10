import React from 'react'
import styles from './CreatorMicroFooter.module.css'
import { OneThirdCard } from '../OneThirdCard'

const CreatorMicroFooter: React.FC = () => {
	return (
		<div className={styles.container}>
			<p className={styles.titleSection}>
				<span>
					This is everything you love and want from the Creator Board, and a
					little more,
				</span>{' '}
				distilled into a single compact device that is just as modular as the
				rest.
			</p>
			<div className={styles.grid}>
				<OneThirdCard
					bgColor='#AF50FF'
					textColor='#000'
					desc={
						<>
							<strong>Build your muscle memory faster, </strong>
							with 2 analogue and clickable dials, which can be mapped to your
							most used +/- alterations.
							<br />
							<br />
							Font size, brush size, zoom, hardness, send to back/front, and
							*more* at the turn of a dial.
						</>
					}
					title={['Stay in', 'the zone']}
				/>
				<div className={styles.twoThirds}>
					<img src='/product-page/creator-micro/Micro-5-2048x1365.png' alt='' />
				</div>
				<div className={styles.twoThirds}>
					<img src='/product-page/creator-micro/Micro-6-2048x1365.png' alt='' />
				</div>
				<OneThirdCard
					bgColor='#1D1D1D'
					textColor='#fff'
					desc={
						<>
							<strong>Command all your shortcuts, </strong>
							for all your programs, from one device with access to 4 discrete
							layers via the <strong>capacitive touch sensor.</strong>
							<br />
							<br />
							<strong>
								Each of your layers can be configured with the VIA configurator{' '}
							</strong>
							– making creating your perfect keymap a matter of seconds, not
							hours.
						</>
					}
					title={['More', 'is more']}
				/>
				<OneThirdCard
					bgColor='#BFBFBF'
					textColor='#000'
					desc={
						<>
							The Creator Micro uses a custom CNC aluminum weight and a frosted
							polycarbonate case to house its unique 4 layer PCB, resulting in{' '}
							<strong>impeccable build quality.</strong>
							<br />
							<br />
							Last, but not least, the full gamut per key{' '}
							<strong>RBG backlight and underglow</strong> enables you have
							visual consistency across all your RGB enabled devices.
						</>
					}
					title={['Have it all.', 'Design and utility']}
				/>
				<div className={styles.twoThirds}>
					<img src='/product-page/creator-micro/Start-Micro-full.jpg' alt='' />
				</div>
			</div>
		</div>
	)
}

export default CreatorMicroFooter

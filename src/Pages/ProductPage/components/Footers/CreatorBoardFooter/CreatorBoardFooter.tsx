import React from 'react'
import styles from './CreatorBoardFooter.module.css'
import { OneThirdCard } from '../OneThirdCard'

const CreatorBoardFooter: React.FC = () => {
	return (
		<div className={styles.container}>
			<p className={styles.titleSection}>
				<span>Designed for those who defy limits and change the world,</span>{' '}
				the Creator Board is a keyboard like nothing you've ever seen before.
			</p>
			<div className={styles.grid}>
				<OneThirdCard
					bgImage='linear-gradient(170deg, #FFD500 4%, #AF50FF 81%)'
					textColor='#000'
					desc={
						<>
							Whether you are an illustrator, 3D designer, photographer,
							developer, or streamer{' '}
							<strong> you need tools that augment your creativity,</strong> and
							help you realize your vision.
							<br />
							<br />
							<strong>We built the only keyboard that adapts to you.</strong>
						</>
					}
					title={['Work louder', 'than you talk!']}
				/>
				<div className={styles.twoThirds}>
					<img
						src='/product-page/creator-board/R4-CB-1-rgb-2048x1365.png'
						alt=''
					/>
				</div>
				<div className={styles.twoThirds}>
					<img src='/product-page/creator-board/R4-CB-6-2048x1365.png' alt='' />
				</div>
				<OneThirdCard
					bgColor='#1D1D1D'
					textColor='#fff'
					desc={
						<>
							<strong>Blaze through design iterations</strong> by easily
							assigning a completely custom keyboard layout for your short-cuts
							and macros, or modify an existing default layout for any of our
							supported software.
						</>
					}
					title={['Harness the power', 'of your inner short-cut ninja']}
				/>
				<div className={styles.twoThirds}>
					<img src='/product-page/creator-board/R4-CB-5-2048x1365.png' alt='' />
				</div>
				<OneThirdCard
					bgColor='#BFBFBF'
					textColor='#000'
					desc={
						<>
							<strong>Give a spin to one of the encoders</strong> to enter a new
							way of using quick commands.
							<br />
							<br />
							Use them for zooming, change brush size, scroll your history,
							change a color grade on-the-go or to control your media setup.
						</>
					}
					title={['Stay focused and', 'never look away anymore']}
				/>
			</div>
		</div>
	)
}

export default CreatorBoardFooter

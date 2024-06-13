import React from 'react'
import styles from './Footer.module.css'
import Marquee from 'react-fast-marquee'

const Footer: React.FC = () => {
	return (
		<>
			<Marquee className={styles.marquee} speed={200} autoFill>
				Human after all
				<img src='/icons/hand-goodbye.svg' alt='' /> .
			</Marquee>
			<footer className={styles.footer}>
				<div className={styles.logos}>
					<img src='/footer/avatar.webp' alt='' className={styles.avatar} />
					<img
						src='/header/wl-logo-full.svg'
						alt=''
						className={styles.workLogo}
					/>
				</div>
				<div className={styles.links}>
					<p className={styles.copy}>©2024 Work Louder Inc.</p>
					<ul className={styles.list}>
						<li>Affiliate program</li>
						<li>Terms of services</li>
						<li>Return policy</li>
						<li>Terms and conditions</li>
						<li>Privacy policy</li>
						<li>Press</li>
					</ul>
					<p className={styles.updates}>View updates</p>
				</div>
			</footer>
		</>
	)
}

export default Footer

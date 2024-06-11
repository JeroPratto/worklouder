import React from 'react'
import styles from './Features.module.css'

export type FeaturesProps = {
	features: { icon: string; text: string }[]
}

const Features: React.FC<FeaturesProps> = ({ features }) => {
	return (
		<ul className={styles.features}>
			{features.map((f, index) => (
				<li
					className={`${styles.feature} ${
						index % 2 === 0 ? styles.left : styles.right
					}`}
					key={index}
				>
					<p>
						<img src={f.icon} alt='' className={styles.featureIcon} />
						{f.text}
					</p>
				</li>
			))}
		</ul>
	)
}

export default Features

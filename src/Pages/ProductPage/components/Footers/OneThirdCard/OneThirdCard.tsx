import React, { ReactNode } from 'react'
import styles from './OneThirdCard.module.css'

export type OneThirdCardProps = {
	title: string[]
	desc: ReactNode
	bgColor?: string
	bgImage?: string
	textColor: string
	totalWidth?: boolean
}

const OneThirdCard: React.FC<OneThirdCardProps> = ({
	title,
	desc,
	bgColor,
	bgImage,
	textColor,
	totalWidth,
}: OneThirdCardProps) => {
	return (
		<div
			className={`${styles.container} ${totalWidth ? styles.totalWidth : ''}`}
			style={{
				backgroundColor: bgColor,
				color: textColor,
				backgroundImage: bgImage,
			}}
		>
			<p className={styles.title}>
				{title[0]} <br /> {title[1]}
			</p>
			<p className={styles.desc}>{desc}</p>
		</div>
	)
}

export default OneThirdCard

import React from 'react'
import styles from './HeaderDropdown.module.css'
import arrow from '/icons/filled-arrow.svg'
import { HeaderLink } from '../utils/getLinksHeader'
import { Link } from 'react-router-dom'

export type DropdownHeaderProps = {
	headerLink: HeaderLink
}

const DropdownHeader: React.FC<DropdownHeaderProps> = ({ headerLink }) => {
	return (
		<div className={styles.dropdown}>
			<p className={styles.navLink}>
				{headerLink.title}
				<span className={styles.containerImage}>
					<img
						src={arrow}
						alt='hover and open menu'
						className={styles.iconArrow}
					/>
				</span>
			</p>
			<div className={styles.space}></div>
			<ul className={styles.list}>
				{headerLink.list.map((link, index) => (
					<li className={styles.item} key={index}>
						<Link to={link.link}>{link.text}</Link>
					</li>
				))}
			</ul>
		</div>
	)
}

export default DropdownHeader

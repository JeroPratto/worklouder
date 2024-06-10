import React, { useState } from 'react'
import styles from './MobileHeaderDropdown.module.css'
import arrow from '/icons/filled-arrow.svg'
import { HeaderLink } from '../utils/getLinksHeader'
import { Link } from 'react-router-dom'

export type MobileHeaderDropdownProps = {
	headerLink: HeaderLink
	closeMenu: () => void
}

const MobileHeaderDropdown: React.FC<MobileHeaderDropdownProps> = ({
	headerLink,
	closeMenu,
}) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleStateList = () => setIsOpen(!isOpen)
	const handleClose = () => {
		setIsOpen(false)
		closeMenu()
	}
	return (
		<div className={styles.dropdown}>
			<button className={styles.navButton} onClick={toggleStateList}>
				{headerLink.title}
				<span className={styles.containerImage}>
					<img
						src={arrow}
						alt='hover and open menu'
						className={styles.iconArrow}
					/>
				</span>
			</button>
			<div
				className={`${styles.listContainer}  ${isOpen ? styles.openList : ''}`}
			>
				<ul className={styles.list}>
					{headerLink.list.map((link, index) => (
						<li className={styles.item} key={index}>
							<Link to={link.link} onClick={handleClose}>
								{link.text}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default MobileHeaderDropdown

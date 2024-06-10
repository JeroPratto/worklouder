import React, { useEffect, useRef } from 'react'
import { MobileHeaderDropdown } from '../MobileHeaderDropdown'
import { Link } from 'react-router-dom'
import styles from '../../Header.module.css'
import getLinksHeader from '../utils/getLinksHeader'

export type MobileHeaderProps = {
	isOpen: boolean
	setIsOpen: (isOpen: boolean) => void
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ isOpen, setIsOpen }) => {
	const links = getLinksHeader()
	const containerRef = useRef<HTMLDivElement | null>(null)
	const closeMenu = () => setIsOpen(false)
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				!containerRef.current.contains(event.target as Node)
			) {
				if (isOpen) setIsOpen(false)
			}
		}
		document.addEventListener('click', handleClickOutside)
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isOpen, setIsOpen])
	return (
		<nav
			className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ''}`}
			ref={containerRef}
		>
			<div className={styles.containerMobileNav}>
				<Link to='/' className={styles.navLink}>
					Home
				</Link>
				<MobileHeaderDropdown headerLink={links[0]} closeMenu={closeMenu} />
				<MobileHeaderDropdown headerLink={links[1]} closeMenu={closeMenu} />
				<Link to='/shop' className={styles.navLink} onClick={closeMenu}>
					Shop
				</Link>
				<MobileHeaderDropdown headerLink={links[2]} closeMenu={closeMenu} />
			</div>
		</nav>
	)
}

export default MobileHeader

import React from 'react'
import styles from '../../Header.module.css'
import { Link, useLocation } from 'react-router-dom'
import HeaderDropdown from '../DropdownHeader/HeaderDropdown'
import getLinksHeader from '../utils/getLinksHeader'

export type DesktopHeaderProps = {
	isSticky: boolean
}

const DesktopHeader: React.FC<DesktopHeaderProps> = ({ isSticky }) => {
	const links = getLinksHeader()
	const { pathname } = useLocation()
	return (
		<nav className={`${styles.nav} ${isSticky ? styles.stickyNav : ''}`}>
			<Link
				to='/'
				className={`${styles.navLink} ${
					pathname === '/' ? styles.current : ''
				}`}
			>
				Home
			</Link>
			<HeaderDropdown headerLink={links[0]} />
			<HeaderDropdown headerLink={links[1]} />
			<Link
				to='/shop'
				className={`${styles.navLink} ${
					pathname === '/shop' ? styles.current : ''
				}`}
			>
				Shop
			</Link>
			<HeaderDropdown headerLink={links[2]} />
		</nav>
	)
}

export default DesktopHeader

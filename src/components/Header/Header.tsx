import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { DesktopHeader } from './components/DesktopHeader'
import { HeaderCart } from './components/HeaderCart'
import { MobileHeader } from './components/MobileHeader'
import logo from '/header/logo-worklouder-black.svg'
import logoMobile from '/header/wl-logo-full.svg'
import { Cart } from '../Cart'

const Header: React.FC = () => {
	const [isSticky, setIsSticky] = useState(false)
	const [isOpen, setIsOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY
			setIsSticky(scrollTop >= 15)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			<Cart />
			<div className={styles.header}>
				<Link to='/' aria-label='Go to home' className={styles.linkLogo}>
					<picture>
						<source srcSet={logoMobile} media='(max-width:768px)' />
						<img src={logo} alt='Go to home' />
					</picture>
				</Link>
				<DesktopHeader isSticky={isSticky} />
				{/* Header cart is for mobile and desktop */}
				<HeaderCart isOpen={isOpen} isSticky={isSticky} setIsOpen={setIsOpen} />
				<MobileHeader isOpen={isOpen} setIsOpen={setIsOpen} />
			</div>
		</>
	)
}

export default Header

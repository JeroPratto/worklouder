import React from 'react'
import styles from '../../Header.module.css'
import cartIcon from '/icons/cart.svg'
import menuBar from '/icons/menu-bar.svg'
import close from '/icons/close.svg'
import { useOpenCartStore } from '@/store/openCartStore'

export type HeaderCartProps = {
	isSticky: boolean
	isOpen: boolean
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const HeaderCart: React.FC<HeaderCartProps> = ({
	isSticky,
	isOpen,
	setIsOpen,
}) => {
	const toggleOpenState = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	) => {
		event.stopPropagation()
		setIsOpen(!isOpen)
	}
	const openCart = useOpenCartStore((state) => state.openCart)
	const handleOpenCart = (event: React.MouseEvent) => {
		event.stopPropagation()
		openCart()
	}
	return (
		<div className={`${styles.cart} ${isSticky ? styles.stickyCart : ''}`}>
			<button
				className={styles.cartButton}
				onClick={handleOpenCart}
				aria-label='open cart'
			>
				<img src={cartIcon} alt='' />
			</button>
			{/* mobile */}
			<button
				onClick={toggleOpenState}
				className={styles.menuButton}
				aria-label={isOpen ? 'Close menu' : 'Open menu'}
			>
				<img src={isOpen ? close : menuBar} alt='' />
			</button>
		</div>
	)
}

export default HeaderCart

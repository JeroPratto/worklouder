import { ProductState, useCartStore } from '@/store/cartStore'
import { useOpenCartStore } from '@/store/openCartStore'
import React, { useEffect, useRef, useState } from 'react'
import styles from './Cart.module.css'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Cart: React.FC = () => {
	const isOpen = useOpenCartStore((state) => state.isOpen)
	const closeCart = useOpenCartStore((state) => state.closeCart)
	const purchase = useCartStore((state) => state.purchase)
	const { products, totalPrice } = useCartStore()
	const [disabled, setDisabled] = useState(products.length === 0)
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		setDisabled(products.length === 0)
	}, [products.length])

	const handleClickOutside = (event: MouseEvent) => {
		if (ref.current && !ref.current.contains(event.target as Node)) closeCart()
	}
	const handlePurchase = () => {
		purchase()
		toast.success('Your purchase is on its way', {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: 'light',
		})
		closeCart()
	}

	useEffect(() => {
		if (isOpen) {
			document.addEventListener('click', handleClickOutside)
		} else {
			document.removeEventListener('click', handleClickOutside)
		}
		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isOpen])

	return (
		<>
			<ToastContainer />
			<div
				className={`${styles.container} ${isOpen ? styles.open : ''}`}
				ref={ref}
			>
				<div className={styles.header}>
					<p>Shopping cart</p>
					<button
						className={styles.closeCart}
						aria-label='close cart'
						onClick={closeCart}
					>
						<img src='/icons/close-white.svg' alt='test' />
					</button>
				</div>
				{disabled && (
					<div className={styles.noItemsContainer}>
						<div className={styles.noItems}>
							<img src='/icons/cart-empty.svg' alt='' />
							<p>Your cart is empty</p>
						</div>
					</div>
				)}
				<div className={styles.containerList}>
					<div className={styles.list}>
						{products.map((p, index) => (
							<ProductCart {...p} key={index} />
						))}
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.textareaContainer}>
						<label className={styles.textareaLabel}>Checkout notes</label>
						<textarea placeholder='Enter note for checkout' />
					</div>
					<div className={styles.code}>
						<input placeholder='ENTER DISCOUNT CODE' disabled={disabled} />
						<button
							disabled={disabled}
							className={disabled ? '' : styles.ableApply}
						>
							Apply
						</button>
					</div>

					<p className={styles.subtotal}>
						Subtotal:{' '}
						<span className={styles.price}>US${totalPrice.toFixed(2)}</span>
					</p>

					<button
						className={`${styles.checkout} ${disabled ? '' : styles.able}`}
						disabled={disabled}
						onClick={handlePurchase}
					>
						Begin checkout
					</button>
				</div>
			</div>
		</>
	)
}

export default Cart

const ProductCart = (product: ProductState) => {
	const addQuantity = useCartStore((state) => state.addQuantity)
	const lessQuantity = useCartStore((state) => state.lessQuantity)
	const deleteProduct = useCartStore((state) => state.deleteProduct)
	let settings = ''
	for (let i = 0; i < product.settings.length; i++) {
		if (i === 0) settings = product.settings[i].value
		else settings = settings + ' / ' + product.settings[i].value
	}
	const handleLess = (event: React.MouseEvent) => {
		event.stopPropagation()
		if (product.quantity === 1) deleteProduct(product.id, product.idSettings)
		else lessQuantity(product.id, product.idSettings)
	}
	const handleAdd = () => {
		addQuantity(product.id, product.idSettings)
	}
	const handleRemove = (event: React.MouseEvent) => {
		event.stopPropagation()
		deleteProduct(product.id, product.idSettings)
	}

	return (
		<div className={styles.item}>
			<div className={styles.containerImage}>
				<img src={product.urlImage} alt={product.name} />
			</div>
			<div className={styles.information}>
				<button className={styles.remove} onClick={handleRemove}>
					Remove
				</button>
				<p className={styles.name}>{product.name}</p>
				<p className={styles.settings}>{settings}</p>
				<div className={styles.informationFooter}>
					<div className={styles.changeQuantity}>
						<button className={styles.leftBtn} onClick={handleLess}>
							-
						</button>
						<div className={styles.quantity}>{product.quantity}</div>
						<button className={styles.rightBtn} onClick={handleAdd}>
							+
						</button>
					</div>
					<div className={styles.priceContainer}>
						<p className={styles.currentPrice}>
							US${(product.price.currentPrice * product.quantity).toFixed(2)}
						</p>
						{product.price.sale && (
							<p>
								<span className={styles.salePrice}>
									US${product.price.salePrice!.toFixed(2)}
								</span>
								<span className={styles.sale}>Sale!</span>
							</p>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

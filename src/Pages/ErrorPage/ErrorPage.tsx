import React from 'react'
import styles from './ErrorPage.module.css'
import { Link } from 'react-router-dom'

const ErrorPage: React.FC = () => {
	return (
		<div className={styles.container}>
			<div className={styles.overlay}></div>
			<div className={styles.main}>
				<div className={styles.information}>
					<h1 className={styles.title}>
						Oooops! <br />
						Page not found
					</h1>
					<div className={styles.containerImage}>
						<img
							src='/product-page/error-page/diagonal-white-arrow.png'
							alt=''
						/>
					</div>
					<div className={styles.btns}>
						<Link to='/'>Back to home</Link>
						<Link to='/'>Join Discord Community</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ErrorPage

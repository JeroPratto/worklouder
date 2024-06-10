import React from 'react'
import { HomeHero } from './components/HomeHero'
import Marquee from 'react-fast-marquee'
import styles from './Home.module.css'
import { Nomade } from './components/Nomade'
import { HomeProducts } from './components/HomeProducts'
import { OurProductsSection } from './components/OurProductsSection'

const Home: React.FC = () => {
	return (
		<div>
			<HomeHero />
			<Marquee className={styles.marquee} speed={200}>
				Know Productivity <img src='/icons/bolt.svg' alt='' /> Efficiency{' '}
				<img src='/icons/configuration.svg' alt='' /> Passion{' '}
				<img src='/icons/heart-fire.svg' alt='' /> Creativity{' '}
				<img src='/icons/paint.svg' alt='' /> with no limits. -
			</Marquee>
			<Nomade />
			<HomeProducts />
			<Marquee className={styles.marquee} speed={200}>
				Work Louder Inc. © 2024 -
				<img src='/icons/world.svg' alt='' /> - all work & no play -
			</Marquee>
			<OurProductsSection />
		</div>
	)
}

export default Home

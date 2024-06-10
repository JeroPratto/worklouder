import React, { useCallback, useEffect, useState } from 'react'
import styles from './ProductPageCarousel.module.css'
import useEmblaCarousel from 'embla-carousel-react'

export type ProductPageCarouselProps = {
	images: string[]
}

const ProductPageCarousel: React.FC<ProductPageCarouselProps> = ({
	images,
}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
	const [current, setCurrent] = useState(0)

	const onSelect = useCallback(() => {
		if (emblaApi) {
			setCurrent(emblaApi.selectedScrollSnap())
		}
	}, [emblaApi])

	useEffect(() => {
		if (!emblaApi) return
		emblaApi.on('select', onSelect)
		onSelect()
		return () => {
			emblaApi.off('select', onSelect)
		}
	}, [emblaApi, onSelect])

	const goTo = (index: number) => {
		if (!emblaApi) return
		emblaApi.scrollTo(index)
	}

	return (
		<div className={styles.container}>
			<div className={styles.embla} ref={emblaRef}>
				<div className={styles.emblaContainer}>
					{images.map((url, index) => (
						<div className={styles.slide} key={index}>
							<img src={url} alt='' />
						</div>
					))}
				</div>
				<div className={styles.containerBtns}>
					{emblaApi?.scrollSnapList().map((_, index) => (
						<button
							key={index}
							onClick={() => goTo(index)}
							className={index === current ? styles.current : ''}
							aria-label={`go to image number ${index}`}
						></button>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProductPageCarousel

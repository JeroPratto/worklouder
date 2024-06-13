import { Suspense, lazy } from 'react'
import SkeletonShop from './SkeletonShop'

const Shop = lazy(() => import('./Shop'))

const LazyShop = () => {
	return (
		<Suspense fallback={<SkeletonShop />}>
			<Shop />
		</Suspense>
	)
}

export default LazyShop

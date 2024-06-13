import React, { Suspense, lazy } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import getProductsById from '../../utils/getProductsById'
import SkeletonProductPage from './SkeletonProductPage'

const ProductPage = lazy(() => import('../ProductPage/ProductPage'))

const ProductPageGuard: React.FC = () => {
	const { id } = useParams()
	const product = getProductsById(id)

	if (!product || product === -1) return <Navigate replace to='/404' />
	return (
		<Suspense fallback={<SkeletonProductPage />}>
			<ProductPage product={product} />
		</Suspense>
	)
}

export default ProductPageGuard

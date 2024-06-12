import React, { lazy } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import getProductsById from '../../utils/getProductsById'

const ProductPageGuard: React.FC = () => {
	const { id } = useParams()
	const product = getProductsById(id)
	const ProductPage = lazy(() => import('../ProductPage/ProductPage'))

	if (!product || product === -1) return <Navigate replace to='/404' />
	return <ProductPage product={product} />
}

export default ProductPageGuard

import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import getProductsById from '../../utils/getProductsById'
import ProductPage from '../ProductPage/ProductPage'

const ProductPageGuard: React.FC = () => {
	const { id } = useParams()
	const product = getProductsById(id)

	if (!product || product === -1) return <Navigate replace to='/404' />
	return <ProductPage product={product} />
}

export default ProductPageGuard

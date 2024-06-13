import { Suspense, lazy, useEffect } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom'
import { Home } from './Pages/Home'
import { ProductPageGuard } from './Pages/ProductPageGuard'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useCartStore } from './store/cartStore'
import LazyShop from './Pages/Shop/LazyShop'

function App() {
	const { statusSynchronizer } = useCartStore()
	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === 'products') {
				statusSynchronizer()
			}
		}
		window.addEventListener('storage', handleStorageChange)
		return () => {
			window.removeEventListener('storage', handleStorageChange)
		}
	})

	const ErrorPage = lazy(() => import('./Pages/ErrorPage/ErrorPage'))

	return (
		<BrowserRouter>
			<ScrollTop />
			<Header />
			<Suspense>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/:id' element={<ProductPageGuard />} />
					<Route path='/shop' element={<LazyShop />} />
					<Route path='*' element={<HandleErrorPage />} />
					<Route path='/404' element={<ErrorPage />} />
				</Routes>
			</Suspense>
			<Footer />
		</BrowserRouter>
	)
}

export default App

const HandleErrorPage = () => {
	return <Navigate replace to='/404' />
}

const ScrollTop = () => {
	const { pathname } = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])
	return null
}

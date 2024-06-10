import {
	BrowserRouter,
	Navigate,
	Route,
	Routes,
	useLocation,
} from 'react-router-dom'
import { Header } from './components/Header'
import { Home } from './Pages/Home'
import { Footer } from './components/Footer'
import { ProductPageGuard } from './Pages/ProductPageGuard'
import { Shop } from './Pages/Shop'
import { ErrorPage } from './Pages/ErrorPage'
import { useCartStore } from './store/cartStore'
import { useEffect } from 'react'

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

	return (
		<BrowserRouter>
			<ScrollTop />
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:id' element={<ProductPageGuard />} />
				<Route path='/shop' element={<Shop />} />
				<Route path='*' element={<HandleErrorPage />} />
				<Route path='/404' element={<ErrorPage />} />
			</Routes>
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

import { useEffect, useState } from 'react'
import { BrowserRouter , Routes , Route  } from 'react-router-dom'
import IndexPage from '../pages/Index'
import ProductsPage from '../pages/Products'
import BasketPage from '../pages/Basket'

import axios from 'axios'

function Index() {

	const [products, setProducts] = useState()
	const [basket, setBasket] = useState([])

	useEffect(()=>{
		 axios.get("./data/products.json")
		 .then (response => {
			setProducts(response.body)
		 })
	})



	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<IndexPage/>} > Index  </Route>
					<Route path='/products' element={<ProductsPage/>} > Products  </Route>
					<Route path='/basket'  element={<BasketPage/>} > Basket  </Route>
				</Routes>
			</BrowserRouter>
		</div>
	)
}

export default Index

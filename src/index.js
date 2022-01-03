import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sitemap from "./pages/Sitemap";
import Category from './pages/Category'
import Product from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart/Cart";
import CartList from "./components/Cart/CartList";
import CatalogLayout from "./layout/CatalogLayout";
import CartShipping from "./components/Cart/CartShipping";
import Eshop from "./context/Eshop";

class App extends React.Component {
	render() {
		return (
			<Router>
				<Eshop>
					<Header />
					<Routes>
						<Route path="/" element={<Sitemap />}></Route>
						<Route path="/category/:id" element={
							<CatalogLayout>
								<Category />
							</CatalogLayout>
						}>
						</Route>
						<Route path="/product/:id" element={
							<CatalogLayout>
								<Product />
							</CatalogLayout>
						}>
						</Route>
						<Route path="/cart/:id" element={<Cart />}></Route>
						<Route path="/cart/list" element={<CartList />}></Route>
						<Route path="/cart/shipping" element={<CartShipping />}></Route>
						<Route path="/cart/delivery" element={<CartList />}></Route>
						<Route path="/cart/success" element={<CartList />}></Route>
					</Routes>
					<Footer />
				</Eshop >
			</Router>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'))
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sitemap from "./pages/Sitemap";
import Category from './pages/Category'
import CatalogLayout from "./layout/CatalogLayout";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import CartList from "./pages/CartList";
import CartShipping from "./pages/CartShipping";
import CartDelivery from "./pages/CartDelivery";
import CartSuccess from "./pages/CartSuccess";
import Eshop from "./context/Eshop";
import Main from "./layout/Main";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Eshop>
                    <Header />
                    <Main>
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
                            <Route path="/cart/delivery" element={<CartDelivery />}></Route>
                            <Route path="/cart/success" element={<CartSuccess />}></Route>
                        </Routes>
                    </Main>
                    <Footer />
                </Eshop>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'))
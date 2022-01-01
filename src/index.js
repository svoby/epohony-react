import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sitemap from "./pages/Sitemap";
import Category from './pages/Category'
import Product from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CatalogLayout from "./layout/CatalogLayout";

class App extends React.Component {
  render() {
    return <Router>
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
      </Routes>
      <Footer />
    </Router>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
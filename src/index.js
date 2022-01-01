import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sitemap from "./pages/Sitemap";
import Category from './pages/Category'
import Product from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Sitemap />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/category/:id" element={<Category />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
      <Footer />
    </Router>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from './pages/Catalog'
import Product from "./pages/Product";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
        <Route path="/product" element={<Product />}></Route>
      </Routes>
      <Footer />
    </Router>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))

// function Teaser(props) {
//   return <>
//     <hr />
//     <h1>{props.title}</h1>
//     <hr />
//   </>
// }

// function SvgSprite(props) {
//   return <span className="icon" />
// }

// function Button(props) {
//   function handleSimpleClick() {
//     console.log(`Button name: ${props.name}`)
//   }
//   return <button {...props}>{props.children}</button>
// }

// function handleButtonClick() {
//   console.log("Simple Button on click!")
// }

// class ButtonMore extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleMoreClick = this.handleMoreClick.bind(this)
//   }

//   handleMoreClick(e) {
//     console.log("Button ID: " + e.target.dataset.id)
//   }

//   render() {
//     return <Button {...this.props} onClick={e => this.handleMoreClick(e)}>{this.props.label}<SvgSprite /></Button>
//   }
// }

// ButtonMore.defaultProps = {
//   className: "btn"
// }

// class LoginButton extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { isLogged: false }
//     this.toggle = this.toggle.bind(this)
//   }

//   toggle() {
//     this.setState((prevState) => ({ isLogged: !prevState.isLogged }))
//   }

//   render() {
//     return <Button onClick={this.toggle}>{this.state.isLogged ? 'Logout' : 'Login'}</Button>
//   }
// }

// function ItemList() {
//   const numbers = [1, 2, 3, 4, 5]
//   const items = numbers.map((number, key) =>
//     <li key={key.toString()}>{number}</li>
//   )
//   return <ul>{items}</ul>
// }

// ReactDOM.render(
//   <App>
//     <Header />
//     <Teaser title="Homepage" />
//     <Button name="btn0" type="submit" className="btn btn-primary">Test 0</Button>
//     <Button name="btn1" type="submit" className="btn btn-primary" onClick={handleButtonClick}>Test 1</Button>
//     <ButtonMore data-id="1" name="btnMore" label="Show more!" onClick={() => this.handleShowmore()} />
//     <div>
//       <LoginButton />
//     </div>
//     <ItemList />
//     <Footer />
//   </App>, document.getElementById('root'))
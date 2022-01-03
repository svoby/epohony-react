import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "../layout/Grid";
import { UserIcon, ShoppingCartIcon, MenuIcon } from '@heroicons/react/outline';
import ShopContext from "../context/ShopContext";

export default function Header(props) {

  const { cart } = useContext(ShopContext)
  const totalCount = cart.reduce((prev, current) => { return prev + current.quantity }, 0)
  const totalPrice = cart.reduce((prev, current) => { return prev + current.price * current.quantity }, 0)

  return (
    <header className="main bg-gradient-primary py-3 text-white">
      <Container>
        <Link to="/"><img className="logo-main" src="/assets/images/logo-site.svg" alt="ePohony" width="145" /></Link>
        <div className="d-none d-lg-block h5 font-weight-normal text-white mb-0">Pohony bran, vrat a parkovací zábrany</div>
        <div>
          <Link to="/user" className="d-inline-flex align-items-center text-white text-micro hover-secondary">
            <span className="btn-primary btn-circle bg-gradient-secondary border-0 sx-40 mr-2"><UserIcon className="ico sx-24" /></span>
            <span className="d-none d-md-block"><span className="fotn-weight-bold d-block">Přihlásit se</span>Můj účet</span>
          </Link>
          <Link to="/cart/list" className="d-inline-flex align-items-center text-white text-micro ml-1 ml-md-4 hover-secondary" href="./cart.html">
            <span className="btn-primary btn-circle bg-gradient-secondary border-0 sx-40 mr-2 position-relative"><ShoppingCartIcon className="ico sx-24" /><span className="bg-danger text-white icon-box sx-24 rounded-circle small font-weight-bold position-absolute" style={{ top: "-0.8rem", right: "-0.2rem" }}>{totalCount}</span></span>
            <span className="d-none d-md-block"><span className="font-weight-bold d-block">{totalPrice} Kč</span>Košík</span>
          </Link>
          <button className="d-md-none btn-primary btn-circle bg-gradient-secondary border-0 sx-40 js-offcanvas" data-target-id="#offcanvasEnd"><MenuIcon className="ico sx-24"></MenuIcon></button>
        </div>
      </Container>
    </header>
  )
}
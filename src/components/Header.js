import React from "react";
import { Link } from "react-router-dom";

export default function Header(props) {
  return <header className="main bg-gradient-primary py-3 text-white">
    <div className="container">
      <Link to="/"><img className="logo-main" src="assets/images/logo-site.svg" alt="ePohony" width="145" /></Link>
      <div className="d-none d-lg-block h5 font-weight-normal text-white mb-0">Pohony bran, vrat a parkovací zábrany</div>
      <div>
        <a className="d-inline-flex align-items-center text-white text-micro hover-secondary" href="./user-info.html">
          <span className="btn-primary btn-circle bg-gradient-secondary border-0 sx-40 mr-2"></span>
          <span className="d-none d-md-block"><span className="fotn-weight-bold d-block">Přihlásit se</span>Můj účet</span>
        </a>
        <a className="d-inline-flex align-items-center text-white text-micro ml-1 ml-md-4 hover-secondary" href="./cart.html">
          <span className="btn-primary btn-circle bg-gradient-secondary border-0 sx-40 mr-2"></span>
          <span className="d-none d-md-block"><span className="font-weight-bold d-block">23 456 Kč</span>Košík</span>
        </a>
        <button className="d-md-none btn-primary btn-circle bg-gradient-secondary border-0 sx-40 js-offcanvas" data-target-id="#offcanvasEnd"></button>
      </div>
    </div>
  </header>
}

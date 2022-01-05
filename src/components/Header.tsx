import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Container } from "../layout/Grid";
import { UserIcon, ShoppingCartIcon, MenuIcon } from '@heroicons/react/outline';
import { cartPriceReducer, cartQuantityReducer } from "../global.constants";
import ShopContext from "../context/ShopContext";
import OffCanvas from "./OffCanvas/OffCanvas";

export default function Header() {

    const { cart } = useContext(ShopContext)
    const totalCount = cart.reduce(cartQuantityReducer, 0)
    const totalPrice = cart.reduce(cartPriceReducer, 0)
    const [offCanvasShown, setOffCanvasShown] = useState(false)
    const offCanvasTogglerHandler = () => setOffCanvasShown(prevState => !prevState)

    return (
        <>
            <header className="main bg-gradient-primary py-3 text-white">
                <Container>
                    <Link to="/"><img className="logo-main" src="/assets/images/logo-site.svg" alt="ePohony" width="145" /></Link>
                    <div className="d-none d-lg-block h5 font-weight-normal text-white mb-0">The best way to buy the products you love</div>
                    <div>
                        <div className="d-inline-flex align-items-center text-white text-micro hover-secondary">
                            <span className="btn-primary btn-circle bg-gradient-secondary border-0 sx-40 mr-2">
                                <UserIcon className="ico sx-24" />
                            </span>
                            <span className="d-none d-md-block">
                                <span className="fotn-weight-bold d-block">Jan Novák</span> Můj účet
                            </span>
                        </div>
                        <Link to="/cart/list" className="d-inline-flex align-items-center text-white text-micro ml-1 ml-md-4 hover-secondary">
                            <span className="btn-primary btn-circle bg-gradient-secondary border-0 sx-40 mr-2 position-relative">
                                <ShoppingCartIcon className="ico sx-24" />
                                <span className="bg-danger text-white icon-box sx-24 rounded-circle small font-weight-bold position-absolute" style={{ top: "-0.7rem", right: "-0.2rem" }}>{totalCount}</span>
                            </span>
                            <span className="d-none d-md-block">
                                <span className="font-weight-bold d-block">{totalPrice} Kč</span> Košík
                            </span>
                        </Link>
                        <button className="d-md-none btn-primary btn-circle bg-gradient-secondary border-0 sx-40" onClick={offCanvasTogglerHandler}>
                            <MenuIcon className="ico sx-24"></MenuIcon>
                        </button>
                    </div>
                </Container>
            </header>
            <OffCanvas shown={offCanvasShown} togglerHandler={offCanvasTogglerHandler} />
        </>
    )
}
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShopContext from '../../context/ShopContext'
import { Container, Spacer } from '../../layout/Grid'
import SwiperAltProducts from '../Swipers/SwiperAltProducts'
import SwiperProductSales from '../Swipers/SwiperProductSales'
import CartTableRow from './CartTableRow'

function CartList() {

    const navigate = useNavigate()

    return (
        <Container>
            <Spacer size="pt-6" />

            <ShopContext.Consumer>
                {({ cart }) => {

                    // Is cart empty? Show notice
                    if (!cart.length) {
                        return (
                            <div className="alert alert-danger text-center">
                                <div className="py-3">
                                    Váš košík je prázdný.
                                </div>
                                <Link to="/category/1" className='btn btn-primary'>Zobrazit katalog</Link>
                            </div>
                        )
                    }

                    // Cart listing
                    return (
                        <div className="cart-table">
                            <div className="cart-table__row cart-table__row--header">
                                <div className="cart-table__image"></div>
                                <div className="cart-table__name">Produkt</div>
                                <div className="cart-table__amount">Množství</div>
                                <div className="cart-table__price">Cena bez DPH</div>
                                <div className="cart-table__price cart-table__price--vat">Cena s DPH</div>
                                <div className="cart-table__action"></div>
                            </div>
                            {cart.map((product, key) => {
                                return <CartTableRow product={product} key={key} />
                            })}
                        </div>
                    )
                }}
            </ShopContext.Consumer>

            <Spacer size="pt-5" />

            <div className="d-flex justify-content-between align-items-center border-top border-bottom border-200 py-3">
                <span className="btn btn-lg btn-link primary" onClick={() => navigate(-1)}>
                    <ArrowNarrowLeftIcon className='sx-24 mr-2' /> Zpět
                </span>
                <Link to="/cart/shipping" className="btn btn-lg flex-grow-0 btn-green d-inline-flex align-items-center text-uppercase" href="./cart-1.html">
                    Pokračovat <ArrowNarrowRightIcon className='sx-24 ml-2' />
                </Link>
            </div>

            <Spacer size="pt-6" />
            <SwiperProductSales />
            <Spacer size="pt-6" />

            <h3>Alternativní produkty</h3>
            <SwiperAltProducts />
            <Spacer size="pt-5" />

            <h3>Příslušenství</h3>
            <SwiperAltProducts />
            <Spacer size="pt-5" />

        </Container>
    )
}

export default CartList

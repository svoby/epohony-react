import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShopContext from '../../context/ShopContext'
import { Container, Spacer } from '../../layout/Grid'
import { ChevronRightIcon, IdentificationIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/outline'
import SwiperAltProducts from '../Swipers/SwiperAltProducts'
import CartTableRow from './CartTableRow'
import CartIsEmptyWarning from './CartIsEmptyWarning'
import { cartPriceReducer, getPriceWithoutVAT, scrollToTop } from '../../globals'
import CartBottomNavigation from './CartBottonNavigation'

const CartList = () => {

    const navigate = useNavigate()
    const { cart } = useContext(ShopContext)
    const totalPrice = cart.reduce(cartPriceReducer, 0)

    useEffect(() => scrollToTop(), [])

    return (
        <Container>
            <Spacer size="pt-6" />

            <h1 className="h2 text-uppercase">Košík</h1>

            <ShopContext.Consumer>
                {({ cart }) => {

                    // Is cart empty? Show notice
                    if (!cart.length) {
                        return <CartIsEmptyWarning />
                    }

                    // Cart listing
                    return (
                        <>
                            {/* Cart steps */}
                            <CartSteps />
                            <Spacer size="pt-5" />

                            <div className="cart-table">

                                {/* Cart table header */}
                                <div className="cart-table__row cart-table__row--header">
                                    <div className="cart-table__image"></div>
                                    <div className="cart-table__name">Produkt</div>
                                    <div className="cart-table__amount">Množství</div>
                                    <div className="cart-table__price">Cena bez DPH</div>
                                    <div className="cart-table__price cart-table__price--vat">Cena s DPH</div>
                                    <div className="cart-table__action"></div>
                                </div>

                                {/* Cart table body */}
                                {cart.map((product, key) => {
                                    return <CartTableRow product={product} key={key} />
                                })}

                                <Spacer size="pt-4" />

                                {/* Cart table footer */}
                                <div className="cart-table__row cart-table__row--footer">
                                    <div className="cart-table__cupon">
                                        <div className="input-group">
                                            <input className="form-control" type="text" placeholder="Vložte slevový kód" />
                                            <div className="input-group-append">
                                                <button className="btn btn-primary w-100" type="submit" name="cupon">Uplatnit</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="cart-table__price">
                                        <div className="text-micro text-muted">Celkem bez DPH</div>
                                        <div className="font-weight-bold">{getPriceWithoutVAT(totalPrice)} Kč</div>
                                    </div>
                                    <div className="cart-table__price cart-table__price--vat">
                                        <div className="text-micro text-muted">Celkem s DPH</div>
                                        <div className="h5 mb-0 font-weight-bold">{totalPrice} Kč</div>
                                    </div>
                                    <div className="cart-table__action"></div>
                                </div>
                            </div>
                        </>
                    )
                }}
            </ShopContext.Consumer>

            <Spacer size="pt-5" />

            <CartBottomNavigation
                backLinkHandler={() => navigate(-1)}
                nextStepLabel="Pokračovat"
                nextStepLinkTo="/cart/shipping"
                disabled={!cart.length}
            />

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

const CartSteps = () => (
    <div className="bg-white border border-capsule p-2 d-none d-md-block">
        <div className="row gutters-md">
            <div className="col-4">
                <div className="d-flex h-100 align-items-center p-3 text-none border-capsule bg-gradient-primary text-white">
                    <div className="icon-box-inline sx-40 rounded-circle border border-current mr-3">
                        <ShoppingCartIcon className='sx-24' />
                    </div>
                    <div className="line-h-100">1. Cart</div>
                    <div className="d-inline-block sx-32 ml-auto">
                        <ChevronRightIcon className='sx-32' />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <Link to="/cart/shipping" className="d-flex h-100 align-items-center p-3 text-none border-capsule hover-bg-primary-alpha-20">
                    <div className="icon-box-inline sx-40 rounded-circle border border-current mr-3">
                        <TruckIcon className='sx-24' />
                    </div>
                    <div className="line-h-100">2. Shipping / Payment</div>
                    <div className="d-inline-block sx-32 ml-auto">
                        <ChevronRightIcon className='sx-32' />
                    </div>
                </Link>
            </div>
            <div className="col-4">
                <div className="d-flex h-100 align-items-center p-3 text-none border-capsule text-500">
                    <div className="icon-box-inline sx-40 rounded-circle border border-current mr-3">
                        <IdentificationIcon className='sx-24' />
                    </div>
                    <div className="line-h-100">3. Delivery</div>
                </div>
            </div>
        </div>
    </div>
)

export default CartList
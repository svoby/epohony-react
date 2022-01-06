import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ShopContext from '../context/ShopContext'
import { Col, Container, Row, Spacer } from '../layout/Grid'
import { ChevronRightIcon, IdentificationIcon, ShoppingCartIcon, TruckIcon } from '@heroicons/react/outline'
import SwiperAltProducts from '../components/Swipers/SwiperAltProducts'
import CartTableRow from '../components/Cart/CartTableRow'
import CartIsEmptyWarning from '../components/Cart/CartIsEmptyWarning'
import { cartPriceReducer, getPriceWithoutVAT, scrollToTop } from '../global.constants'
import CartBottomNavigation from '../components/Cart/CartBottonNavigation'
import { IconBox, Step, StepsWrapper } from '../components/Cart/CartSteps'

const CartList = () => {

    const navigate = useNavigate()
    const { cart: cart2 } = useContext(ShopContext)
    const totalPrice = cart2.products.reduce(cartPriceReducer, 0)

    useEffect(() => scrollToTop(), [])

    return (
        <Container>
            <Spacer size="pt-6" />

            <h1 className="h2 text-uppercase">Košík</h1>

            <ShopContext.Consumer>
                {({ cart: cart2 }) => {

                    // Is cart empty? Show notice
                    if (!cart2.products.length) {
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
                                {cart2.products.map((product, key) => {
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
                disabled={!cart2.products.length}
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
    <StepsWrapper>
        <Row size="gutters-md">
            <Col size="col-4">
                <Step to="/cart/list" state={'active'}>
                    <IconBox><ShoppingCartIcon className='sx-24' /></IconBox>
                    <div>1. Cart</div>
                    <ChevronRightIcon className='ico sx-32 ml-auto' />
                </Step>
            </Col>
            <Col size="col-4">
                <Step to="/cart/shipping" state={false}>
                    <IconBox><TruckIcon className='sx-24' /></IconBox>
                    <div>2. Shipping</div>
                    <ChevronRightIcon className='ico sx-32 ml-auto' />
                </Step>
            </Col>
            <Col size="col-4">
                <Step to="/cart/delivery" state={'disabled'}>
                    <IconBox><IdentificationIcon className='sx-24' /></IconBox>
                    <div>3. Delivery</div>
                    <ChevronRightIcon className='ico sx-32 ml-auto' />
                </Step>
            </Col>
        </Row>
    </StepsWrapper>
)

export default CartList
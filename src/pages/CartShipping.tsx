import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ShopContext from '../context/ShopContext'
import { Container, Row, Col, Spacer } from '../layout/Grid'
import { CheckIcon, ChevronRightIcon, IdentificationIcon, TruckIcon } from '@heroicons/react/outline'
import SwiperAltProducts from '../components/Swipers/SwiperAltProducts'
import CartIsEmptyWarning from "../components/Cart/CartIsEmptyWarning"
import CartBottomNavigation from '../components/Cart/CartBottonNavigation'
import CartPaymentRow from '../components/Cart/CartPaymentRow'
import { scrollToTop } from '../global.constants'
import { payments, shippings } from '../components/Cart/ShippingConfig'
import CartSummary from '../components/Cart/CartSummary'
import { IconBox, Step, StepsWrapper } from '../components/Cart/CartSteps'
import { ActionType, CartStateType } from '../global.types'

const CartShipping = () => {

    const navigate = useNavigate()
    const { cart, dispatch} = useContext(ShopContext)

    useEffect(() => scrollToTop(), [])

    return (
        <Container>
            <Spacer size="pt-6" />

            <h1 className="h2 text-uppercase">Košík</h1>

            {!cart.products.length ? (
                <CartIsEmptyWarning />
            ) : (
                <>
                    <CartSteps cart={cart} />
                    <Spacer size="pt-5" />

                    <Row>
                        <Col size="col-lg-8 mb-4 mb-lg-0">
                            <h2 className="h5">Výběr dopravy</h2>
                            {shippings.map((item, key) => (
                                <CartPaymentRow
                                    item={item}
                                    selectedId={cart.shipping?.id}
                                    key={key}
                                    groupName="shipping"
                                    onClickHandler={() => dispatch({ type: ActionType.SET_SHIPPING, shipping: item })} />
                            ))}

                            <Spacer size="pt-5" />

                            <h2 className="h5">Výběr platby</h2>
                            {payments.map((item, key) => (
                                <CartPaymentRow
                                    item={item}
                                    selectedId={cart.payment?.id}
                                    key={key}
                                    groupName="payment"
                                    onClickHandler={() => dispatch({ type: ActionType.SET_PAYMENT, payment: item })} />
                            ))}
                        </Col>

                        <Col size="col-lg-4">
                            <div className="pl-lg-4">
                                <h2 className="h5">Shrnutí objednávky</h2>
                                <CartSummary cart={cart} />
                            </div>
                        </Col>
                    </Row>
                </>
            )}

            <Spacer size="pt-5" />

            <CartBottomNavigation
                backLinkHandler={() => navigate(-1)}
                nextStepLabel="Pokračovat"
                nextStepLinkTo="/cart/delivery"
                disabled={cart.payment == null || cart.shipping == null} />
            <Spacer size="pt-6" />

            <h3>Alternativní produkty</h3>
            <SwiperAltProducts />
            <Spacer size="pt-5" />

            <h3>Příslušenství</h3>
            <SwiperAltProducts />
            <Spacer size="pt-5" />

        </Container >
    )
}

const CartSteps = ({ cart } : { cart: CartStateType }) => (
    <StepsWrapper>
        <Row size="gutters-md">
            <Col size="col-4">
                <Step to="/cart/list" state={'false'}>
                    <IconBox><CheckIcon className='sx-24' /></IconBox>
                    <div>1. Cart</div>
                    <ChevronRightIcon className='ico sx-32 ml-auto' />
                </Step>
            </Col>
            <Col size="col-4">
                <Step to="/cart/shipping" state={'active'}>
                    <IconBox><TruckIcon className='sx-24' /></IconBox>
                    <div>2. Shipping</div>
                    <ChevronRightIcon className='ico sx-32 ml-auto' />
                </Step>
            </Col>
            <Col size="col-4">
                <Step to="/cart/delivery" state={(cart.payment == null || cart.shipping == null) ? 'disabled' : false}>
                    <IconBox><IdentificationIcon className='sx-24' /></IconBox>
                    <div>3. Delivery</div>
                    <ChevronRightIcon className='ico sx-32 ml-auto' />
                </Step>
            </Col>
        </Row>
    </StepsWrapper>
)

export default CartShipping
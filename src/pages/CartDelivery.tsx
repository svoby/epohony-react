import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import ShopContext from '../context/ShopContext'
import { Container, Row, Col, Spacer } from '../layout/Grid'
import { CheckIcon, ChevronRightIcon, IdentificationIcon } from '@heroicons/react/outline'
import SwiperAltProducts from '../components/Swipers/SwiperAltProducts'
import CartIsEmptyWarning from "../components/Cart/CartIsEmptyWarning"
import CartBottomNavigation from '../components/Cart/CartBottonNavigation'
import CartSummary from '../components/Cart/CartSummary'
import { IconBox, Step, StepsWrapper } from '../components/Cart/CartSteps'
import { FlashMessage } from '../components/FlashMessage'
import useAutoLogin from '../components/User/useAutoLogin'

const CartDelivery = () => {

    const navigate = useNavigate()
    const { cart } = useContext(ShopContext)

    useAutoLogin(cart)

    return (
        <Container>
            <Spacer size="pt-6" />

            <FlashMessage />

            <h1 className="h2 text-uppercase">Košík</h1>

            {!cart.products.length ? (
                <CartIsEmptyWarning />
            ) : (
                <>
                    <CartSteps />
                    <Spacer size="pt-5" />

                    <Row>
                        <Col size="col-lg-8 mb-4 mb-lg-0">
                            <h2 className="h5">Fakturační a dodací údaje</h2>
                            <div className="bg-100 p-4">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <div className="form-group">
                                            <label className="font-weight-semibold" htmlFor="user-name">Jméno</label>
                                            <input className="form-control" id="user-name" type="text" defaultValue={cart.user?.name} />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold" htmlFor="user-surname">Příjmení</label>
                                            <input className="form-control" id="user-surname" type="text" defaultValue={cart.user?.surname} />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold" htmlFor="user-email">E-mailová adresa</label>
                                            <input className="form-control is-valid" id="user-email" type="email" defaultValue={cart.user?.email} />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold" htmlFor="user-street">Ulice a číslo</label>
                                            <input className="form-control" id="user-street" type="text" defaultValue={cart.user?.street} />
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="form-group">
                                                    <label className="font-weight-semibold" htmlFor="user-city">Město</label>
                                                    <input className="form-control" id="user-city" type="text" defaultValue={cart.user?.city} />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-group">
                                                    <label className="font-weight-semibold" htmlFor="user-psc">PSČ</label>
                                                    <input className="form-control" id="user-psc" type="text" defaultValue={cart.user?.psc} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col size="col-lg-4">
                            <div className="pl-lg-4">
                                <h2 className="h5">Shrnutí objednávky</h2>
                                <CartSummary cart={cart} />
                            </div>
                        </Col>
                    </Row >
                </>
            )}

            <Spacer size="pt-5" />

            <CartBottomNavigation
                backLinkHandler={() => navigate(-1)}
                nextStepLabel="Dokončit objednávku"
                nextStepLinkTo="/cart/success"
                nextStepHandler={() => validateForm()}
                disabled={!cart.products.length} />
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

const CartSteps = () => (
    <StepsWrapper>
        <Row size="gutters-md">
            <Col size="col-4">
                <Step to="/cart/list" state={false}>
                    <IconBox><CheckIcon className='sx-24' /></IconBox>
                    <div>1. Cart</div>
                    <ChevronRightIcon className='ico sx-32 ml-auto' />
                </Step>
            </Col>
            <Col size="col-4">
                <Step to="/cart/shipping" state={false}>
                    <IconBox><CheckIcon className='sx-24' /></IconBox>
                    <div>2. Shipping</div>
                    <ChevronRightIcon className='ico sx-32 ml-auto' />
                </Step>
            </Col>
            <Col size="col-4">
                <Step to="/cart/delivery" state={'active'}>
                    <IconBox><IdentificationIcon className='sx-24' /></IconBox>
                    <div>3. Delivery</div>
                    <ChevronRightIcon className='ico sx-32 ml-auto' />
                </Step>
            </Col>
        </Row>
    </StepsWrapper>
)

const validateForm = () => { }

export default CartDelivery
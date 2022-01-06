import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ShopContext from '../context/ShopContext'
import { Container, Row, Col, Spacer } from '../layout/Grid'
import { CheckIcon, ChevronRightIcon, IdentificationIcon } from '@heroicons/react/outline'
import SwiperAltProducts from '../components/Swipers/SwiperAltProducts'
import CartIsEmptyWarning from "../components/Cart/CartIsEmptyWarning"
import CartBottomNavigation from '../components/Cart/CartBottonNavigation'
import { scrollToTop } from '../global.constants'
import CartSummary from '../components/Cart/CartSummary'
import { IconBox, Step, StepsWrapper } from '../components/Cart/CartSteps'

const CartDelivery = () => {

    const navigate = useNavigate()
    const { cart, payment, shipping } = useContext(ShopContext)

    useEffect(() => scrollToTop(), [])

    return (
        <Container>
            <Spacer size="pt-6" />

            <h1 className="h2 text-uppercase">Košík</h1>

            {!cart.length ? (
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
                                            <label className="font-weight-semibold" htmlFor="">Jméno</label>
                                            <input className="form-control" id="" type="text" defaultValue="Jan" />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold" htmlFor="">Příjmení</label>
                                            <input className="form-control" id="" type="text" defaultValue="Novák" />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold" htmlFor="">E-mailová adresa</label>
                                            <input className="form-control is-valid" id="" type="email" defaultValue="email@email.com" />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold" htmlFor="">Telefon</label>
                                            <input className="form-control is-valid" id="" type="text" defaultValue="+420 123 456 789" />
                                        </div>
                                        <div className="form-group">
                                            <label className="font-weight-semibold" htmlFor="">Ulice a číslo</label>
                                            <input className="form-control" id="" type="text" defaultValue="Moravské náměstí 2" />
                                        </div>
                                        <div className="row">
                                            <div className="col-8">
                                                <div className="form-group">
                                                    <label className="font-weight-semibold" htmlFor="">Město</label>
                                                    <input className="form-control" id="" type="text" defaultValue="Brno" />
                                                </div>
                                            </div>
                                            <div className="col-4">
                                                <div className="form-group">
                                                    <label className="font-weight-semibold" htmlFor="">PSČ</label>
                                                    <input className="form-control" id="" type="text" defaultValue="602 00" />
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
                                <CartSummary cart={cart} payment={payment} shipping={shipping} />
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
                disabled={!cart.length} />
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
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShopContext from '../../context/ShopContext'
import { Container, Row, Col, Spacer } from '../../layout/Grid'
import { CheckIcon, ChevronRightIcon, IdentificationIcon, TruckIcon } from '@heroicons/react/outline'
import SwiperAltProducts from '../Swipers/SwiperAltProducts'
import CartIsEmptyWarning from "./CartIsEmptyWarning"
import CartBottonNavigation from './CartBottonNavigation'
import Placeholder from '../../layout/Placeholder'
import CartPaymentRow from './CartPaymentRow'
import { cartPriceReducer, getPriceWithoutVAT } from '../../globals'
import { payments, shippings } from './ShippingConfig'

const CartDelivery = () => {

    const navigate = useNavigate()
    const { cart, payment, shipping, setPayment, setShipping } = useContext(ShopContext)
    let totalPrice = cart.reduce(cartPriceReducer, 0)

    totalPrice += (payment?.price ? payment.price : 0) + (shipping?.price ? shipping.price : 0)

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
                        <Col className="col-lg-8 mb-4 mb-lg-0">
                            <h2 className="h5">Fakturační a dodací údaje</h2>
                            {shippings.map((shipping, key) => (
                                <CartPaymentRow payment={shipping} key={key} groupName="shipping" onClickHandler={setShipping} />
                            ))}

                            <Spacer size="pt-5" />

                            <h2 className="h5">Výběr platby</h2>
                            {payments.map((payment, key) => (
                                <CartPaymentRow payment={payment} key={key} groupName="payment" onClickHandler={setPayment} />
                            ))}
                        </Col>

                        <Col className="col-lg-4">
                            <div className="pl-lg-4">
                                <h2 className="h5">Shrnutí objednávky</h2>
                                <div className="border rounded py-4 px-3">

                                    {cart.map((product, key) => (
                                        <div className="d-flex align-items-center mb-3" key={key}>
                                            <Placeholder w="48" h="48" color="CCCCCC" pictureClass="mr-3" />
                                            <div className="text-micro pr-3">
                                                <div className="line-clamp line-clamp__1">{product.name}</div>({product.quantity} Ks)
                                            </div>
                                            <div className="ml-auto text-nowrap font-weight-bold small">{product.price * product.quantity} Kč</div>
                                        </div>
                                    ))}

                                    <div className="spacer pt-3"></div>
                                    <div className="border-top"></div>
                                    <div className="spacer pt-3"></div>

                                    <table className="w-100 small">
                                        <tbody>
                                            {shipping?.price != null &&
                                                <tr>
                                                    <td>{shipping.name}</td>
                                                    <td className="text-right">{shipping.price === 0 ? 'Zdarma' : shipping.price}</td>
                                                </tr>}
                                            {payment?.price != null &&
                                                <tr>
                                                    <td>{payment.name}</td>
                                                    <td className="text-right">{payment.price === 0 ? 'Zdarma' : payment.price}</td>
                                                </tr>}
                                            <tr>
                                                <td>Celkem bez DPH</td>
                                                <td className="text-right text-nowrap">{getPriceWithoutVAT(totalPrice)} Kč</td>
                                            </tr>
                                            <tr>
                                                <td className="align-bottom">Celkem s DPH</td>
                                                <td className="h5 text-right text-nowrap align-bottom">{totalPrice} Kč</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </>
            )}

            <Spacer size="pt-5" />

            <CartBottonNavigation
                backLinkHandler={() => navigate(-1)}
                nextStepLabel="Dokončit objednávku"
                nextStepLinkTo="/cart/success"
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
    <div className="bg-white border border-capsule p-2 d-none d-md-block">
        <div className="row gutters-md">
            <div className="col-4">
                <Link to="/cart/list" className="align-items-center border-capsule d-flex h-100 hover-bg-primary-alpha-20 p-3 text-none">
                    <div className="icon-box-inline sx-40 rounded-circle border bg-primary text-white border-current mr-3">
                        <CheckIcon className='sx-24' />
                    </div>
                    <div className="line-h-100">1. Cart</div>
                    <div className="d-inline-block sx-32 ml-auto">
                        <ChevronRightIcon className='sx-32' />
                    </div>
                </Link>
            </div>
            <div className="col-4">
                <div className="d-flex h-100 align-items-center p-3 text-none border-capsule bg-gradient-primary text-white">
                    <div className="icon-box-inline sx-40 rounded-circle border border-current mr-3">
                        <TruckIcon className='sx-24' />
                    </div>
                    <div className="line-h-100">2. Shipping / Payment</div>
                    <div className="d-inline-block sx-32 ml-auto">
                        <ChevronRightIcon className='sx-32' />
                    </div>
                </div>
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

export default CartDelivery
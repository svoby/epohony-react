import { CheckIcon } from '@heroicons/react/outline'
import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ShopContext from '../context/ShopContext'
import { Container, Row, Col, Spacer } from '../layout/Grid'
import Placeholder from '../layout/Placeholder'
import SwiperAltProducts from '../components/Swipers/SwiperAltProducts'
import SwiperProductSales from '../components/Swipers/SwiperProductSales'
import CartBottomNavigation from '../components/Cart/CartBottonNavigation'
import CartIsEmptyWarning from "../components/Cart/CartIsEmptyWarning"
import { scrollToTop } from '../global.constants'
import { IProduct } from '../global.types'

const Cart = () => {

    const { id } = useParams()
    const { cart: cart2 } = useContext(ShopContext)
    const lastProducAdded = cart2.products.find((product: IProduct) => product.id === id)
    const navigate = useNavigate()

    useEffect(() => scrollToTop(), [])

    return (
        <Container>
            <Spacer size="pt-6" />

            {!cart2.products.length ? (
                <CartIsEmptyWarning />
            ) : (
                <Row>
                    <Col size="col-lg-6 mb-4 mb-lg-0">
                        <div className="p-0 pr-lg-4">
                            <div className="d-flex align-items-center mb-4">
                                <div className="icon-box-inline bg-green rounded-circle sx-32 text-white mr-2">
                                    <CheckIcon className='sx-16' />
                                </div>
                                <h2 className="h5 font-weight-normal text-green">Zboží bylo přidáno do košíku</h2>
                            </div>
                            <div className="d-flex bg-300 align-items-center p-3 mb-3 rounded">
                                <Placeholder w="80" h="80" color="CCCCCC" pictureClass="mr-4" /> {lastProducAdded && lastProducAdded.attributes.name}
                            </div>
                        </div>
                    </Col>
                    <Col size="col-lg-6">
                        <div data-form="mockup-form">
                            <h5 className="text-uppercase mb-4">Spočítejte si cenu Montáže</h5>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input className="form-control" type="text" placeholder="Zadejte název obce nebo PSČ" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <button className="btn btn-secondary btn-block text-uppercase" type="submit" name="name1">SPOČÍTAT MONTÁŽ</button>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <table className="text-600 w-100">
                                        <tbody><tr>
                                            <td>Doprava</td>
                                            <td className="text-right">690 Kč</td>
                                        </tr>
                                            <tr>
                                                <td>Montáž</td>
                                                <td className="text-right">1 990 Kč</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <table className="text-black w-100">
                                            <tbody><tr>
                                                <td className="font-weight-bold align-bottom">Celkem</td>
                                                <td className="text-right h4">2 990 Kč</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <button className="btn btn-secondary btn-block text-uppercase" type="submit" name="name2">OBJEDNAT MONTÁŽ</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            )}

            <Spacer size="pt-5" />

            <CartBottomNavigation
                backLinkHandler={() => navigate(-1)}
                nextStepLabel="Do košíku"
                nextStepLinkTo="/cart/list"
                disabled={!cart2.products.length} />

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

export default Cart
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon, CheckIcon } from '@heroicons/react/outline'
import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import ShopContext from '../../context/ShopContext'
import { Container, Row, Col, Spacer } from '../../layout/Grid'
import Placeholder from '../../layout/Placeholder'
import SwiperAltProducts from '../Swipers/SwiperAltProducts'
import SwiperProductSales from '../Swipers/SwiperProductSales'

function Cart() {

    const navigate = useNavigate()
    const { id } = useParams()
    const context = useContext(ShopContext)
    const lastProducAdded = context.cart.find(product => product.id == id)

    return (
        <Container>
            <Spacer size="pt-6" />
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
                            <Placeholder w="80" h="80" color="CCCCCC" pictureClass="mr-4" /> {lastProducAdded.name}
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

            <Spacer size="pt-5" />

            <div className="d-flex justify-content-between align-items-center border-top border-bottom border-200 py-3">
                <span className="btn btn-lg btn-link primary" onClick={() => navigate(-1)}>
                    <ArrowNarrowLeftIcon className='sx-24 mr-2' /> Zpět k nákupu
                </span>
                <Link to="/cart/list" className="btn btn-lg flex-grow-0 btn-green d-inline-flex align-items-center text-uppercase" href="./cart-1.html">
                    Do košíku <ArrowNarrowRightIcon className='sx-24 ml-2' />
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

export default Cart

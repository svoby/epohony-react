import { ChatAltIcon, CogIcon, ThumbUpIcon } from "@heroicons/react/outline"
import { Link } from "react-router-dom"
import { Container, Row, Col, Spacer } from "../layout/Grid"

export default function Footer() {
    return (
        <>
            <Spacer size="pt-5" />
            <section className="bg-gradient-primary h6 line-h-120 mb-0 pt-4 font-weight-normal text-white" id="bar-1">
                <Container>
                    <Row>
                        <Col size="col-md-4 mb-4">
                            <div className="d-flex align-items-center">
                                <span className="d-flex justify-content-center align-items-center flex-shrink-0 border border-white-alpha-25 sx-56 rounded mr-4">
                                    <ThumbUpIcon className="sx-32" />
                                </span>
                                Prodloužená záruka při montáži od nás
                            </div>
                        </Col>
                        <div className="col-md-4 mb-4">
                            <div className="d-flex align-items-center">
                                <span className="d-flex justify-content-center align-items-center flex-shrink-0 border border-white-alpha-25 sx-56 rounded mr-4">
                                    <ChatAltIcon className="sx-32" />
                                </span>
                                Nevíte si rady? Využijte náš zákaznický servis
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="d-flex align-items-center">
                                <span className="d-flex justify-content-center align-items-center flex-shrink-0 border border-white-alpha-25 sx-56 rounded mr-4">
                                    <CogIcon className="sx-32" />
                                </span>
                                V případě zájmu zajistíme<br />odbornou montáž
                            </div>
                        </div>
                    </Row>
                </Container>
            </section>
            <footer>
                <Container size="py-6">
                    <Row>
                        <Col size="col-12 col-md-3 col-lg-6">
                            <div className="d-flex h-100 justify-content-between flex-column">
                                <div className="small line-h-120 mb-4">
                                    <img className="img-fluid mb-4" src="/assets/images/logo-site.svg" alt="ePohony" width="100" />
                                    <p>2022 &copy; Epohony.cz<br />Všechna práva vyhrazena</p>
                                </div>
                                <div className="mb-4 mb-md-0">
                                    <a className="icon-box-inline sx-40 text-500" href="#!" title="Youtube" target="_blank">
                                        {/* <svg className="ico youtube sx-24">
                                <use xlink:href="build/svg/sprite.defs.svg#youtube"></use>
                            </svg> */}
                                    </a>
                                    <a className="icon-box-inline sx-40 text-500" href="#!" title="Facebook" target="_blank">
                                        {/* <svg className="ico facebook sx-24">
                                    <use xlink:href="build/svg/sprite.defs.svg#facebook"></use>
                                </svg> */}
                                    </a>
                                    <a className="icon-box-inline sx-40 text-500" href="#!" title="Twitter" target="_blank">
                                        {/* <svg className="ico twitter sx-24">
                                    <use xlink:href="build/svg/sprite.defs.svg#twitter"></use>
                                </svg> */}
                                    </a>
                                    <a className="icon-box-inline sx-40 text-500" href="#!" title="LinkedIn" target="_blank">
                                        {/* <svg className="ico linkedin sx-24">
                                    <use xlink:href="build/svg/sprite.defs.svg#linkedin"></use>
                                </svg> */}
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col size="col-12 col-md-3 col-lg-2">
                            <div className="foot-links">
                                <label htmlFor="foot-links-1">Footer links</label>
                                <input type="checkbox" id="foot-links-1" />
                                <nav>
                                    <ul>
                                        <li><a href="/category/1">Category</a></li>
                                        <li><a href="/product/1">Product</a></li>
                                        <li><Link to="/cart/1">Cart 1</Link></li>
                                        <li><Link to="/cart/list">Cart 2</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </Col>
                        <Col size="col-12 col-md-3 col-lg-2">
                            <div className="foot-links">
                                <label htmlFor="foot-links-2">Footer links</label>
                                <input type="checkbox" id="foot-links-2" />
                                <nav>
                                    <ul>

                                        <li><Link to="/cart/shipping">Cart 3</Link></li>
                                        <li><Link to="/cart/delivery">Cart 4</Link></li>
                                        <li><Link to="/cart/success">Cart 5</Link></li>
                                        <li><Link to="#!">Stat rosa</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </Col>
                        <Col size="col-12 col-md-3 col-lg-2">
                            <div className="foot-links">
                                <label htmlFor="foot-links-3">Footer links</label>
                                <input type="checkbox" id="foot-links-3" />
                                <nav>
                                    <ul>
                                        <li><a href="#!">Letterpress echo</a></li>
                                        <li><a href="#!">Gochujang chillwave</a></li>
                                        <li><a href="#!">Tumblr kitsch</a></li>
                                        <li><a href="#!">Humblebrag</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </>
    )
}
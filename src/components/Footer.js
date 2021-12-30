import { Link } from "react-router-dom"

export default function Footer() {
    return <footer>
        <div className="container py-6">
            <div className="row">
                <div className="col-12 col-md-3 col-lg-6">
                    <div className="d-flex h-100 justify-content-between flex-column">
                        <div className="small line-h-120 mb-4">
                            <img className="img-fluid mb-4" src="assets/images/logo-site.svg" alt="ePohony" width="165" />
                            <p>2021 © Epohony.cz<br />Všechna práva vyhrazena</p>
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
                </div>
                <div className="col-12 col-md-3 col-lg-2">
                    <div className="foot-links">
                        <label htmlFor="foot-links-1">Footer links</label>
                        <input type="checkbox" id="foot-links-1" />
                        <nav>
                            <ul>
                                <li><Link to="/">Rozcestník šablon</Link></li>
                                <li><a href="./components.html">Components</a></li>
                                <li><a href="./homepage.html">Homepage</a></li>
                                <li><a href="./catalog.html">Catalog</a></li>
                                <li><a href="./product.html">Product</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-lg-2">
                    <div className="foot-links">
                        <label htmlFor="foot-links-2">Footer links</label>
                        <input type="checkbox" id="foot-links-2" />
                        <nav>
                            <ul>
                                <li><a href="./cart.html">Cart</a></li>
                                <li><a href="./cart-1.html">Cart 1</a></li>
                                <li><a href="./cart-2.html">Cart 2</a></li>
                                <li><a href="./cart-3.html">Cart 3</a></li>
                                <li><a href="./cart-4.html">Cart 4</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="col-12 col-md-3 col-lg-2">
                    <div className="foot-links">
                        <label htmlFor="foot-links-3">Footer links</label>
                        <input type="checkbox" id="foot-links-3" />
                        <nav>
                            <ul>
                                <li><a href="#!">Letterpress echo</a></li>
                                <li><a href="#!">Gochujang chillwave</a></li>
                                <li><a href="#!">Tumblr kitsch</a></li>
                                <li><a href="#!">Humblebrag</a></li>
                                <li><a href="#!">Knausgaard</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}
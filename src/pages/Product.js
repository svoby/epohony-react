import { ShoppingCartIcon } from '@heroicons/react/outline'
import request, { gql } from 'graphql-request'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductImage from '../components/Product/ProductImage'
import ProductImageThumbnail from '../components/Product/ProductImageThumbnail'
import ProductTabs from '../components/Product/ProductTabs'
import SwiperAltProducts from '../components/Swipers/SwiperAltProducts'
import SwiperProductSales from '../components/Swipers/SwiperProductSales'
import { getPriceWithoutVAT, GRAPH_QL_API_ENTRYPOINT } from '../globals'
import ShopContext from '../context/ShopContext'
import { Col, Row, Spacer } from '../layout/Grid'

function Product() {

    const [productData, setProductData] = useState()
    const [activeImageId, setActiveDetailImage] = useState(0)
    const { id } = useParams()
    const queryProduct = gql`
        query {
            product(id: ${id}) {
                data {
                    id
                    attributes {
                        name
                        price
                        subtitle
                    }
                }
            }
        }
    `
    useEffect(() => {
        request(GRAPH_QL_API_ENTRYPOINT, queryProduct)
            .then(data => {
                setProductData(data.product.data)
            })
    }, [])

    return (
        <>
            {productData &&
                <>
                    <Col size="col-lg-9">
                        <h1 className='line-h-100'>{productData && productData.attributes.name}</h1>
                        <h2 className="h3 mb-0">{productData && productData.attributes.name}</h2>

                        <Spacer size="pt-5" />

                        <div className="product-detail">
                            <Row>
                                <Col size="col-lg-6 mb-5 mb-lg-0">
                                    <div className="product-gallery-preview">
                                        <ProductImage id={0} activeId={activeImageId} />
                                        <ProductImage id={1} activeId={activeImageId} />
                                        <ProductImage id={2} activeId={activeImageId} />
                                        <ProductImage id={3} activeId={activeImageId} />
                                    </div>
                                    <div className="product-gallery-thumblist">
                                        <ProductImageThumbnail id={0} activeId={activeImageId} onClickHandler={(id) => setActiveDetailImage(id)} />
                                        <ProductImageThumbnail id={1} activeId={activeImageId} onClickHandler={(id) => setActiveDetailImage(id)} />
                                        <ProductImageThumbnail id={2} activeId={activeImageId} onClickHandler={(id) => setActiveDetailImage(id)} />
                                        <ProductImageThumbnail id={3} activeId={activeImageId} onClickHandler={(id) => setActiveDetailImage(id)} />
                                    </div>
                                </Col>
                                <Col size="col-lg-6">
                                    <div className="product-info">
                                        <table className="w-100 mb-5">
                                            <tbody>
                                                <tr>
                                                    <th className="py-2">Kód produktu</th>
                                                    <td>KIT R20/502/1W</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-2">Hmotnost</th>
                                                    <td>11 340 g</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-2">Dostupnost</th>
                                                    <td className="text-success">Skladem</td>
                                                </tr>
                                                <tr>
                                                    <th className="py-2">Výrobce</th>
                                                    <td>Roger Industries</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div className="text-700">
                                            <p>Schlitz live-edge pinterest hell of migas. Food truck small batch actually, pork belly hammock pinterest paleo prism intelligentsia enamel pin pickled try-hard copper mug gluten-free.</p>
                                        </div>
                                        <div className="bg-secondary-alpha-10 rounded p-4 mt-5">
                                            <div className="text-micro font-weight-bold text-muted">
                                                <s>2&nbsp;600&nbsp;Kč</s>
                                            </div>
                                            <div className="h3 mb-0">{productData.attributes.price}&nbsp;Kč</div>
                                            <div className="text-micro font-weight-bold mb-4">{getPriceWithoutVAT(productData.attributes.price)} Kč bez DPH</div>
                                            <ShopContext.Consumer>
                                                {({ addToCart }) => (
                                                    <button className="btn btn-secondary btn-lg w-100" onClick={() => addToCart({ id: productData.id, name: productData.attributes.name, price: productData.attributes.price }, true)}>
                                                        <ShoppingCartIcon className="ico sx-24 mr-2 align-text-bottom" /> VLOŽIT DO KOŠÍKU
                                                    </button>
                                                )}
                                            </ShopContext.Consumer>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>

                        <Spacer size="pt-6" />

                        <SwiperProductSales />
                        <Spacer size="pt-6" />

                        <ProductTabs />
                        <Spacer size="pt-5" />
                    </Col>
                    <Col size="col-12">
                        <h3>Alternativní produkty</h3>
                        <SwiperAltProducts />
                        <Spacer size="pt-5" />

                        <h3>Příslušenství</h3>
                        <SwiperAltProducts />
                        <Spacer size="pt-5" />
                    </Col>
                </>
            }
        </>
    )
}

export default Product

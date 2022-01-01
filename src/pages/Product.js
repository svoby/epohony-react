import { ShoppingCartIcon } from '@heroicons/react/outline'
import request, { gql } from 'graphql-request'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import SwiperProductSales from '../components/Swipers/SwiperProductSales'
import { GRAPH_QL_API_ENTRYPOINT } from '../config'
import { Col, Spacer } from '../layout/Grid'

function Product() {

    const [productData, setProductData] = useState()
    const { id } = useParams()
    const queryProduct = gql`
        query {
            product(id: ${id}) {
                data {
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
                setProductData(data)
            })
    }, [])

    return (
        <Col size="col-lg-9" >
            <h1 className='line-h-100'>{productData && productData.product.data.attributes.name}</h1>
            <h2 className="h3 mb-0">{productData && productData.product.data.attributes.name}</h2>

            <Spacer size="pt-5" />

            <div className="product-detail">
                <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                        <div className="product-gallery-preview">
                            <div className="product-gallery-preview-item active" id="first"><a href="https://via.placeholder.com/1024x768.png?text=Product%20photo%20detail%20(1024%20x%20768)" data-fancybox="prod-detail">
                                <picture><img className="w-100" src="https://via.placeholder.com/444x460.png/666666" alt="" /></picture></a></div>
                            <div className="product-gallery-preview-item" id="second"><a href="https://via.placeholder.com/1024x768.png?text=Product%20photo%20detail%20(1024%20x%20768)" data-fancybox="prod-detail">
                                <picture><img className="w-100" src="https://via.placeholder.com/444x460.png/888888" alt="" /></picture></a></div>
                            <div className="product-gallery-preview-item" id="third"><a href="https://via.placeholder.com/1024x768.png?text=Product%20photo%20detail%20(1024%20x%20768)" data-fancybox="prod-detail">
                                <picture><img className="w-100" src="https://via.placeholder.com/444x460.png/BBBBBB" alt="" /></picture></a></div>
                            <div className="product-gallery-preview-item" id="fourth"><a href="https://via.placeholder.com/1024x768.png?text=Product%20photo%20detail%20(1024%20x%20768)" data-fancybox="prod-detail">
                                <picture><img className="w-100" src="https://via.placeholder.com/444x460.png/DDDDDD" alt="" /></picture></a></div>
                        </div>
                        <div className="product-gallery-thumblist">
                            <a className="product-gallery-thumblist-item active" href="#first">
                                <picture><img src="https://via.placeholder.com/68x72.png/666666" alt="" /></picture></a><a className="product-gallery-thumblist-item" href="#second">
                                <picture><img src="https://via.placeholder.com/68x72.png/888888" alt="" /></picture></a><a className="product-gallery-thumblist-item" href="#third">
                                <picture><img src="https://via.placeholder.com/68x72.png/BBBBBB" alt="" /></picture></a><a className="product-gallery-thumblist-item" href="#third">
                                <picture><img src="https://via.placeholder.com/68x72.png/DDDDDD" alt="" /></picture>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="product-info">
                            <table className="w-100 mb-5">
                                <tbody><tr>
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
                                </tbody></table>
                            <div className="text-700">
                                <p>Schlitz live-edge pinterest hell of migas. Food truck small batch actually, pork belly hammock pinterest paleo prism intelligentsia enamel pin pickled try-hard copper mug gluten-free.</p>
                            </div>
                            <div className="bg-secondary-alpha-10 rounded p-4 mt-5">
                                <div className="text-micro font-weight-bold text-muted">
                                    <s>2&nbsp;600&nbsp;Kč</s>
                                </div>
                                <div className="h3 mb-0">1&nbsp;990&nbsp;Kč</div>
                                <div className="text-micro font-weight-bold mb-4">1&nbsp;470 Kč s DPH</div>
                                <button className="btn btn-secondary btn-lg w-100">
                                    <ShoppingCartIcon className="ico sx-24 mr-2 align-text-bottom" /> VLOŽIT DO KOŠÍKU
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Spacer size="pt-6" />
            <SwiperProductSales />
            <Spacer size="pt-6" />

        </Col>
    )
}

export default Product

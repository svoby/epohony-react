import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryInfo from '../components/CategoryInfo'
import CategoryList from '../components/CategoryList'
import CardProduct from '../components/Product/CardProduct'
import { Row, Col, Spacer } from "../layout/Grid"
import { request, gql } from 'graphql-request'
import SwiperProductsInCategory from '../components/Swipers/SwiperProductsInCategory'
import { GRAPH_QL_API_ENTRYPOINT } from '../config'

function Category() {
    const siteDataUrl = "/data/site.json"
    const [dataCategoryInfo, setDataCategoryInfo] = useState()
    const [dataCategorySubcategories, setDataCategorySubcategories] = useState()
    const [dataProductsInCatalog, setDataProductsInCategory] = useState()
    const { id } = useParams();

    const queryCategory = gql`
        query {
            category(id: ${id}) {
                data {
                    attributes {
                        title
                        subtitle
                        text
                        products {
                            data {
                                id
                                attributes {
                                    name
                                    price
                                }
                            }
                        }
                    }
                }
            }
        }
    `
    useEffect(() => {
        fetch(siteDataUrl)
            .then(response => response.json())
            .then(data => {
                setDataCategorySubcategories(data.$Data.productCategorySubcategories)
            })

        try {
            request(GRAPH_QL_API_ENTRYPOINT, queryCategory)
                .then((data) => {
                    setDataCategoryInfo(data.category.data.attributes)
                    setDataProductsInCategory(data.category.data.attributes.products.data)
                });
        } catch (error) {
            console.log(error)
        }

    }, [id])

    return (
        <>
            <Col size="col-lg-9">
                <CategoryInfo {...dataCategoryInfo} />
                <Spacer size="pt-4 pt-md-5" />
                <CategoryList items={dataCategorySubcategories} />
                <Spacer size="pt-4 pt-md-5" />
                <Row size="gutters-md">
                    {dataProductsInCatalog && dataProductsInCatalog.map((product, key) => (
                        <Col size="col-md-6 col-lg-4 mb-2" key={key}>
                            <CardProduct {...product} />
                        </Col>))}
                </Row>
            </Col>
            <Col size="col-12">
                <Spacer size="pt-4 pt-md-5" />
                <div className="border-top"></div>
                <Spacer size="pt-4 pt-md-5" />
                <h2 className="h3 mb-0 text-uppercase">Subcategories</h2>
                <Spacer size="pt-4 pt-md-5" />
                <CategoryList items={dataCategorySubcategories} />
                <Spacer size="pt-4 pt-md-5" />
                <SwiperProductsInCategory />
                <Spacer size="pt-4 pt-md-5" />
                <p>{dataCategoryInfo && dataCategoryInfo.text}</p>
                <Spacer size="pt-5" />
            </Col>
        </>
    )
}

export default Category

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryInfo from '../components/CategoryInfo'
import CategoryList from '../components/CategoryList'
import SidemenuTitle from '../components/SideMenuTitle'
import { SideMenuNav } from '../components/SideMenuNav'
import CardProduct from '../components/CardProduct'
import { Container, Row, Col, Spacer } from "../layout/Grid"
import { request, gql } from 'graphql-request'
import CardProductBig from '../components/CardProductBig'

const GRAPH_QL_API_ENTRYPOINT = process.env.NODE_ENV === 'development' ? 'http://localhost:1337/graphql' : 'https://epohony-strapi.herokuapp.com/graphql'

function Category() {
    const siteDataUrl = "/data/site.json"
    const [dataCategoryInfo, setDataCategoryInfo] = useState()
    const [dataCategorySubcategories, setDataCategorySubcategories] = useState()
    const [dataProductCategories, setDataProductCategories] = useState()
    const [dataManufacturers, setDataManufacturers] = useState()
    const [dataProductsInCatalog, setDataProductsInCatalog] = useState()
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
                                }
                            }
                        }
                    }
                }
            }
            categories {
                data {
                    id
                    attributes {
                        title
                    }
                }
            }
        }
    `
    useEffect(() => {
        fetch(siteDataUrl)
            .then(response => response.json())
            .then(data => {
                setDataManufacturers(data.$Data.productManufacturers)
                setDataCategorySubcategories(data.$Data.productCategorySubcategories)
            })

        request(GRAPH_QL_API_ENTRYPOINT, queryCategory)
            .then((data) => {
                setDataCategoryInfo(data.category.data.attributes)
                setDataProductsInCatalog(data.category.data.attributes.products.data)
                setDataProductCategories(data.categories.data)
            })
    }, [id])

    return (
        <>
            <Spacer size="pt-4 pt-md-5" />
            <Container>
                <Row>
                    <Col size="col-lg-3 mt-6 mt-lg-0 order-1 order-lg-0">
                        <SidemenuTitle title="Kategorie" />
                        <SideMenuNav items={dataProductCategories} />
                        <Spacer size="pt-4 pt-md-5" />
                        <SidemenuTitle title="Výrobci pohonů" />
                        {/* <SideMenuNav items={dataManufacturers} /> */}
                    </Col>
                    <Col size="col-lg-9">
                        <Spacer size="pt-4 pt-md-5" />
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
                </Row>
            </Container>
            <Spacer size="pt-4 pt-md-5" />
            <Container>
                <div className="border-top"></div>
                <Spacer size="pt-4 pt-md-5" />
                <h2 className="h3 mb-0 text-uppercase">Subcategories</h2>
                <Spacer size="pt-4 pt-md-5" />
                <CategoryList items={dataCategorySubcategories} />
                <Spacer size="pt-4 pt-md-5" />
                <Row size="gutters-md">
                    {[1, 2, 3, 4].map(() => <Col size="col-md-6 col-lg-3 mb-2"><CardProductBig /></Col>)}
                </Row>
                <Spacer size="pt-4 pt-md-5" />
                <p>
                    {dataCategoryInfo.text}
                </p>
                <Spacer size="pt-5" />
            </Container>
        </>
    )
}

export default Category

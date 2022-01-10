import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CategoryInfo from '../components/Category/CategoryInfo'
import CategoryList from '../components/Category/CategoryList'
import CardProduct from '../components/Product/CardProduct'
import { Row, Col, Spacer } from "../layout/Grid"
import { request, gql } from 'graphql-request'
import SwiperProductsInCategory from '../components/Swipers/SwiperProductsInCategory'
import { GRAPHQL_API_ENTRYPOINT, scrollToTop } from '../global.constants'
import { ICategoryInfo, ICategory, IProduct } from '../global.types'

const Category = () => {

    const [dataCategoryInfo, setDataCategoryInfo] = useState<ICategoryInfo>()
    const [dataCategorySubcategories, setDataCategorySubcategories] = useState<Array<ICategory>>([])
    const [dataProductsInCategory, setDataProductsInCategory] = useState<IProduct[]>([])
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
            categories {
                data {
                    id
                    attributes {
                        title
                        path
                    }
                }
            }
        }
    `
    useEffect(() => {

        // Fetch CMS content data
        try {
            request(GRAPHQL_API_ENTRYPOINT, queryCategory)
                .then((data) => {
                    setDataCategoryInfo(data.category.data.attributes)
                    setDataProductsInCategory(data.category.data.attributes.products.data)
                    setDataCategorySubcategories(data.categories.data)
                    scrollToTop('smooth')
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
                <Row size="gutters-md">
                    {dataProductsInCategory && dataProductsInCategory.map((product, key) => (
                        <Col size="col-md-6 col-lg-4 mb-2" key={key}>
                            <CardProduct product={product} />
                        </Col>
                    ))}
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

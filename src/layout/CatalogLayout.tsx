import React, { ReactNode, useEffect, useState } from 'react'
import { request, gql } from 'graphql-request'
import SideMenuTitle from '../components/SideMenu/SideMenuTitle'
import SideMenuNav from '../components/SideMenu/SideMenuNav'
import { Spacer, Container, Row, Col } from './Grid'
import { GRAPHQL_API_ENTRYPOINT } from '../global.constants'
import { ICategory } from '../global.types'

const CatalogLayout = ({ children }: { children: ReactNode }) => {

    const [dataMainCategories, setDataMainCategories] = useState<Array<ICategory>>([])

    const queryCategory = gql`
        query {
            categories {
                data {
                    id
                    attributes {
                        title,
                        path
                        products {
                            data {
                                id
                            }
                        }
                    }
                }
            }
        }
    `

    useEffect(() => {
        request(GRAPHQL_API_ENTRYPOINT, queryCategory)
            .then(data => {
                setDataMainCategories(data.categories.data)
            })
    }, [queryCategory])

    return (
        <>
            <Spacer size="py-4" />
            <Container>
                <Row>
                    <Col size="col-lg-3 order-1 order-lg-0">
                        <div className="pr-md-4">
                            <SideMenuTitle title="Kategorie" />
                            <SideMenuNav items={dataMainCategories} />
                            <Spacer size="pt-4 pt-md-5" />
                        </div>
                    </Col>
                    {children}
                </Row>
            </Container>
        </>
    )
}

export default CatalogLayout

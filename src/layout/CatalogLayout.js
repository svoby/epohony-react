import React, { useEffect, useState } from 'react'
import SidemenuTitle from '../components/SideMenuTitle'
import { Spacer, Container, Row, Col } from './Grid'
import { request, gql } from 'graphql-request'
import { SideMenuNav } from '../components/SideMenuNav'
import { GRAPH_QL_API_ENTRYPOINT } from '../config'

function CatalogLayout(props) {

    const [dataMainCategories, setDataMainCategories] = useState()

    const queryCategory = gql`
        query {
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
        request(GRAPH_QL_API_ENTRYPOINT, queryCategory)
            .then(data => {
                setDataMainCategories(data.categories.data)
            })
    }, [queryCategory])

    return (
        <>
            <Spacer size="py-4 py-md-5" />
            <Container>
                <Row>
                    <Col size="col-lg-3 mt-6 mt-lg-0 order-1 order-lg-0">
                        <SidemenuTitle title="Kategorie" />
                        <SideMenuNav items={dataMainCategories} />
                        <Spacer size="pt-4 pt-md-5" />
                        <SidemenuTitle title="Výrobci pohonů" />
                        {/* <SideMenuNav items={dataManufacturers} /> */}
                    </Col>
                    {props.children}
                </Row>
            </Container>
        </>
    )
}

export default CatalogLayout

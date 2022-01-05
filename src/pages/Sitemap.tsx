import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from '../layout/Grid'

function Index(props: any) {
    return (
        <ul>
            {props.pages.map((page: Array<string>, index: number) =>
                <li key={index}>
                    <Link to={page[1]}>{page[0]}</Link>
                </li>
            )}
        </ul>
    )
}

function Sitemap() {

    const sitemapPages = [
        ['Category', "/category/1"],
        ['Product', "/product/1"],
        ['Cart (product added)', "/cart/1"],
        ['Cart (list)', "/cart/list"],
        ['Cart (shipping)', "/cart/shipping"],
        ['Cart (delivery)', "/cart/delivery"],
        ['Cart (success)', "/cart/success"],
    ]

    return (
        <>
            <div className="bg-primary-alpha-20 py-5 py-6">
                <Container>
                    <Row size="justify-content-center">
                        <Col size="col-md-8">
                            <h1 className="text-primary line-h-100">ePohony šablony</h1>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container size="py-3 py-md-5">
                <Row size="justify-content-center">
                    <Col size="col-md-6 py-3">
                        <Index pages={sitemapPages} />
                    </Col>
                    <Col size="col-md-2 d-none d-md-block">
                        <div className="d-none d-md-block">
                            <div className="rounded bg-white shadow-primary">
                                <img className="img-fluid" src="assets/images/qr-code.png" alt="QR" />
                                <div className="px-2 pb-2 pt-0">
                                    <div className="text-muted text-micro">Check on mobile with QR code</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Sitemap

import React from 'react'
import { Link } from 'react-router-dom'

function Sitemap(props) {
    const pages = props.pages.map((page, index) => <li key={index}><Link to={page[1]}>{page[0]}</Link></li>)
    return <ul>{pages}</ul>
}

function Index() {

    const sitemapPages = [
        ['Homepage', "/"],
        ['Category', "/category/1"],
        ['Product', "/product/1"],
        ['Cart (adding product)', "/cart/1"],
        ['Cart (list)', "/cart/list"],
        ['Cart (shipping)', "/cart/shipping"]]

    return (
        <>
            <div className="bg-primary-alpha-20 py-5 py-6">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <h1 className="text-primary line-h-100">ePohony šablony</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-3 py-md-5">
                <div className="row justify-content-center">
                    <div className="col-md-6 py-3">
                        <ul>
                            <Sitemap pages={sitemapPages} />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index

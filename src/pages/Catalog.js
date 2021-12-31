import React, { useState, useEffect } from 'react'
import CategoryInfo from '../components/CategoryInfo'
import CategoryList from '../components/CategoryList'
import SidemenuCategoryTitle from '../components/SideMenuTitle'
import Spacer from '../components/Spacer'
import { UserIcon } from '@heroicons/react/outline'
import CardProduct from '../components/CardProduct'

function SideMenuItem(props) {
    return <li className="d-flex">
        <a className="d-flex px-2 py-2 mb-1 flex-grow-1 align-items-center rounded text-none text-black hover-primary hover-bg-secondary-alpha-10" href="./catalog.html">
            {props.icon && <div className="sx-24 sx-md-32 mr-3"><img className="img-fluid" width="32" src={props.icon} alt="" /></div>}
            <span className="mr-2 line-h-110">{props.name}</span><span className="text-micro text-none text-200 ml-auto">99</span>
        </a>
    </li>
}

function SideMenuNav(props) {
    if (props.items == null)
        return null;

    return <nav>
        <ul className="nav flex-column">
            {props.items.map((item, key) => <SideMenuItem {...item} key={key} />)}
        </ul>
    </nav>
}

function Catalog() {
    const siteDataUrl = "data/site.json"
    const [dataCategoryInfo, setDataCategoryInfo] = useState()
    const [dataCategorySubcategories, setDataCategorySubcategories] = useState()
    const [dataProductCategories, setDataProductCategories] = useState()
    const [dataManufacturers, setDataManufacturers] = useState()

    useEffect(() => {
        fetch(siteDataUrl)
            .then(response => response.json())
            .then(data => {
                setDataCategoryInfo(data.$Data.categoryInfo)
                setDataProductCategories(data.$Data.productCategories)
                setDataManufacturers(data.$Data.productManufacturers)
                setDataCategorySubcategories(data.$Data.productCategorySubcategories)
            })
    }, [])

    return (
        <>
            <Spacer size="pt-4 pt-md-5" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mt-6 mt-lg-0 order-1 order-lg-0">
                        <SidemenuCategoryTitle title="Kategorie" />
                        <SideMenuNav items={dataProductCategories} />
                        <Spacer size="pt-4 pt-md-5" />
                        <SidemenuCategoryTitle title="Výrobci pohonů" />
                        <SideMenuNav items={dataManufacturers} />
                    </div>
                    <div className="col-lg-9">
                        <Spacer size="pt-4 pt-md-5" />
                        <CategoryInfo {...dataCategoryInfo} />
                        <Spacer size="pt-4 pt-md-5" />
                        <CategoryList items={dataCategorySubcategories} />
                        <Spacer size="pt-4 pt-md-5" />
                        <div className="row gutters-md">
                            <div className="col-md-6 col-lg-4 mb-2">
                                <CardProduct />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog

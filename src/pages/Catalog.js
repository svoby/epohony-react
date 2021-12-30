import React from 'react'
import SidemenuCategoryTitle from '../components/SideMenuTitle'
import Spacer from '../components/Spacer'

function SideMenuItem(props) {
    return <li className="d-flex">
        <a className="d-flex px-2 py-2 mb-1 flex-grow-1 align-items-center rounded text-none text-black hover-primary hover-bg-secondary-alpha-10" href="./catalog.html">
            <div className="sx-24 sx-md-32 mr-3"><img className="img-fluid" width="32" src="assets/images/svg/ico-kridlo.svg" alt="" /></div>
            <span className="mr-2 line-h-110">{props.name}</span><span className="text-micro text-none text-200 ml-auto">99</span>
        </a>
    </li>
}

function SideMenuNav(props) {
    return <nav>
        <ul className="nav flex-column">
            {props.items.map((item, key) => <SideMenuItem name={item} key={key} />)}
        </ul>
    </nav>
}

function Catalog() {
    const sideMenuItems = ['Item 1', 'Item 2', 'Item 3']
    return (
        <>
            <Spacer size="pt-4 pt-md-5" />
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mt-6 mt-lg-0 order-1 order-lg-0">
                        <Spacer size="pt-4 pt-md-5" />
                    </div>
                    <div className="col-lg-9">
                        <SidemenuCategoryTitle title="Kategorie" />
                        <SideMenuNav items={sideMenuItems} />
                        <Spacer size="pt-4 pt-md-5" />
                        <SidemenuCategoryTitle title="Výrobci pohonů" />
                        <SideMenuNav items={sideMenuItems} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Catalog

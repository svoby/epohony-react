import React from 'react';
import { CategoryType } from '../../global.types';
import SideMenuItem from "./SideMenuItem";

const SideMenuNav = ({ items } : { items: Array<CategoryType> }) => {

    if (items == null)
        return null;

    return (
        <nav>
            <ul className="nav flex-column">
                {items.map((item: CategoryType, key: any) => <SideMenuItem {...item} key={key} />)}
            </ul>
        </nav>
    )
}

export default SideMenuNav
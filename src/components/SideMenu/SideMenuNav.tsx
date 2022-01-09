import React from 'react';
import { ICategory } from '../../global.types';
import SideMenuItem from "./SideMenuItem";

const SideMenuNav = ({ items }: { items: Array<ICategory> }) => {

    if (items == null)
        return null;

    return (
        <nav>
            <ul className="nav flex-column">
                {items.map((item: ICategory, key: any) => <SideMenuItem {...item} key={key} />)}
            </ul>
        </nav>
    )
}

export default SideMenuNav
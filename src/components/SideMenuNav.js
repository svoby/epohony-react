import React from 'react';
import { SideMenuItem } from "./SideMenuItem";

export function SideMenuNav(props) {
    if (props.items == null)
        return null;

    return <nav>
        <ul className="nav flex-column">
            {props.items.map((item, key) => <SideMenuItem {...item} key={key} />)}
        </ul>
    </nav>;
}

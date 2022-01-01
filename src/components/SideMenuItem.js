import React from 'react';
import { Link } from 'react-router-dom';


export function SideMenuItem(props) {
    return <li className="d-flex">
        <Link to={`/category/${props.id}`} className="d-flex px-2 py-2 mb-1 flex-grow-1 align-items-center rounded text-none text-black hover-primary hover-bg-secondary-alpha-10">
            {props.icon && <div className="sx-24 sx-md-32 mr-3"><img className="img-fluid" width="32" src={props.icon} alt="" /></div>}
            <span className="mr-2 line-h-110">{props.attributes.title}</span><span className="text-micro text-none text-200 ml-auto">99</span>
        </Link>
    </li>;
}

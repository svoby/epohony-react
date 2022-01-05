import React from 'react';
import { Link } from 'react-router-dom';
import { CategoryType } from '../../global.types';

const  SideMenuItem = ({id, attributes} : CategoryType) => {
    return (
        <li className="d-flex">
            <Link to={`/category/${id}`} className="d-flex px-2 py-2 mb-1 flex-grow-1 align-items-center rounded text-none text-black hover-primary hover-bg-secondary-alpha-10">
                <span className="mr-2 line-h-110">
                    {attributes.title}
                </span>
                <span className="text-micro text-none text-200 ml-auto">99</span>
            </Link>
        </li>
    )
}

export default SideMenuItem
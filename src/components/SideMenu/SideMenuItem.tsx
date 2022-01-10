import { ChevronRightIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ICategory } from '../../global.types';

const SideMenuItem = ({ id, attributes }: ICategory) => {

    const { id: uriId } = useParams()
    const addClass = id === uriId ? 'bg-gradient-primary text-white' : 'text-black hover-primary hover-bg-secondary-alpha-10'
    const subItemsCount = attributes.products ? attributes.products.data.length : 0

    const ItemAppend = () => {
        if (subItemsCount === 0) {
            return <span className="ml-auto"><ChevronRightIcon className='sx-16' /></span>
        } else {
            return <span className="text-micro text-none text-200 ml-auto">{subItemsCount}</span>
        }
    }

    return (
        <li className="d-flex">
            <Link to={`${attributes.path}/${id}`} className={`d-flex p-3 mb-1 flex-grow-1 align-items-center rounded text-none ${addClass}`}>
                <span className="mr-2 line-h-110">
                    {attributes.title}
                </span>
                <ItemAppend />
            </Link>
        </li>
    )
}

export default SideMenuItem
import React from 'react'
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/outline'
import { CategoryType } from '../../global.types';

function CategoryListItem({ id, attributes } : CategoryType) {
    return (
        <div className="col-6 col-lg-3 mb-1">
            <Link to={`/category/${id}`} className="d-flex justify-content-between align-items-center text-micro text-900 border border-primary-alpha-25 hover-bg-primary-alpha-10 transition-primary rounded-lg pr-2">
                <span className="d-inline-flex align-items-center m-1">
                    <picture className="mr-2"><img src="https://via.placeholder.com/40x40.png" alt="" /></picture>{attributes.title}
                </span>
                <ChevronRightIcon className="sx-16 ml-4" />
            </Link>
        </div>)
}

function CategoryList({ items }: { items: Array<CategoryType> } ) {

    if (items == null)
        return null;

    return (
        <div className="row gutters-sm">
            {items.map((item, key) => <CategoryListItem {...item} key={key} />)}
        </div>
    )
}

export default CategoryList
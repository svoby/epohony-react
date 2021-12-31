import { ChevronRightIcon } from '@heroicons/react/outline'
import React from 'react'

function CategoryListItem(props) {
    return (
        <div className="col-6 col-lg-3 mb-1">
            <a className="d-flex justify-content-between align-items-center text-micro text-900 border border-primary-alpha-25 hover-bg-primary-alpha-10 transition-primary rounded-lg pr-2" href="#!">
                <span className="d-inline-flex align-items-center m-1">
                    <picture className="mr-2"><img src="https://via.placeholder.com/40x40.png" alt="" /></picture>{props.name}
                </span>
                <ChevronRightIcon className="sx-16 ml-4" />
            </a>
        </div>)
}

function CategoryList(props) {

    if (props.items == null)
        return null;

    return (
        <div className="row gutters-sm">
            {props.items.map((item, key) => <CategoryListItem {...item} key={key} />)}
        </div>
    )
}

export default CategoryList

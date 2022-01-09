import React, { useEffect, useState } from 'react'
import request, { gql } from 'graphql-request'
import { GRAPH_QL_API_ENTRYPOINT } from '../../global.constants'
import { PlusIcon } from '@heroicons/react/outline'
import { ICategory, IOffCanvas } from '../../global.types'
import PageOverlay from './PageOverlay'
import SideMenuNav from '../SideMenu/SideMenuNav'
import SideMenuTitle from '../SideMenu/SideMenuTitle'

const queryCategories = gql`
    query {
        categories {
            data {
                id
                attributes {
                    title
                }
            }
        }
    }
`

const OffCanvas = ({ shown, togglerHandler }: IOffCanvas) => {

    const [categories, setCategories] = useState<Array<ICategory>>([])

    useEffect(() => {
        request(GRAPH_QL_API_ENTRYPOINT, queryCategories)
            .then(data => {
                setCategories(data.categories.data)
            })
    }, [])

    return (
        <>
            <div className={`offcanvas offcanvas-end ${shown ? 'show' : ''}`}>
                <div className="offcanvas-header">
                    <button className="btn btn-secondary icon-box sx-40 rounded-circle" onClick={togglerHandler}>
                        <PlusIcon className="ico sx-24 transform-rotate-45deg" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="pr-md-4">
                        <SideMenuTitle title="Kategorie" />
                        <SideMenuNav items={categories} />
                    </div>
                </div>
            </div>
            <PageOverlay shown={shown} togglerHandler={togglerHandler} />
        </>
    )
}

export default OffCanvas

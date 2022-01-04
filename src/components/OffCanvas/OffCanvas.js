import React, { useEffect, useState } from 'react'
import { PlusIcon } from '@heroicons/react/outline'
import PageOverlay from './PageOverlay'
import request, { gql } from 'graphql-request'
import { GRAPH_QL_API_ENTRYPOINT } from '../../globals'
import SidemenuTitle from '../SideMenu/SideMenuTitle'
import SideMenuNav from '../SideMenu/SideMenuNav'

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

function OffCanvas(props) {

    const [categories, setCategories] = useState()

    useEffect(() => {
        request(GRAPH_QL_API_ENTRYPOINT, queryCategories)
            .then(data => setCategories(data.categories.data))
    }, [])

    return (
        <>
            <div className={`offcanvas offcanvas-end ${props.shown ? 'show' : ''}`}>
                <div className="offcanvas-header">
                    <button className="btn btn-secondary icon-box sx-40 rounded-circle" onClick={props.togglerHandler}>
                        <PlusIcon className="ico sx-24 transform-rotate-45deg" />
                    </button>
                </div>
                <div className="offcanvas-body">
                    <div className="pr-md-4">
                        <SidemenuTitle title="Kategorie" />
                        <SideMenuNav items={categories} />
                    </div>
                </div>
            </div>
            <PageOverlay shown={props.shown} togglerHandler={props.togglerHandler} />
        </>
    )
}

export default OffCanvas

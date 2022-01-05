import React from 'react'
import { SideMenuTitleType } from '../../global.types'

const SideMenuTitle = ({ title } : SideMenuTitleType) => {
    return (
        <div className="text-micro text-uppercase text-200 border-bottom border-200 pb-3 mb-3">
            {title}
        </div>
    )
}

export default SideMenuTitle

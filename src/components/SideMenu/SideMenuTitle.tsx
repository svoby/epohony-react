import React from 'react'
import { ISideMenuTitle } from '../../global.types'

const SideMenuTitle = ({ title }: ISideMenuTitle) => {
    return (
        <div className="text-micro text-uppercase text-200 border-bottom border-200 pb-3 mb-3">
            {title}
        </div>
    )
}

export default SideMenuTitle

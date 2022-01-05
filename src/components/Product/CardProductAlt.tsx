import React from 'react'
import { Link } from 'react-router-dom'
import Placeholder from '../../layout/Placeholder'

const CardProductAlt = () => {
    return (
        <div className="card h-100 bg-100">
            <Link to={`/product/1`} className="card h-100 bg-100 border border-white text-black text-none hover-bg-100 hover-border-secondary transition-primary">
                <Placeholder w="296" h="288" color="f2f3f7 " pictureClass="d-flex align-items-end p-2 pt-md-5 w-100" />
                <div className="d-flex flex-column justify-content-between h-100 px-4 pt-3 pb-4">
                    <div className="card-title font-weight-semibold line-h-133 line-clamp line-clamp__2">BH30/803 - ROGER Brushless</div>
                    <div className="letter-spacing-sm"><span className="h5">8&nbsp;990&nbsp;Kč </span>s&nbsp;DPH</div>
                </div>
            </Link>
        </div>
    )
}

export default CardProductAlt

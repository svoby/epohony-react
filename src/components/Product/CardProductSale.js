import React from 'react'
import { Link } from 'react-router-dom'

function CardProductSale() {
    return (
        <Link to="/product/1" className="card h-100 bg-white text-black border border-white text-none hover-bg-white hover-border-secondary transition-primary">
            <picture className="d-flex align-items-end p-2 pt-5 w-100"><img className="w-100" src="https://via.placeholder.com/192x132.png/f2f3f7" alt="" /></picture>
            <div className="d-flex flex-column justify-content-between h-100 px-4 pt-3 pb-4">
                <div className="card-title font-weight-semibold line-h-133 line-clamp line-clamp__3">BH30/803 - ROGER Brushless pohony posuvných bran do Umami lo-fi bushwick swag</div>
                <div className="letter-spacing-sm"><span className="h5">8&nbsp;990&nbsp;Kč </span>s&nbsp;DPH</div>
            </div>
        </Link>
    )
}

export default CardProductSale

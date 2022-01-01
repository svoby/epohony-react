import { ArrowRightIcon } from '@heroicons/react/outline'
import React from 'react'

function CardProductBig(props) {
    return (
        <div className="card h-100 bg-100">
            <a href="./product.html">
                <picture className="d-flex align-items-end p-2 pt-md-5 w-100 hover-up transition-primary"><img className="w-100" src="https://via.placeholder.com/296x288.png/f2f3f7" alt="" /></picture>
            </a>
            <div className="d-flex flex-column justify-content-between h-100 px-4 pt-3 pb-4">
                <div className="card-title">
                    <div className="card__tags">
                        <ul className="card__tags__list">
                            <li className="tag tag-shipping text-uppercase small">Doprava zdarma</li>
                            <li className="tag tag-instock text-uppercase small">Skladem</li>
                        </ul>
                        <div className="card__tags__sale">
                            <div className="d-flex align-items-center justify-content-center rounded-circle sx-64 bg-sale">-15%</div>
                        </div>
                    </div>
                    <div className="card__rating mb-3">
                        <div className="card__rating__rate" style={{ width: 50 + "%" }}></div>
                    </div><a className="hover-border-secondary hover-up transition-primary" href="./product.html">
                        <div className="font-weight-semibold line-h-133 line-clamp line-clamp__2">BH30/803 - ROGER Brushless pohony posuvných bran do Umami lo-fi bushwick swag</div></a>
                </div>
                <div className="letter-spacing-sm"><span className="h5 mb-4">8&nbsp;990&nbsp;Kč </span>s&nbsp;DPH
                    <s className="text-muted ml-2">1.780 Kč</s>
                </div>
                <a className="btn btn-outline-primary d-inline-flex justify-content-between w-100 mt-3" href="./cart.html">Vložit do košíku <ArrowRightIcon className="sx-24" /></a>
            </div>
        </div>
    )
}

export default CardProductBig

import { ArrowRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'
import ShopContext from '../../context/ShopContext'

function CardProduct(props) {
    return (
        <div className="card h-100 bg-100">
            <Link to={`/product/${props.id}`}>
                <picture className="d-flex align-items-end p-2 pt-md-5 w-100 hover-up transition-primary"><img className="w-100" src="https://via.placeholder.com/308x184.png/f2f3f7" alt="" /></picture>
            </Link>
            <div className="d-flex flex-column justify-content-between h-100 px-4 pt-3 pb-4">
                <div className="card-title">
                    <div className="card__tags">
                        <ul className="card__tags__list">
                            <li className="tag tag-success small">Skladem</li>
                            <li className="tag tag-tip small">Tip</li>
                            <li className="tag tag-action small">Akce</li>
                            <li className="tag tag-new small">Novinka</li>
                        </ul>
                        <div className="card__tags__sale">
                            <div className="d-flex align-items-center justify-content-center rounded-circle sx-64 bg-sale">-25%</div>
                        </div>
                    </div>
                    <div className="card__rating mb-3">
                        <div className="card__rating__rate" style={{ width: 50 + '%' }}></div>
                    </div>
                    <Link to={`/product/${props.id}`} className="hover-border-secondary hover-up transition-primary">
                        <div className="font-weight-semibold line-h-133 line-clamp line-clamp__2">{props.attributes.name}</div>
                    </Link>
                </div>
                <div className="letter-spacing-sm">
                    <div className="d-flex justify-content-between">
                        <div>
                            <span className="h5 mb-0">{props.attributes.price}&nbsp;Kč </span>s&nbsp;DPH
                            <div className="d-block text-micro">2&nbsp;000 bez&nbsp;DPH</div>
                        </div>
                        <s className="text-muted mt-1">1.780 Kč</s>
                    </div>
                </div>
                <ShopContext.Consumer>
                    {({ addToCart }) => (
                        <button className="btn btn-secondary d-inline-flex justify-content-between align-items-center w-100 text-uppercase mt-3" onClick={() => addToCart({ id: props.id, name: props.attributes.name, price: props.attributes.price })}>Vložit do košíku <ArrowRightIcon className="ico sx-24" /></button>
                    )}
                </ShopContext.Consumer>
            </div>
        </div>
    )
}

export default CardProduct

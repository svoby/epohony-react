import { ArrowRightIcon } from '@heroicons/react/outline'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShopContext from '../../context/ShopContext'
import { getPriceWithoutVAT } from '../../global.constants'
import { ActionType, ProductType } from '../../global.types'

const CardProduct = ({ product }: { product: ProductType }) => {

    const navigate = useNavigate()

    return (
        <div className="card h-100 bg-100">
            <Link to={`/product/${product.id}`}>
                <picture className="d-flex align-items-end p-2 pt-md-5 w-100 hover-up transition-primary">
                    <img className="w-100" src="https://via.placeholder.com/308x184.png/f2f3f7" alt="" />
                </picture>
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
                    <Link to={`/product/${product.id}`} className="hover-border-secondary hover-up transition-primary">
                        <div className="font-weight-semibold line-h-133 line-clamp line-clamp__2">{product.attributes.name}</div>
                    </Link>
                </div>
                <div className="letter-spacing-sm">
                    <div className="d-flex justify-content-between">
                        <div>
                            <span className="h5 mb-0">{product.attributes.price}&nbsp;Kč </span>s&nbsp;DPH
                            <div className="d-block text-micro">{getPriceWithoutVAT(product.attributes.price)} bez&nbsp;DPH</div>
                        </div>
                        <s className="text-muted mt-1">1.780 Kč</s>
                    </div>
                </div>
                <ShopContext.Consumer>
                    {({ dispatch }) => (
                        <button
                            className="btn btn-secondary d-inline-flex justify-content-between align-items-center w-100 text-uppercase mt-3"
                            onClick={() => {
                                dispatch({ type: ActionType.ADD_PRODUCT, productPayload: product })
                                navigate(`/cart/${product.id}`)
                            }}>
                            Vložit do košíku <ArrowRightIcon className="ico sx-24" />
                        </button>
                    )}
                </ShopContext.Consumer>
            </div>
        </div>
    )
}

export default CardProduct

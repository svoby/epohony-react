import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline'
import React, { useContext } from 'react'
import ShopContext from '../../context/ShopContext'
import { getPriceWithoutVAT } from '../../global.constants'
import { ActionType, IProduct } from '../../global.types'
import Placeholder from '../../layout/Placeholder'

const CartTableRow = ({ product }: { product: IProduct }) => {

    const { dispatch } = useContext(ShopContext)

    return (
        <div className="cart-table__row">
            <div className="cart-table__image">
                <Placeholder w="80" h="80" color="CCCCCC" />
            </div>
            <div className="cart-table__name">{product.attributes.name}</div>
            <div className="cart-table__amount" data-js="plusminus">
                <button onClick={() => dispatch({ type: ActionType.DECREASE_PRODUCT_COUNT, payload: product })} className="btn btn-outline-primary p-0 icon-box-inline sx-40 border border-500 rounded-circle">
                    <MinusIcon className='sx-24' />
                </button>
                <input className="cart-table__amount__input" type="text" readOnly value={product.quantity} />
                <button onClick={() => dispatch({ type: ActionType.INCREASE_PRODUCT_COUNT, payload: product })} className="btn btn-outline-primary p-0 icon-box-inline sx-40 border border-500 rounded-circle">
                    <PlusIcon className='sx-24' />
                </button>
            </div>
            <div className="cart-table__price">
                <div className="text-micro text-muted d-md-none">bez DPH</div>{getPriceWithoutVAT(product.attributes.price)} Kč
            </div>
            <div className="cart-table__price cart-table__price--vat">
                <div className="text-micro text-muted d-md-none">s DPH</div>{product.attributes.price} Kč
            </div>
            <div className="cart-table__action">
                <button onClick={() => dispatch({ type: ActionType.DELETE_PRODUCT, payload: product })} className="btn btn-sm text-danger icon-box-inline p-0 sx-48 hover-border-red hover-bg-red-alpha-10" title="Remove product"><TrashIcon className='sx-24' /></button>
            </div>
        </div>
    )
}

export default CartTableRow

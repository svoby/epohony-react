import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline'
import React, { useContext } from 'react'
import ShopContext from '../../context/ShopContext'
import Placeholder from '../../layout/Placeholder'

function CartTableRow(props) {

    const { addToCart, removeFromCart, trashProduct } = useContext(ShopContext)

    return (
        <div className="cart-table__row">
            <div className="cart-table__image">
                <Placeholder w="80" h="80" color="CCCCCC" />
            </div>
            <div className="cart-table__name">{props.product.name}</div>
            <div className="cart-table__amount" data-js="plusminus">
                <button onClick={() => removeFromCart(props.product)} disabled={props.product.quantity === 1 ? 'disabled' : ''} className="btn btn-outline-primary p-0 icon-box-inline sx-40 border border-500 rounded-circle">
                    <MinusIcon className='sx-24' />
                </button>
                <input className="cart-table__amount__input" type="text" readOnly value={props.product.quantity} />
                <button onClick={() => addToCart(props.product)} className="btn btn-outline-primary p-0 icon-box-inline sx-40 border border-500 rounded-circle js-plus">
                    <PlusIcon className='sx-24' />
                </button>
            </div>
            <div className="cart-table__price">
                <div className="text-micro text-muted d-md-none">bez DPH</div>{Math.floor(props.product.price / 1.21)} Kč
            </div>
            <div className="cart-table__price cart-table__price--vat">
                <div className="text-micro text-muted d-md-none">s DPH</div>{props.product.price} Kč
            </div>
            <div className="cart-table__action">
                <button onClick={() => trashProduct(props.product)} className="btn btn-sm text-danger icon-box-inline p-0 sx-48 hover-border-red hover-bg-red-alpha-10" title="Remove product"><TrashIcon className='sx-24' /></button>
            </div>
        </div>
    )
}

export default CartTableRow

import React from 'react'
import Placeholder from '../../layout/Placeholder'
import { PaymentType } from '../../global.types'

type CartPaymentRowType = {
    item: PaymentType,
    selectedId: number | undefined,
    groupName: string,
    onClickHandler: (payment: PaymentType) => void
}

const CartPaymentRow = ({ item, selectedId, groupName, onClickHandler } : CartPaymentRowType) => {

    if (item == null)
        return null

    return (
        <div className="cart-checkbox-row" onClick={() => onClickHandler(item)}>
            <label className="d-flex align-items-center py-3 px-2 px-md-4 bg-100 border border-100 rounded hover-bg-primary-alpha-10 transition-primary">
                <input className="ml-1 mr-2 mr-mb-3" type="radio" name={groupName} defaultChecked={ item.id === selectedId }/>
                <div className="icon-box sx-56 border rounded-circle bg-white mr-3 d-none d-md-flex">
                    <Placeholder w="34" h="35" color="CCCCCC" />
                </div>
                <div className="cart-checkbox-row__label line-h-120">
                    <div className="font-weight-bold">{item.name}</div>
                    <div className="small">{item.text}</div>
                </div>
                <div className="bg-holder rounded"></div>
                <div className="cart-checkbox-row__price">{item.price > 0 ? item.price + ' Kč' : 'Zdarma'}</div>
            </label>
        </div>
    )
}

export default CartPaymentRow

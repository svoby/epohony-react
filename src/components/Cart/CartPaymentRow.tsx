import React from 'react'
import Placeholder from '../../layout/Placeholder'
import { PaymentType } from '../../global.types'

type CartPaymentRowType = {
    payment: PaymentType,
    groupName: string,
    onClickHandler: (payment: PaymentType) => void
}

/**
 * Shipping and payment "radio" selector
 *
 * @param onClickHandler setState context handler
 * @param groupName Radio group unique group name
 * @param payment.name Item name (label)
 * @param payment.text Item text (description)
 * @param payment.price Item price
 */
const CartPaymentRow = ({ payment, groupName, onClickHandler } : CartPaymentRowType) => {
    return (
        <div className="cart-checkbox-row" onClick={() => onClickHandler(payment)}>
            <label className="d-flex align-items-center py-3 px-2 px-md-4 bg-100 border border-100 rounded hover-bg-primary-alpha-10 transition-primary">
                <input className="ml-1 mr-2 mr-mb-3" type="radio" name={groupName} />
                <div className="icon-box sx-56 border rounded-circle bg-white mr-3 d-none d-md-flex">
                    <Placeholder w="34" h="35" color="CCCCCC" />
                </div>
                <div className="cart-checkbox-row__label line-h-120">
                    <div className="font-weight-bold">{payment.name}</div>
                    <div className="small">{payment.text}</div>
                </div>
                <div className="bg-holder rounded"></div>
                <div className="cart-checkbox-row__price">{payment.price > 0 ? payment.price + ' Kč' : 'Zdarma'}</div>
            </label>
        </div>
    )
}

export default CartPaymentRow

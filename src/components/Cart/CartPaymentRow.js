import React from 'react'
import Placeholder from '../../layout/Placeholder'

/**
 * Shipping and payment "radio" selector
 *
 * @param props.onClickHandler setState context handler
 * @param props.groupName Radio group unique group name
 * @param props.payment.name Item name (label)
 * @param props.payment.text Item text (description)
 */
function CartPaymentRow(props) {
    return (
        <div className="cart-checkbox-row" onClick={() => props.onClickHandler(props.payment)}>
            <label className="d-flex align-items-center py-3 px-2 px-md-4 bg-100 border border-100 rounded hover-bg-primary-alpha-10 transition-primary">
                <input className="ml-1 mr-2 mr-mb-3" type="radio" name={props.groupName} />
                <div className="icon-box sx-56 border rounded-circle bg-white mr-3 d-none d-md-flex">
                    <Placeholder w="34" h="35" color="CCCCCC" />
                </div>
                <div className="cart-checkbox-row__label line-h-120">
                    <div className="font-weight-bold">{props.payment.name}</div>
                    <div className="small">{props.payment.text}</div>
                </div>
                <div className="bg-holder rounded"></div>
                <div className="cart-checkbox-row__price">{props.payment.price > 0 ? props.payment.price + ' Kč' : 'Zdarma'}</div>
            </label>
        </div>
    )
}

export default CartPaymentRow

import React from 'react'
import Placeholder from '../../layout/Placeholder'
import { CartSummaryType } from '../../global.types'
import { cartPriceReducer, getPriceWithoutVAT } from '../../global.constants'

const CartSummary = ({ cart } : CartSummaryType) => {

    let totalPrice = cart.products.reduce(cartPriceReducer, 0)
    totalPrice += (cart.payment?.price ? cart.payment.price : 0) + (cart.shipping?.price ? cart.shipping.price : 0)

    return (
        <div className="border rounded py-4 px-3">

            {/* Product list */}
            {cart.products.map((product, key) => (
                <div className="d-flex align-items-center mb-3" key={key}>
                    <Placeholder w="48" h="48" color="CCCCCC" pictureClass="mr-2" />
                    <div className="text-micro pr-3">
                        <div className="line-clamp line-clamp__1">{product.attributes.name}</div>({product.quantity} Ks)
                    </div>
                    <div className="ml-auto text-nowrap font-weight-bold small">{product.attributes.price * product.quantity} Kč</div>
                </div>
            ))}

            <div className="spacer pt-3"></div>
            <div className="border-top"></div>
            <div className="spacer pt-3"></div>

            {/* Error notice */}
            {(cart.payment == null || cart.shipping == null) &&
                <div className="alert alert-danger">Vyberte prosím dopravu a platbu</div>
            }

            {/* Price summary */}
            <table className="w-100 small">
                <tbody>
                    {cart.shipping?.price != null &&
                        <tr>
                            <td>{cart.shipping.name}</td>
                            <td className="text-right">{cart.shipping.price === 0 ? 'Zdarma' : cart.shipping.price}</td>
                        </tr>}
                    {cart.payment?.price != null &&
                        <tr>
                            <td>{cart.payment.name}</td>
                            <td className="text-right">{cart.payment.price === 0 ? 'Zdarma' : cart.payment.price}</td>
                        </tr>}
                    <tr>
                        <td>Celkem bez DPH</td>
                        <td className="text-right text-nowrap">{getPriceWithoutVAT(totalPrice)} Kč</td>
                    </tr>
                    <tr>
                        <td className="align-bottom">Celkem s DPH</td>
                        <td className="h5 text-right text-nowrap align-bottom">{totalPrice} Kč</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default CartSummary

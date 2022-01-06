import React, { ReactNode, useReducer } from 'react'
import { defaultCartState } from '../components/Cart/ShippingConfig'
import { ActionType, CartStateActionType, CartStateType, PaymentType, ProductType, ShippingType } from '../global.types'
import ShopContext from './ShopContext'

const reducer = (state: CartStateType, action: CartStateActionType): CartStateType => {

    const products = [...state.products]
    const index = products.findIndex((product: ProductType) => product.id === action.productPayload?.id)

    switch (action.type) {
        case ActionType.ADD_PRODUCT: {
            if (index < 0) {
                action.productPayload && (action.productPayload.quantity = 1)
                action.productPayload && products.push(action.productPayload)
            } else {
                products[index].quantity++
            }

            return { ...state, products: products }
        }
        case ActionType.INCREASE_PRODUCT_COUNT: {
            if (index > -1) {
                products[index].quantity++
            }

            return { ...state, products: products }
        }
        case ActionType.DECREASE_PRODUCT_COUNT: {
            if (index > -1) {
                products[index].quantity = Math.max(--products[index].quantity, 1)
            }

            return { ...state, products: products }
        }
        case ActionType.DELETE_PRODUCT: {
            const newProducts = products.filter((product: ProductType) => product.id !== action.productPayload?.id)

            return { ...state, products: newProducts }
        }
        case ActionType.PURGE_CART: {
            return defaultCartState
        }
        case ActionType.SET_SHIPPING: {
            const newShipping: ShippingType = action.shipping ? action.shipping : null

            return { ...state, shipping: newShipping }
        }
        case ActionType.SET_PAYMENT: {
            const newPayment: PaymentType = action.payment ? action.payment : null

            return { ...state, payment: newPayment }
        }
        default:
            return state;
    }
}

const Eshop = ({ children }: { children: ReactNode }) => {

    const [cart, dispatch] = useReducer(reducer, defaultCartState)

    return (
        <ShopContext.Provider value={{
            cart: cart,
            dispatch: dispatch
        }}>
            {children}
        </ShopContext.Provider>
    )
}

export default Eshop
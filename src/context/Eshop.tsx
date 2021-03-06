import React, { FC, useReducer } from 'react'
import { defaultCartState } from '../components/Cart/ShippingConfig'
import { ActionType, CartReducerActionsType, ICart, IProduct } from '../global.types'
import ShopContext from './ShopContext'

const reducer = (state: ICart, action: CartReducerActionsType): ICart => {

    const products = [...state.products]

    switch (action.type) {
        case ActionType.ADD_PRODUCT: {
            const index = products.findIndex((product: IProduct) => product.id === action.payload.id)

            if (index < 0) {
                action.payload.quantity = 1
                products.push(action.payload)
            } else {
                products[index].quantity++
            }

            return { ...state, products: products }
        }
        case ActionType.INCREASE_PRODUCT_COUNT: {
            const index = products.findIndex((product: IProduct) => product.id === action.payload.id)

            if (index > -1) {
                products[index].quantity++
            }

            return { ...state, products: products }
        }
        case ActionType.DECREASE_PRODUCT_COUNT: {
            const index = products.findIndex((product: IProduct) => product.id === action.payload.id)

            if (index > -1) {
                products[index].quantity = Math.max(--products[index].quantity, 1)
            }

            return { ...state, products: products }
        }
        case ActionType.DELETE_PRODUCT: {
            const newProducts = products.filter((product: IProduct) => product.id !== action.payload?.id)

            return { ...state, products: newProducts }
        }
        case ActionType.PURGE_CART: {
            return {
                products: [],
                shipping: null,
                payment: null,
                user: state.user,
                message: state.message
            }
        }
        case ActionType.SET_SHIPPING: {
            return { ...state, shipping: action.payload }
        }
        case ActionType.SET_PAYMENT: {
            return { ...state, payment: action.payload }
        }
        case ActionType.USER_LOGIN: {
            return { ...state, user: action.payload }
        }
        case ActionType.USER_LOGOUT: {
            return { ...state, user: null }
        }
        case ActionType.SHOW_FLASH_MESSAGE: {
            return { ...state, message: action.payload }
        }
        case ActionType.CLEAR_FLASH_MESSAGE: {
            return { ...state, message: null }
        }
        default:
            return state;
    }
}

const Eshop: FC = ({ children }) => {

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
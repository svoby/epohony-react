import React from 'react'
import { defaultCartState } from '../components/Cart/ShippingConfig'
import { CartReducerActionTypes } from '../global.types'

export default React.createContext({
    cart: defaultCartState,
    dispatch: (arg: CartReducerActionTypes) => {}
})
import React from 'react'
import { defaultCartState } from '../components/Cart/ShippingConfig'
import { CartStateActionType } from '../global.types'

export default React.createContext({
    cart: defaultCartState,
    dispatch: (arg: CartStateActionType) => {}
})
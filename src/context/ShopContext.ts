import React from 'react'
import { defaultPayment, defaultShipping } from '../components/Cart/ShippingConfig'
import { PaymentType, ProductType, ShippingType } from '../global.types'

export default React.createContext({
    cart: Array<ProductType>(),
    payment: defaultPayment,
    shipping: defaultShipping,
    setPayment: (payment: PaymentType) => { },
    setShipping: (shipping: ShippingType) => { },
    addToCart: (product: ProductType, redirect?: boolean) => { },
    removeFromCart: (product: ProductType) => { },
    trashProduct: (product: ProductType) => { },
    purgeCart: () => { }
})
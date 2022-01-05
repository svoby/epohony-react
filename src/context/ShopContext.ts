import React from 'react'
import { ProductType, PaymentType, ShippingType } from '../global.types'

export default React.createContext({
    cart: Array<ProductType>(),
    payment: { name: "", text: "", price: 0 },
    shipping: { name: "", text: "", price: 0 },
    setPayment: (payment: PaymentType) => { },
    setShipping: (shipping: ShippingType) => { },
    addToCart: (product: ProductType, redirect?: boolean) => { },
    removeFromCart: (product: ProductType) => { },
    trashProduct: (product: ProductType) => { },
    purgeCart: () => { }
})
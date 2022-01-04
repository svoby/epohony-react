import React from 'react'

export default React.createContext({
    cart: [],
    setPayment: () => { },
    setShipping: () => { },
    addToCart: () => { },
    removeFromCart: () => { },
    trashProduct: () => { }
})
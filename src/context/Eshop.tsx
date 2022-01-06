import React, { ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PaymentType, ProductType, ShippingType } from '../global.types'
import ShopContext from './ShopContext'

const Eshop = ({ children } : { children : ReactNode }) => {

    const [cart, setCart] = useState<Array<ProductType>>([])
    const [payment, setPayment] = useState<PaymentType>(null)
    const [shipping, setShipping] = useState<ShippingType>(null)
    const navigate = useNavigate()

    const addToCart = (product: ProductType, redirectToCart = false) => {
        const newCart = [...cart]
        const index = newCart.findIndex((item: ProductType) => item.id === product.id)

        // Product not added yet?
        if (index < 0) {
            newCart.push(product)
        } else {
            newCart[index].quantity++
        }

        // Refresh cart contexts
        setCart(newCart)

        // Force redirect?
        if (redirectToCart) {
            navigate(`/cart/${product.id}`)
        }
    }

    const removeFromCart = (product: ProductType) => {
        const newCart = [...cart]
        const index = newCart.findIndex((item) => item.id === product.id)

        let quantity = --newCart[index].quantity;

        if (quantity >= 1)
            setCart(newCart)

        if (quantity === 0)
            trashProduct(product)
    }

    const trashProduct = (product: ProductType) => {
        setCart(cart.filter(item => item.id !== product.id))
    }

    const purgeCart = () => setCart([])

    return (
        <ShopContext.Provider value={{
            cart: cart,
            payment: payment,
            shipping: shipping,
            setPayment: setPayment,
            setShipping: setShipping,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            trashProduct: trashProduct,
            purgeCart: purgeCart
        }}>
            {children}
        </ShopContext.Provider>
    )
}

export default Eshop
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ShopContext from './ShopContext'

const Eshop = (props) => {

    const [cart, setCart] = useState([])
    const [payment, setPayment] = useState(null)
    const [shipping, setShipping] = useState(null)
    const navigate = useNavigate()

    const addToCart = (product, redirectToCart = false) => {
        const newCart = [...cart]
        const index = newCart.findIndex((item) => item.id === product.id)

        // Product already added?
        if (index < 0) {
            newCart.push({ ...product, quantity: 1 })
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

    const removeFromCart = (product) => {
        const newCart = [...cart]
        const index = newCart.findIndex((item) => item.id === product.id)

        let quantity = --newCart[index].quantity;

        if (quantity >= 1)
            setCart(newCart)

        if (quantity === 0)
            trashProduct(product)
    }

    const trashProduct = (product) => {
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
            {props.children}
        </ShopContext.Provider>
    )
}

export default Eshop
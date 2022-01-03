import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ShopContext from './ShopContext'

const Eshop = (props) => {

    const [cart, setCart] = useState([{ id: "1", name: "Product name", price: 100, quantity: 1 }])
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
            window.scrollTo(0, 0)
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

    return (
        <ShopContext.Provider value={{
            cart: cart,
            addToCart: addToCart,
            removeFromCart: removeFromCart,
            trashProduct: trashProduct
        }}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default Eshop
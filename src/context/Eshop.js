import React, { useState } from 'react'
import ShopContext from './ShopContext'

const Eshop = (props) => {

    const [cart, setCart] = useState([])

    const addTocart = (product) => {
        const newCart = [...cart]
        const index = newCart.findIndex((item) => item.id === product.id)

        if (index < 0) {
            newCart.push({ ...product, quantity: 1 });
        } else {
            newCart[index].quantity++
        }

        setCart(newCart);
    }

    return (
        <ShopContext.Provider value={{
            cart: cart,
            addToCart: addTocart
        }}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default Eshop
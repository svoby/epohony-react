import { CartStateType, PaymentType, ShippingType } from "../../global.types"

export const defaultPayment: PaymentType = {
    id: -1,
    name: "Default payment",
    text: "Default payment description",
    price: 0
}

export const defaultShipping: ShippingType = {
    id: -1,
    name: "Default shipping",
    text: "Default shipping description",
    price: 0
}

export const defaultCartState: CartStateType = {
    products: [],
    payment: null,
    shipping: null
}

export const payments = [
    {
        id: 0,
        name: "Převodem",
        text: "Po zaplacení zboží odesíláme",
        price: 0
    },
    {
        id: 1,
        name: "Kartou",
        text: "V posledím kroku budete přesměrováni na platební bránu",
        price: 0
    },
    {
        id: 2,
        name: "Na dobírku",
        text: "Zaplatíte při doručení kurýrovi",
        price: 30
    }
]

export const shippings = [
    {
        id: 0,
        name: "DPD Parcel shop",
        text: "T64B",
        price: 0
    },
    {
        id: 1,
        name: "DPD Kurýr",
        text: "Rozvoz kurýrem po celé ČR",
        price: 190
    },
    {
        id: 2,
        name: "Top Trans",
        text: "Rozvoz objemnějších zásilek po celé ČR",
        price: 270
    }
]
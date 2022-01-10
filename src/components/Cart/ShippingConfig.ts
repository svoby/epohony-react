import { ICart } from "../../global.types"

export const defaultCartState: ICart = {
    products: [],
    payment: null,
    shipping: null,
    user: null
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
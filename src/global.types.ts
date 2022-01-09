export interface IProduct {
    id: string,
    attributes: {
        name: string,
        subtitle: string,
        price: number
    }
    quantity: number
}

export interface ICategory {
    id: string,
    attributes: {
        title: string
        products?: { data: []}
    }
}

export interface ICategoryInfo {
    title?: string,
    subtitle?: string,
    text?: string
}

export interface IOffCanvas {
    shown: Boolean,
    togglerHandler: () => void
}

export interface ISideMenuTitle {
    title: string
}

export interface ICart {
    products: IProduct[],
    payment: IPayment | null,
    shipping: IShipping | null
}

export interface IPayment {
    id: number,
    name: string,
    text: string,
    price: number
}

export interface IShipping {
    id: number,
    name: string,
    text: string,
    price: number
}

export enum ActionType {
    ADD_PRODUCT,
    INCREASE_PRODUCT_COUNT,
    DECREASE_PRODUCT_COUNT,
    PURGE_CART,
    DELETE_PRODUCT,
    SET_SHIPPING,
    SET_PAYMENT
}
export type CartReducerActionsType =
    { type: ActionType.ADD_PRODUCT, payload: IProduct } |
    { type: ActionType.INCREASE_PRODUCT_COUNT, payload: IProduct } |
    { type: ActionType.DECREASE_PRODUCT_COUNT, payload: IProduct } |
    { type: ActionType.DELETE_PRODUCT, payload: IProduct } |
    { type: ActionType.SET_SHIPPING, payload: IShipping } |
    { type: ActionType.SET_PAYMENT, payload: IPayment } |
    { type: ActionType.PURGE_CART }
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
        title: string,
        path: string
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
    shipping: IShipping | null,
    user: IUser | null
}

export interface IOrder {
    id?: number,
    attributes: {
        date: string,
        status: 'received' | 'sent',
        paid: boolean,
        products: Array<IProduct>
    }
}

export interface IOrderRow {
    order: IOrder,
    deleteHandler: (order: IOrder) => void
}

export interface IUser {
    name: string,
    surname: string,
    email: string,
    street: string,
    city: string,
    psc: string,
    phone?: string
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
    SET_PAYMENT,
    USER_LOGIN,
    USER_LOGOUT,
    DELETE_ORDER
}
export type CartReducerActionsType =
    { type: ActionType.ADD_PRODUCT, payload: IProduct } |
    { type: ActionType.INCREASE_PRODUCT_COUNT, payload: IProduct } |
    { type: ActionType.DECREASE_PRODUCT_COUNT, payload: IProduct } |
    { type: ActionType.DELETE_PRODUCT, payload: IProduct } |
    { type: ActionType.SET_SHIPPING, payload: IShipping } |
    { type: ActionType.SET_PAYMENT, payload: IPayment } |
    { type: ActionType.PURGE_CART } |
    { type: ActionType.USER_LOGIN, payload: IUser } |
    { type: ActionType.USER_LOGOUT } |
    { type: ActionType.DELETE_ORDER, payload: IOrder }
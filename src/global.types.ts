export type ProductType = {
    id: string,
    attributes: {
        name: string,
        subtitle: string,
        price: number
    }
    quantity: number
}

export type ProductCardType = {
    product: ProductType
}

export type CategoryType = {
    id: string,
    attributes: {
        title: string
    }
}

export type CategoryInfoType = {
    title?: string,
    subtitle?: string,
    text?: string
}

export type SideMenuItemType = {
    id: string;
    title: string;
}

export type OffCanvasPropType = {
    shown: Boolean,
    togglerHandler: () => void
}

export type SideMenuTitleType = {
    title: string
}

export type PageOverlayPropsType = {
    shown: boolean
}

export type CartStateType = {
    products: ProductType[],
    payment: PaymentType,
    shipping: ShippingType
}

export type CartActionType = {
    type: CartReducerActionsType,
    payload?: any
}

export type PaymentType = {
    id: number,
    name: string,
    text: string,
    price: number
} | null

export type ShippingType = {
    id: number,
    name: string,
    text: string,
    price: number
} | null

export type CartSummaryType = {
    cart: CartStateType
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
    { type: ActionType.ADD_PRODUCT, payload: ProductType } |
    { type: ActionType.INCREASE_PRODUCT_COUNT, payload: ProductType } |
    { type: ActionType.DECREASE_PRODUCT_COUNT, payload: ProductType } |
    { type: ActionType.DELETE_PRODUCT, payload: ProductType } |
    { type: ActionType.SET_SHIPPING, payload: ShippingType } |
    { type: ActionType.SET_PAYMENT, payload: PaymentType } |
    { type: ActionType.PURGE_CART }
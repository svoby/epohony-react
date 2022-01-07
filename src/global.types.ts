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
    type: CartReducerActionTypes,
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

// export enum ActionType {
//     ADD_PRODUCT = 'ADD_PRODUCT',
//     INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT',
//     DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT',
//     DELETE_PRODUCT = 'DELETE_PRODUCT',
//     PURGE_CART = 'PURGE_CART',
//     SET_SHIPPING = 'SET_SHIPPING',
//     SET_PAYMENT = 'SET_PAYMENT'
// }

export enum ActionType {
    ADD_PRODUCT,
    INCREASE_PRODUCT_COUNT,
    DECREASE_PRODUCT_COUNT,
    PURGE_CART,
    DELETE_PRODUCT,
    SET_SHIPPING,
    SET_PAYMENT
}

export type AddProductAction = {
    type: ActionType.ADD_PRODUCT,
    payload: ProductType
}

export type IncreaceProductCountAction = {
    type: ActionType.INCREASE_PRODUCT_COUNT,
    payload: ProductType
}

export type DecreaseProductCountAction = {
    type: ActionType.DECREASE_PRODUCT_COUNT,
    payload: ProductType
}

export type DeleteProductAction = {
    type: ActionType.DELETE_PRODUCT,
    payload: ProductType
}

export type PurgeCartAction = {
    type: ActionType.PURGE_CART
}

export type SetShippingAction = {
    type: ActionType.SET_SHIPPING,
    payload: ShippingType
}

export type SetPaymentAction = {
    type: ActionType.SET_PAYMENT,
    payload: ShippingType
}

export type CartReducerActionTypes =
    AddProductAction |
    IncreaceProductCountAction |
    DecreaseProductCountAction |
    DeleteProductAction |
    PurgeCartAction |
    SetShippingAction |
    SetPaymentAction
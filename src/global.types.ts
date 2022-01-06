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

export type SideMenuType = {
    items: Array<SideMenuItemType>
}

export type OffCanvasPropType = {
    shown: Boolean,
    togglerHandler: () => void
}

export type ScrollType = {
    top: number,
    left: number,
    behavior: string
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

export type CartStateActionType = {
    type: ActionType,
    productPayload?: ProductType,
    payment?: PaymentType,
    shipping?: ShippingType
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
    ADD_PRODUCT = 'ADD_PRODUCT',
    INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT',
    DECREASE_PRODUCT_COUNT = 'DECREASE_PRODUCT_COUNT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
    PURGE_CART = 'PURGE_CART',
    SET_SHIPPING = 'SET_SHIPPING',
    SET_PAYMENT = 'SET_PAYMENT'
}
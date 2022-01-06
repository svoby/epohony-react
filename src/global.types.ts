export type ProductType = {
    id: string,
    name: string,
    price: number,
    quantity: number
}

export type ProductCardType = {
    id: string,
    attributes: {
        name: string,
        subtitle: string,
        price: number
    }
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
    cart: ProductType[],
    payment: PaymentType,
    shipping: ShippingType
}
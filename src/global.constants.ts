import { ProductType } from "./global.types";

export const GRAPH_QL_API_ENTRYPOINT = 'https://epohony-strapi.herokuapp.com/graphql'
export const VAT_COEFFICIENT = 1.21

export const getPriceWithoutVAT = (price: number) => Math.floor(price / VAT_COEFFICIENT);
export const cartQuantityReducer = (prev: number, current: ProductType) => prev + current.quantity
export const cartPriceReducer = (prev: number, current: ProductType) => prev + current.price * current.quantity
export const scrollToTop = (speed?: any) => window.scrollTo({ top: 0, left: 0, behavior: speed });
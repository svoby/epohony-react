import { IProduct } from "./global.types";

export const GRAPHQL_API_ENTRYPOINT = process.env.NODE_ENV === 'production' ? 'https://epohony-strapi.herokuapp.com/graphql' : 'http://localhost:1337/graphql'
export const API_AUTH_URL = process.env.NODE_ENV === 'production' ? 'https://epohony-strapi.herokuapp.com/api/auth/local' : 'http://localhost:1337/api/auth/local'
export const API_ORDERS_URL = process.env.NODE_ENV === 'production' ? 'https://epohony-strapi.herokuapp.com/api/orders' : 'http://localhost:1337/api/orders'
export const VAT_COEFFICIENT = 1.21

export const getPriceWithoutVAT = (price: number) => Math.floor(price / VAT_COEFFICIENT);
export const cartQuantityReducer = (prev: number, current: IProduct) => prev + current.quantity
export const cartPriceReducer = (prev: number, current: IProduct) => prev + current.attributes.price * current.quantity
export const scrollToTop = (speed?: any) => window.scrollTo({ top: 0, left: 0, behavior: speed });
export const GRAPH_QL_API_ENTRYPOINT = process.env.NODE_ENV === 'development' ? 'http://localhost:1337/graphql' : 'https://epohony-strapi.herokuapp.com/graphql'
export const VAT_COEFFICIENT = 1.21
export const getPriceWithoutVAT = (price) => Math.floor(price / VAT_COEFFICIENT);
export const cartPriceReducer = (prev, current) => prev + current.price * current.quantity
export const scrollToTop = (speed = 'smooth') => window.scrollTo({ top: 0, left: 0, behavior: speed });
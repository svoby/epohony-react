import { useContext, useEffect } from "react"
import ShopContext from "../../context/ShopContext"
import { scrollToTop } from "../../global.constants"
import { ActionType, ICart } from "../../global.types"
import { Authenticate } from "./API"

const useAutoLogin = (cart: ICart) => {

    const { dispatch } = useContext(ShopContext)

    useEffect(() => {

        if (!cart.user) {
            dispatch({
                type: ActionType.SHOW_FLASH_MESSAGE,
                payload: {
                    type: 'warning',
                    text: 'Automatické přihlašování uživatele…'
                }
            })

            Authenticate()
                .then(data => {
                    dispatch({
                        type: ActionType.USER_LOGIN,
                        payload: data
                    })

                    dispatch({
                        type: ActionType.SHOW_FLASH_MESSAGE,
                        payload: {
                            type: 'success',
                            text: 'Uživatel byl <strong>automaticky</strong> přihlášen.'
                        }
                    })
                })
        }

        scrollToTop()
    }, [])
}

export default useAutoLogin

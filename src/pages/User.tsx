import React, { FC, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FlashMessage } from '../components/FlashMessage'
import { Authenticate } from '../components/User/API'
import UserInfo from '../components/User/UserInfo'
import UserOrders from '../components/User/UserOrders'
import ShopContext from '../context/ShopContext'
import { scrollToTop } from '../global.constants'
import { ActionType } from '../global.types'
import { Col, Spacer } from '../layout/Grid'

const User: FC = () => {

    const { cart, dispatch } = useContext(ShopContext)
    const { id: uriId } = useParams()

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

    return (
        <Col size="col-lg-9">

            <FlashMessage />

            {/* User info */}
            {uriId === 'info' && cart.user && <UserInfo user={cart.user} />}

            {/* Orders history */}
            {uriId === 'orders' && cart.user && <UserOrders />}

            <Spacer size="pt-7" />
        </Col>
    )
}

export default User
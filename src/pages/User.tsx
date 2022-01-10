import React, { FC, useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
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
    let [autoLogged, setAutoLogged] = useState(false)

    useEffect(() => {
        if (!cart.user) {
            Authenticate()
                .then(data => {
                    dispatch({
                        type: ActionType.USER_LOGIN,
                        payload: data
                    })

                    setAutoLogged(true)
                })
        }

        scrollToTop()
    }, [])

    return (
        <Col size="col-lg-9">

            {!cart.user && !autoLogged && <div className='alert alert-warning mb-5'>Automatické přihlašování uživatele…</div>}
            {cart.user && autoLogged && <div className='alert alert-success mb-5'>Uživatel byl <strong>automaticky</strong> přihlášen.</div>}

            {/* User info */}
            {uriId === 'info' && cart.user && <UserInfo user={cart.user} />}

            {/* Orders history */}
            {uriId === 'orders' && cart.user && <UserOrders />}

            <Spacer size="pt-7" />
        </Col>
    )
}

export default User
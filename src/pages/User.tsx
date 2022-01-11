import React, { FC, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FlashMessage } from '../components/FlashMessage'
import useAutoLogin from '../components/User/useAutoLogin'
import UserInfo from '../components/User/UserInfo'
import UserOrders from '../components/User/UserOrders'
import ShopContext from '../context/ShopContext'
import { Col, Spacer } from '../layout/Grid'

const User: FC = () => {

    const { cart, dispatch } = useContext(ShopContext)
    const { id: subpage } = useParams()

    useAutoLogin(cart)

    return (
        <Col size="col-lg-9">

            <FlashMessage />

            {/* User info */}
            {subpage === 'info' && cart.user && <UserInfo user={cart.user} />}

            {/* Orders history */}
            {subpage === 'orders' && cart.user && <UserOrders />}

            <Spacer size="pt-7" />
        </Col>
    )
}

export default User
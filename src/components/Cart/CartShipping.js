import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ShopContext from '../../context/ShopContext'
import { Container, Spacer } from '../../layout/Grid'
import { CheckIcon, ChevronRightIcon, IdentificationIcon, TruckIcon } from '@heroicons/react/outline'
import SwiperAltProducts from '../Swipers/SwiperAltProducts'
import CartIsEmptyWarning from "./CartIsEmptyWarning"
import CartBottonNavigation from './CartBottonNavigation'

const CartShipping = () => {

    const navigate = useNavigate()
    const { cart } = useContext(ShopContext)
    // const totalPrice = cart.reduce((prev, current) => { return prev + current.price * current.quantity }, 0)

    return (
        <Container>
            <Spacer size="pt-6" />

            <h1 className="h2 text-uppercase">Košík</h1>

            {!cart.length ? (
                <CartIsEmptyWarning />
            ) : (
                <>
                    <CartSteps />
                    <Spacer size="pt-5" />
                </>
            )}

            <Spacer size="pt-5" />

            <CartBottonNavigation backLinkHandler={() => navigate(-1)} cart={cart} nextStepLabel="Pokračovat" />
            <Spacer size="pt-6" />

            <h3>Alternativní produkty</h3>
            <SwiperAltProducts />
            <Spacer size="pt-5" />

            <h3>Příslušenství</h3>
            <SwiperAltProducts />
            <Spacer size="pt-5" />

        </Container>
    )
}

const CartSteps = () => (
    <div className="bg-white border border-capsule p-2 d-none d-md-block">
        <div className="row gutters-md">
            <div className="col-4">
                <Link to="/cart/list" className="align-items-center border-capsule d-flex h-100 hover-bg-primary-alpha-20 p-3 text-none">
                    <div className="icon-box-inline sx-40 rounded-circle border bg-primary text-white border-current mr-3">
                        <CheckIcon className='sx-24' />
                    </div>
                    <div className="line-h-100">1. Cart</div>
                    <div className="d-inline-block sx-32 ml-auto">
                        <ChevronRightIcon className='sx-32' />
                    </div>
                </Link>
            </div>
            <div className="col-4">
                <div className="d-flex h-100 align-items-center p-3 text-none border-capsule bg-gradient-primary text-white">
                    <div className="icon-box-inline sx-40 rounded-circle border border-current mr-3">
                        <TruckIcon className='sx-24' />
                    </div>
                    <div className="line-h-100">2. Shipping / Payment</div>
                    <div className="d-inline-block sx-32 ml-auto">
                        <ChevronRightIcon className='sx-32' />
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="d-flex h-100 align-items-center p-3 text-none border-capsule text-500">
                    <div className="icon-box-inline sx-40 rounded-circle border border-current mr-3">
                        <IdentificationIcon className='sx-24' />
                    </div>
                    <div className="line-h-100">3. Delivery</div>
                </div>
            </div>
        </div>
    </div>
)

export default CartShipping
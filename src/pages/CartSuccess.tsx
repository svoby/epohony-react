import React, { useContext, useEffect } from 'react'
import ShopContext from '../context/ShopContext'
import { Container, Spacer } from '../layout/Grid'
import { ArrowNarrowDownIcon, ArrowNarrowRightIcon, ArrowRightIcon, CheckIcon, GiftIcon, HomeIcon, TruckIcon } from '@heroicons/react/outline'
import SwiperAltProducts from '../components/Swipers/SwiperAltProducts'
import { scrollToTop } from '../global.constants'
import { ActionType, IOrder } from '../global.types'
import { Link } from 'react-router-dom'
import { SaveOrder } from '../components/User/API'

export default function CartSuccess() {

    const { cart, dispatch } = useContext(ShopContext)
    const order: IOrder = {
        attributes: {
            status: 'received',
            date: new Date().toISOString(),
            paid: false,
            products: cart.products
        }
    }

    useEffect(() => {
        SaveOrder(order)
        dispatch({ type: ActionType.PURGE_CART })
        scrollToTop()
    }, [])

    return (
        <Container>
            <Spacer size="pt-6" />
            <Spacer size="pt-5" />

            <Container>
                <div className="icon-box bg-success text-white sx-64 rounded-circle mx-auto mb-3">
                    <CheckIcon className='sx-48' />
                </div>
                <h1 className="h4 text-success text-center font-weight-normal">Děkujeme!<br />Objednávka byla dokončena</h1>
                <p className="text-center"><Link to="/user/orders" className="btn btn-warning">Přejít do objednávek <ArrowRightIcon className='sx-24'></ArrowRightIcon></Link></p>
            </Container>

            <Spacer size="pt-7" />

            <div className="d-flex justify-content-center flex-column flex-md-row">
                <div className="d-inline-block align-top">
                    <div className="bg-success text-white sx-48 sx-md-80 icon-box rounded-circle mb-3 mx-auto">
                        <CheckIcon className='sx-32 sx-md-48' />
                    </div>
                    <h6 className="text-success font-weight-normal text-center">Obj. přijata</h6>
                </div>
                <div className="d-none d-md-inline-block align-top text-200 mx-4">
                    <div className="sx-80 icon-box">
                        <ArrowNarrowRightIcon className='sx-48' />
                    </div>
                </div>
                <div className="d-md-none sx-48 icon-box text-200 mx-auto">
                    <ArrowNarrowDownIcon className='sx-24' />
                </div>
                <div className="d-inline-block align-top text-primary">
                    <div className="sx-48 sx-md-80 icon-box border border-primary border-2 rounded-circle mb-3 mx-auto">
                        <GiftIcon className='sx-32 sx-md-48' />
                    </div>
                    <h6 className="text-primary font-weight-normal text-center">Zabalíme</h6>
                </div>
                <div className="d-none d-md-inline-block align-top text-200 mx-4">
                    <div className="sx-80 icon-box">
                        <ArrowNarrowRightIcon className='sx-48' />
                    </div>
                </div>
                <div className="d-md-none sx-48 icon-box text-200 mx-auto">
                    <ArrowNarrowDownIcon className='sx-24' />
                </div>
                <div className="d-inline-block align-top text-primary">
                    <div className="sx-48 sx-md-80 icon-box border border-primary border-2 rounded-circle mb-3 mx-auto">
                        <TruckIcon className='sx-32 sx-md-48' />
                    </div>
                    <h6 className="text-primary font-weight-normal text-center">Doručujeme</h6>
                </div>
                <div className="d-none d-md-inline-block align-top text-200 mx-4">
                    <div className="sx-80 icon-box">
                        <ArrowNarrowRightIcon className='sx-48' />
                    </div>
                </div>
                <div className="d-md-none sx-48 icon-box text-200 mx-auto">
                    <ArrowNarrowDownIcon className='sx-24' />
                </div>
                <div className="d-inline-block align-top text-primary">
                    <div className="sx-48 sx-md-80 icon-box border border-primary border-2 rounded-circle mb-3 mx-auto">
                        <HomeIcon className='sx-32 sx-md-48' />
                    </div>
                    <h6 className="text-primary font-weight-normal text-center">Předáme</h6>
                </div>
            </div>

            <Spacer size="pt-7" />

            <h3>Novinky na našem eshopu</h3>
            <SwiperAltProducts />
            <Spacer size="pt-5" />

        </Container>
    )
}
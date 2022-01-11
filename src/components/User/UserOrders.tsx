import request, { gql } from 'graphql-request'
import React, { FC, useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ShopContext from '../../context/ShopContext'
import { GRAPHQL_API_ENTRYPOINT } from '../../global.constants'
import { ActionType, IOrder } from '../../global.types'
import { DeleteOrder } from './API'
import OrderTableRow from './OrderTableRow'

const queryOrders = gql`
    query {
        orders {
            data {
                id
                attributes {
                    date
                    products
                }
            }
        }
    }
`

const UserOrders: FC = () => {

    const { dispatch } = useContext(ShopContext)
    const [dataOrders, setDataOrders] = useState<IOrder[]>([])

    const deleteHandler = (order: IOrder) => {
        DeleteOrder(order)
            .then(() => {
                setDataOrders((orders) => orders.filter(i => i.id !== order.id))
                dispatch({
                    type: ActionType.SHOW_FLASH_MESSAGE,
                    payload: {
                        type: 'success',
                        text: `Objednávka <strong>č. ${order.id}</strong> smazána.`
                    }
                })
            })
    }

    useEffect(() => {
        request(GRAPHQL_API_ENTRYPOINT, queryOrders)
            .then((data) => {
                setDataOrders(data.orders.data)
            });
    }, [])

    return (
        <div className="card border-2 border-300">
            <div className="card-header rounded-0 p-4 bg-300">
                <h4>Moje objednávky</h4>
            </div>
            <div className="card-body">

                {/* No orders yet */}
                {dataOrders.length === 0 &&
                    <div className="alert alert-warning mb-0">
                        Zatím žádné objednávky. Můžete nakoupit v našem <Link to="/category/1">katalogu</Link>
                    </div>}

                {/* Order list */}
                {dataOrders.length !== 0 &&
                    <div className="table-responsive">
                        <table className="table table-striped table-borderless table-hover">
                            <thead>
                                <tr>
                                    <th className="text-uppercase">Číslo obj.</th>
                                    <th className="text-uppercase">Vytvořena</th>
                                    <th className="text-uppercase">Stav obj.</th>
                                    <th className="text-uppercase">Platba</th>
                                    <th className="text-uppercase">Cena s DPH</th>
                                    <th className="text-uppercase" style={{ width: "1%" }}>Akce</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dataOrders.map((order, key) => <OrderTableRow order={order} deleteHandler={deleteHandler} key={key} />)}
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    )
}

export default UserOrders
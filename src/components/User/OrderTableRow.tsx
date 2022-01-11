import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { cartPriceReducer } from '../../global.constants';
import { IOrderRow } from '../../global.types';

const OrderTableRow = ({ order, deleteHandler }: IOrderRow) => {

    const totalPrice = order.attributes.products.reduce(cartPriceReducer, 0)
    const date = new Date(order.attributes.date);
    const dateCreated = `${date.getDate()}.${date.getMonth()}. ${date.getFullYear()}`

    return (
        <tr>
            <td className="align-middle">
                <Link to={`#/user/orders/${order.id}`}>00000000{order.id}</Link>
            </td>
            <td className="align-middle">{dateCreated}</td>
            <td className="align-middle"><span className={`badge ${order.attributes.status === 'sent' ? 'badge-info' : 'badge-success'}`}>Doručena</span></td>
            <td className="align-middle"><span className="badge badge-danger">Nezaplacena</span></td>
            <td className="align-middle"><span className="text-nowrap">{totalPrice}&nbsp;Kč</span></td>
            <td className="text-nowrap">
                <Link to={`#/user/orders/${order.id}`} className="btn btn-sm btn-outline-primary rounded-circle icon-box-inline p-0 sx-40 ml-2" title="Upravit objednávku">
                    <PencilIcon className='sx-24' />
                </Link>
                <button onClick={() => deleteHandler(order)} className="btn btn-sm text-danger icon-box-inline rounded-circle p-0 sx-40 ml-2 hover-bg-red-alpha-10" title="Smazat objednávku">
                    <TrashIcon className='sx-24' />
                </button>
            </td>
        </tr>
    );
}

export default OrderTableRow
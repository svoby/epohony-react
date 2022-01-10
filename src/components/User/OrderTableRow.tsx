import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { cartPriceReducer } from '../../global.constants';
import { IOrder } from '../../global.types';

const OrderTableRow = ({ id, attributes }: IOrder) => {

    const totalPrice = attributes.products.reduce(cartPriceReducer, 0)
    const date = new Date(attributes.date);
    const dateCreated = `${date.getDate()}.${date.getMonth()}. ${date.getFullYear()}`

    return (
        <tr>
            <td className="align-middle">
                <Link to={`#/user/orders/${id}`}>00000000{id}</Link>
            </td>
            <td className="align-middle">{dateCreated}</td>
            <td className="align-middle"><span className={`badge ${attributes.status === 'sent' ? 'badge-info' : 'badge-success'}`}>Doručena</span></td>
            <td className="align-middle"><span className="badge badge-danger">Nezaplacena</span></td>
            <td className="align-middle"><span className="text-nowrap">{totalPrice}&nbsp;Kč</span></td>
            <td className="text-nowrap">
                <Link to={`#/user/orders/${id}`} className="btn btn-sm btn-outline-primary rounded-circle icon-box-inline p-0 sx-40 ml-2" title="Upravit objednávku">
                    <PencilIcon className='sx-24' />
                </Link>
                <button className="btn btn-sm text-danger icon-box-inline rounded-circle p-0 sx-40 ml-2 hover-bg-red-alpha-10" title="Smazat objednávku">
                    <TrashIcon className='sx-24' />
                </button>
            </td>
        </tr>
    );
}

export default OrderTableRow
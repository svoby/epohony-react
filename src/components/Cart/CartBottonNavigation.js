import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline';

/**
 * Back and next step buttons in cart
 *
 * @param backLinkHandler history onClick handler
 * @param nextStepLabel Next step button label
 * @param cart Cart context content
 */
const CartBottonNavigation = (props) => {
    return (
        <div className="d-flex justify-content-between align-items-center border-top border-bottom border-200 py-3">
            <span className="btn btn-lg btn-link primary" onClick={props.backLinkHandler}>
                <ArrowNarrowLeftIcon className='sx-24 mr-2' /> Zpět
            </span>
            <Link to="/cart/delivery" className={`btn btn-lg flex-grow-0 btn-green d-inline-flex align-items-center text-uppercase ${!props.cart.length ? ' disabled' : ''}`}>
                {props.nextStepLabel} <ArrowNarrowRightIcon className='sx-24 ml-2' />
            </Link>
        </div>
    );
}

export default CartBottonNavigation
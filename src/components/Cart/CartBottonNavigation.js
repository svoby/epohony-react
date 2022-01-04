import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline';

/**
 * Back and next step buttons in cart
 *
 * @param props.backLinkHandler History onClick handler
 * @param props.nextStepLinkTo History onClick handler
 * @param props.nextStepLabel Next step button label
 * @param props.cart Cart context content
 * @param props.disabled Diable next step button
 */
const CartBottonNavigation = (props) => {
    return (
        <div className="d-flex justify-content-between align-items-center border-top border-bottom border-200 py-3">
            <span className="btn btn-lg btn-link primary" onClick={props.backLinkHandler}>
                <ArrowNarrowLeftIcon className='sx-24 mr-2' /> Zpět
            </span>
            <Link to={props.nextStepLinkTo} className={`btn btn-lg flex-grow-0 btn-green d-inline-flex align-items-center text-uppercase ${props.disabled ? ' disabled' : ''}`}>
                {props.nextStepLabel} <ArrowNarrowRightIcon className='sx-24 ml-2' />
            </Link>
        </div>
    );
}

export default CartBottonNavigation
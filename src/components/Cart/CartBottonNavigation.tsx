import React from 'react';
import { Link, To } from 'react-router-dom';
import { ArrowNarrowLeftIcon, ArrowNarrowRightIcon } from '@heroicons/react/outline';

type CartBottomNavType = {
    nextStepLabel: string,
    nextStepLinkTo: string,
    nextStepHandler?: () => void,
    backLinkHandler: () => void,
    disabled: boolean
}

/**
 * Back and next step buttons in cart
 *
 * @param backLinkHandler Prev step onClick handler
 * @param nextStepLinkTo Next step link URL
 * @param nextStepLabel Next step button label
 * @param nextStepHandler Next step button onClick handler
 * @param cart Cart context content
 * @param disabled Diable next step button
 */
const CartBottomNavigation = ({ backLinkHandler, nextStepLinkTo, nextStepHandler, nextStepLabel, disabled } : CartBottomNavType) => {
    return (
        <div className="d-flex justify-content-between align-items-center border-top border-bottom border-200 py-3">
            <span className="btn btn-lg btn-link primary" onClick={backLinkHandler}>
                <ArrowNarrowLeftIcon className='sx-24 mr-2' /> Zpět
            </span>
            <Link className={`btn btn-lg flex-grow-0 btn-green d-inline-flex align-items-center text-uppercase ${disabled ? ' disabled' : ''}`}
                to={nextStepLinkTo}
                onClick={nextStepHandler}>
                {nextStepLabel} <ArrowNarrowRightIcon className='sx-24 ml-2' />
            </Link>
        </div>
    );
}

export default CartBottomNavigation
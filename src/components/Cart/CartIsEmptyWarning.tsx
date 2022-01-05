import React from 'react';
import { Link } from 'react-router-dom';

const CartIsEmptyWarning = () => {
    return (
        <div className="alert alert-danger text-center">
            <div className="py-3">
                Váš košík je prázdný.
            </div>
            <Link to="/category/1" className='btn btn-primary'>Zobrazit katalog</Link>
        </div>);
}

export default CartIsEmptyWarning;
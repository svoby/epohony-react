import { XIcon } from '@heroicons/react/outline'
import React, { FC, useContext, useEffect } from 'react'
import styled from 'styled-components';
import ShopContext from '../context/ShopContext'
import { ActionType } from '../global.types';

const CloseBtn = styled.span`
  cursor: pointer;
`;

export const FlashMessage: FC = () => {

    const { cart, dispatch } = useContext(ShopContext)

    const handleClose = () => {
        dispatch({ type: ActionType.CLEAR_FLASH_MESSAGE })
    }

    // Clear message on unmount
    useEffect(() => () => handleClose(), [])

    if (cart.message == null)
        return null

    return (
        <div className={`d-flex align-items-center alert alert-${cart.message.type}`}>
            <div dangerouslySetInnerHTML={{ __html: cart.message.text }} />
            <CloseBtn className='icon-box ml-auto' onClick={handleClose}><XIcon className='sx-24' /></CloseBtn>
        </div>
    )
}
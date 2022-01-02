import React from 'react'
import Placeholder from '../../layout/Placeholder'

function ProductImageThumbnail(props) {
    return (
        <div onClick={() => props.onClickHandler(parseInt(props.id))} className={`product-gallery-thumblist-item ${props.id === props.activeId ? 'active' : ''}`}>
            <Placeholder w="68" h="72" color="666666" />
        </div>
    )
}

export default ProductImageThumbnail

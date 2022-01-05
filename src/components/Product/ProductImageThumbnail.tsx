import React from 'react'
import Placeholder from '../../layout/Placeholder'

type ProductImageThumbnailType = {
    id: number,
    activeId: number,
    onClickHandler: (id: number) => void
}

function ProductImageThumbnail({ id, activeId, onClickHandler } : ProductImageThumbnailType) {
    return (
        <div onClick={() => onClickHandler(id)} className={`product-gallery-thumblist-item ${id === activeId ? 'active' : ''}`}>
            <Placeholder w="68" h="72" color="666666" />
        </div>
    )
}

export default ProductImageThumbnail

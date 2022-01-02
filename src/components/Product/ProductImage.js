import React from 'react'
import Placeholder from '../../layout/Placeholder'

function ProductImage(props) {
    return (
        <div className={`product-gallery-preview-item ${props.id === props.activeId ? 'active' : ''}`}>
            <a href="https://via.placeholder.com/1024x768.png?text=Product%20photo%20detail%20(1024%20x%20768)" data-fancybox="prod-detail">
                <Placeholder w="444" h="460" color="DDDDDD" />
            </a>
        </div>
    )
}

export default ProductImage

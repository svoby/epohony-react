import React from 'react'

/**
 * Image placeholder
 *
 * @param w image width
 * @param h image height
 * @param color color
 * @param pictureClass <picture className
 * @param imgClass <img className
 */
function Placeholder(props) {
    return (
        <picture className={props.pictureClass}>
            <img className={`w-100 ${props.imgClass}`} src={`https://via.placeholder.com/${props.w}x${props.h}.png/${props.color}`} alt="" />
        </picture>
    )
}

export default Placeholder
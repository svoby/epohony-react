import React from 'react'

type PlaceHolderType = {
    w: string,
    h: string,
    color: string,
    pictureClass?: string,
    imgClass?: string
}

/**
 * Image placeholder
 *
 * @prop {string} w image width
 * @prop {string} h image height
 * @prop {string} color color
 * @prop {string} pictureClass <picture className
 * @prop {string} imgClass <img className
 */
function Placeholder({ w, h, color, pictureClass, imgClass }: PlaceHolderType ) {
    return (
        <picture className={pictureClass}>
            <img className={`w-100 ${imgClass}`} src={`https://via.placeholder.com/${w}x${h}.png/${color}`} alt="" />
        </picture>
    )
}

export default Placeholder
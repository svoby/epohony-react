import React from 'react'

function Placeholder(props) {
    return (
        <picture className={props.pictureClass}>
            <img className={`w-100 ${props.imgClass}`} src={`https://via.placeholder.com/${props.w}x${props.h}.png/${props.color}`} alt="" />
        </picture>
    )
}

export default Placeholder
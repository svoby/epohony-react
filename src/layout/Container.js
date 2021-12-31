import React from 'react'

export default function Container(props) {
    return (
        <div className={`container ${props.size ? props.size : ''}`}>{props.children}</ div>
    )
}

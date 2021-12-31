import React from 'react'

export default function Row(props) {
    return (
        <div className={`row ${props.size ? props.size : ''}`}>{props.children}</ div>
    )
}

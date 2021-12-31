import React from 'react'

export default function Col(props) {
    return (
        <div className={props.size ? props.size : 'col'}>{props.children}</div>
    )
}

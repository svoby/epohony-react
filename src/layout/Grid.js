import React from 'react'

export function Container(props) {
    return (
        <div className={`container ${props.size ? props.size : ''}`}>{props.children}</ div>
    )
}

export function Row(props) {
    return (
        <div className={`row ${props.size ? props.size : ''}`}>{props.children}</ div>
    )
}

export function Col(props) {
    return (
        <div className={props.size ? props.size : 'col'}>{props.children}</div>
    )
}

export function Spacer(props) {
    return <div className={`spacer ${props.size ? props.size : ''}`} />;
}
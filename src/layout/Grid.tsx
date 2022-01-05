import React, { ReactNode } from 'react'

type ContainerPropsType = {
    size?: string,
    children?: ReactNode
}

export function Container({ size, children } : ContainerPropsType) {
    return (
        <div className={`container ${size ? size : ''}`}>{children}</ div>
    )
}

export function Row({ size, children } : ContainerPropsType) {
    return (
        <div className={`row ${size ? size : ''}`}>{children}</ div>
    )
}

export function Col({ size, children } : ContainerPropsType) {
    return (
        <div className={size ? size : 'col'}>{children}</div>
    )
}

export function Spacer({ size } : ContainerPropsType) {
    return <div className={`spacer ${size ? size : ''}`} />;
}
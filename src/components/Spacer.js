import React from 'react';

export default function Spacer(props) {
    return <div className={`spacer ${props.size ? props.size : ''}`} />;
}

import React from 'react'
import Spacer from './Spacer'

function CategoryInfo(props) {
    return (
        <section>
            <Spacer size="pt-4 pt-md-5" />
            <h1 className="text-uppercase">{props.title}</h1>
            <h5 className="text-uppercase">{props.subtitle}</h5>
            <div className="small line-h-150">
                {props.text}
            </div>
        </section>
    )
}

export default CategoryInfo

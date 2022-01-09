import React from 'react'
import { ICategoryInfo } from '../../global.types';
import { Spacer } from "../../layout/Grid";

const CategoryInfo = ({ title, subtitle, text }: ICategoryInfo) => {
    return (
        <section>
            <Spacer size="pt-4" />
            <h1 className="text-uppercase">{title}</h1>
            <h5 className="text-uppercase">{subtitle}</h5>
            <div className="small line-h-150">
                {text}
            </div>
        </section>
    )
}

export default CategoryInfo

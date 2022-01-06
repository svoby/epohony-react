import React, { ReactNode } from 'react'
import { Spacer } from './Grid'

const Main = ({children} : {children: ReactNode}) => {
    return (
        <main className='main'>
            {children}
            <Spacer size="pt-5" />
        </main>
    )
}

export default Main
import React from 'react'
import { cn } from '../lib/cn'

const Showcase = ({children, className}: {children: React.ReactNode, className?: string}) => {
    return (
        <div className={cn('w-full flex flex-col', className)}>
            {children}
        </div>
    )
}

export default Showcase
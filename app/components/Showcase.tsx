import React from 'react'
import { cn } from '../lib/cn'

const Title = ({ children, className }: { children: React.ReactNode, className?: string }) => {

    return (
        <span className='text-xl font-bold mb-2'>{children}</span>
    )
}

const Item = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('w-full flex justify-center', className)}>
            {children}
        </div>
    )
}

const Description = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <span className={cn("mb-1",className)}>{children}</span>
    )
}

const Showcase = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <div className={cn('w-full flex flex-col', className)}>
            {children}
        </div>
    )
}

Showcase.Title = Title
Showcase.Item = Item
Showcase.Description = Description

export default Showcase
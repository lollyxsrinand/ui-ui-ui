import React from 'react'
import { default as NextLink } from 'next/link'
import { cn } from '@/app/lib/cn'

interface LinkProps {
    variant?: 'primary' | 'secondary' | 'ghost-hard' | 'ghost-soft' | 'mute' | 'link'
    href?: string
    children: React.ReactNode
    className?: string
}


const Link = ({variant='link', children, href='#', className}: LinkProps) => {
    return (
        <NextLink href={href}
        className={cn(
            "px-4 py-2 rounded-xl cursor-pointer h-fit w-fit select-none transition-all",
            variant === 'primary' && "bg-primary hover:bg-primary-hover text-primary-foreground",
            variant === 'secondary' && "bg-secondary hover:bg-secondary-hover text-foreground",
            variant === 'ghost-hard' && "bg-transparent text-foreground hover:bg-primary-hover hover:text-primary-foreground",
            variant === 'ghost-soft' && "bg-transparent text-foreground hover:bg-surface",
            variant === 'mute' && "bg-transparent text-foreground/70 hover:text-foreground",
            variant === 'link' && "hover:underline underline-offset-4",
            className
        )}
        >
            {children}
        </NextLink>
    )
}

export default Link
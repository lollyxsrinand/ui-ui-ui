import React from 'react'
import { cn } from '../../lib/cn'

interface CardProps {
  children?: React.ReactNode
  className?: string
}

const Card = ({children, className}: CardProps) => {
  return (
    <div className={cn(
        "flex flex-col gap-4 p-8 rounded-3xl bg-surface",
        className
    )}>
        {children}
    </div>
  )
}

export default Card
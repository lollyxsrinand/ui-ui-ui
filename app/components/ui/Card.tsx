import React from 'react'
import { cn } from '../../lib/cn'

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const CardRoot = ({ className, ...props }: CardProps) => (
  <div
    className={cn(
      "flex flex-col rounded-2xl bg-card p-8 gap-4 border border-border",
      className
    )}
    {...props}
  />
)

const CardHeader = ({ className, ...props }: CardProps) => (
  <div
    className={cn("flex items-center gap-2", className)}
    {...props}
  />
)
const CardContent = ({ className, ...props }: CardProps) => (
  <div
    className={cn("flex flex-col gap-2", className)}
    {...props}
  />
)

const CardFooter = ({ className, ...props }: CardProps) => (
  <div
    className={cn("flex flex-col gap-2", className)}
    {...props}
  />
)
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
})

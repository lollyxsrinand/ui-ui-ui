import { cn } from "../../lib/cn"

type ButtonVariants = 'primary' | 'secondary' | 'ghost-primary' | 'ghost-secondary' | 'muted' | 'danger'
export type size = 'sm' | 'md' | 'lg'
interface ButtonProps {
    variant: ButtonVariants
    children: React.ReactNode
    onClick?: () => void
    className?: string
    size?: size
}

export const Button = ({ variant, children, onClick, className, size='md' }: ButtonProps) => {
    return (
        <button className={cn(
            "px-3 py-1.5 rounded-lg cursor-pointer h-fit min-w-fit select-none transition-all",
            size === 'sm' && "px-2 py-1 text-sm",
            size === 'md' && "px-3 py-1.5",
            size === 'lg' && "px-4 py-2",
            variant === 'primary' && "bg-primary hover:bg-primary-hover text-primary-foreground",
            variant === 'secondary' && "bg-secondary hover:bg-secondary-hover text-secondary-foreground",
            variant === 'ghost-primary' && "bg-transparent text-foreground hover:bg-primary-hover hover:text-primary-foreground",
            variant === 'ghost-secondary' && "bg-transparent text-foreground hover:bg-secondary-hover hover:text-secondary-foreground",
            variant === 'muted' && "bg-transparent text-muted hover:text-foreground",
            variant === 'danger' && "bg-danger text-danger",
            className
        )} onClick={onClick}>
            {children}
        </button>
    )
}
export const IconButton = ({ variant, children, onClick, className, size='md' }: ButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick} className={cn("rounded-full p-2", className)}>
        {children}
    </Button>
  )
}

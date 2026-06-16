import { cn } from "../../lib/cn"

export type ButtonVariants = 'action' | 'regular' | 'ghost' | 'mute'  
interface ButtonProps {
    variant: ButtonVariants
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

export const Button = ({ variant, children, onClick, className }: ButtonProps) => {
    return (
        <button className={cn(
            "px-4 py-2 rounded-xl cursor-pointer h-fit w-fit select-none transition-all",
            variant === 'action' && "bg-primary hover:bg-primary-hover text-primary-foreground",
            variant === 'regular' && "bg-secondary hover:bg-secondary-hover text-foreground",
            variant === 'ghost' && "bg-transparent text-foreground hover:bg-primary-hover hover:text-primary-foreground",
            variant === 'mute' && "bg-transparent text-foreground/70 hover:text-foreground",
            className
        )} onClick={onClick}>
            {children}
        </button>
    )
}
export const IconButton = ({ variant, children, onClick, className }: ButtonProps) => {
  return (
    <Button variant={variant} onClick={onClick} className={cn("rounded-full p-2", className)}>
        {children}
    </Button>
  )
}

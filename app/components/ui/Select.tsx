import { cn } from '@/app/lib/cn'
import React, { createContext, useContext, useEffect } from 'react'

interface SelectContextType {
    value: string
    onValueChange: (value: string) => void
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    size?: 'sm' | 'md' | 'lg'
}

const SelectContext = createContext<SelectContextType | null>(null)

const useSelectContext = () => {
    const context = useContext(SelectContext)
    if (!context) {
        throw new Error('Select components must be used within a SelectProvider')
    }
    return context
}

interface SelectProps {
    value: string
    onValueChange: (value: string) => void
    children: React.ReactNode
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

const selectRef = React.createRef<HTMLDivElement>()
export const Select = ({ value, onValueChange, children, size = 'md', className }: SelectProps) => {
    const [isOpen, setIsOpen] = React.useState(false)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
    
        document.addEventListener("mousedown", handleClickOutside)
    
        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            )
        }
    }, [])
    return (
        <SelectContext.Provider value={{ value, onValueChange, isOpen, setIsOpen, size }}>
            <div ref={selectRef} className={cn(className, "relative")}>
                {children}
            </div>
        </SelectContext.Provider>
    )
}

const Trigger = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, setIsOpen, size } = useSelectContext()
    return (
        <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
                "flex w-full items-center justify-between rounded-lg outline outline-border bg-input cursor-pointer",
                size === 'sm' && "px-2 py-1 text-sm",
                size === 'md' && "px-3 py-1.5",
                size === 'lg' && "px-4 py-2",
                isOpen && "ring-3 ring-ring"
            )}>
            {children}
        </button>
    )
}

const Content = ({ children }: { children: React.ReactNode }) => {
    const { isOpen, setIsOpen } = useSelectContext()
    if (!isOpen) return null
    return (
        <div className="absolute z-50 max-h-42 scrollbar-none overflow-auto mt-1 w-full rounded-lg bg-input p-1 shadow-lg border border-border">
            {children}
        </div>
    )
}

const Item = ({ value, children, className }: { value: string, children: React.ReactNode, className?: string }) => {
    const { onValueChange, setIsOpen, size } = useSelectContext()
    return (
        <div
            onClick={() => {
                onValueChange(value)
                setIsOpen(false)
            }}
            className={cn(
                "flex cursor-pointer rounded-lg px-3 py-1.5 hover:bg-secondary-hover hover:text-accent-foreground",
                size === 'sm' && "text-sm",
                size === 'md' && "text-base",
                size === 'lg' && "text-lg",
                className
            )}>
            {children}
        </div>
    )
}

const Group = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            {children}
        </div>
    )
}

const Label = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-2 py-1 text-sm  text-muted">
            {children}
        </div>
    )
}


Select.Trigger = Trigger
Select.Content = Content
Select.Item = Item
Select.Group = Group
Select.Label = Label
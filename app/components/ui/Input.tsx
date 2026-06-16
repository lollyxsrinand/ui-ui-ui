'use client'
import React from 'react'
import { cn } from '../../lib/cn'
import { ChevronDown } from 'lucide-react'

interface InputProps {
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    type?: string
    className?: string
}

export const Input = ({ placeholder, value, onChange, type, className }: InputProps) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            className={cn(
                "px-4 py-2 rounded-xl border border-border bg-secondary text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-border/80",
                className
            )}
        />
    )
}


export const Select = ({options, option, setOption }: {options: string[], option: string,  setOption: React.Dispatch<React.SetStateAction<string>>}) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
            "px-4 py-2 rounded-xl border border-border bg-secondary focus:outline-none",
            "flex items-center justify-between cursor-pointer select-none"
        )}>
            {option}
            <ChevronDown size={16} />
        </div>
    )
}
'use client'
import React, { useEffect } from 'react'
import { cn } from '../../lib/cn'

interface InputProps {
    placeholder?: string
    value?: string
    onChange?: (value: string) => void
    type?: string
    className?: string
    label?: string
    size?: 'sm' | 'md' | 'lg'
}


export const Input = ({ placeholder, value, onChange, type, className, label, size='md' }: InputProps) => {
    return (
        <div className='flex flex-col gap-1'>
            {label && <label htmlFor={label}>{label}</label>}
            <input
                type={type}
                name={label}
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange && onChange(e.target.value)}
                className={cn(
                    "bg-input rounded-lg focus:ring-3 focus:ring-ring outline outline-border",
                    size === 'sm' && "px-2 py-1 text-sm",
                    size === 'md' && "px-3 py-1.5",
                    size === 'lg' && "px-4 py-2",
                    className
                )}
            />
        </div>
    )
}
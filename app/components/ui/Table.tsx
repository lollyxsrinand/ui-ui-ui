'use client'
import { cn } from '@/app/lib/cn'
import React from 'react'

interface TableProps {
    className?: string
    children?: React.ReactNode
}

// technically table header and table row are the same thing. for semantic purpose they're split
export const TableHeader = ({ className, children }: TableProps) => {
  return (
    <TableRow className={className}>
        {children}
    </TableRow>
  )
}

export const TableRow = ({ className, children }: TableProps) => {
  return (
    <div
    className={cn(
      "px-2 py-1 border-b border-border last:border-0 transition-all",
      className
    )}
    >
        {children}        
    </div>
  )
}

export const TableCell = ({ className, children }: TableProps) => {
  return (
    <div
    className={cn(
      "py-1 px-2",
      className
    )}
    >
        {children}        
    </div>
  )
}

export const Table = ({ className, children }: TableProps) => {
  return (
    <div
    className={cn(
        "rounded-2xl border border-border flex flex-col overflow-hidden",
        className
    )}
    >
        {children}        
    </div>
  )
}

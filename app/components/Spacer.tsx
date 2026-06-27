import React from 'react'
import { cn } from '../lib/cn'

const Spacer = () => {
  return (
    <div className={cn(
        'lg:w-2xl md:w-xs h-full flex items-center justify-center',
    )}></div>
  )
}

export default Spacer
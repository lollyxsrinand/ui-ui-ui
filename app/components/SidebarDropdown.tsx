import { LucideAlignJustify } from 'lucide-react'
import React from 'react'
import { IconButton } from './ui/Button'

const SidebarDropdown = () => {
  return (
    <div className=''>
        <IconButton variant='ghost-secondary' className='absolute border border-border md:hidden'>
            <LucideAlignJustify size={16} />
        </IconButton>
    </div>
  )
}

export default SidebarDropdown
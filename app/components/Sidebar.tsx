import React from 'react'
import Link from './ui/Link'
import { Home } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className='lg:w-2xl sm:w-xs h-full hidden md:flex flex-col gap-2 px-4'>
        <Link href='/' className='w-full font-bold flex gap-2 items-center'>
        <span>home?</span>
        </Link>
        <Link href='/buttons' className='w-full flex items-center'>buttons</Link>
        <Link href='/cards' className='w-full flex items-center'>cards</Link>
        <Link href='/colors' className='w-full flex items-center'>colors</Link>
        <Link href='/tables' className='w-full flex items-center'>tables</Link>
        <Link href='/select' className='w-full flex items-center'>select</Link>
    </div>
  )
}

export default Sidebar
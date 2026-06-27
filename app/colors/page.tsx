import React from 'react'
import Showcase from '../components/Showcase'
import { cn } from '../lib/cn'

const Color = ({name, className}: {name: string, className: string}) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className={cn('w-16 h-16 rounded-full', className)}>
            </div>
            <span>{name}</span>
        </div>
    )
}

const Theme = ({name, className}: {name: string, className: string}) => {
    return (
        <div className='flex flex-col'>
            <span className='text-xl font-bold'>{name}</span>
            <div className={cn('flex gap-4 p-4 h-fit w-fit rounded-lg bg-background text-foreground', className)}>
                <Color name="primary" className='bg-primary' />
                <Color name="secondary" className='bg-secondary' />
            </div>
        </div>
    )
}

const Page = () => {
  return (
    <div className="h-full w-full flex flex-col items-center">
      <Showcase className="gap-4">
        <span className="text-2xl font-bold">colors</span>
        <div className='flex gap-2.5'>
            <Theme name="light" className='light' />
            <Theme name="dark (default)" className=''></Theme>
        </div>
      </Showcase>
    </div>
  )
}

export default Page
import React from 'react'
import {Button, IconButton} from '../components/ui/Button'
import { Ghost, MicOff, PiggyBank, Video } from 'lucide-react'
import Showcase from '../components/Showcase'

const page = () => {
  return (
    <div className='h-full w-full flex flex-col gap-4'>
        <Showcase className='gap-4'>
            <span className='text-2xl font-bold'>buttons</span>
            <span className='text-2xl font-light'>text buttons</span>
            <div className='flex gap-2.5'>
                <Button variant='primary'>primary</Button>
                <Button variant='secondary'>secondary</Button>
                <Button variant='ghost-primary'>ghost primary</Button>
                <Button variant='ghost-secondary'>ghost secondary</Button>
                <Button variant='muted'>muted</Button>
            </div>
            <span className='text-2xl font-light'>icon buttons</span>
            <div className='flex gap-2.5'>
                <IconButton variant='primary'>
                    <Video size={16} />
                </IconButton>
                <IconButton variant='secondary'>
                    <PiggyBank size={16} />
                </IconButton>
                <IconButton variant='ghost-primary'>
                    <Ghost size={16} />
                </IconButton>
                <IconButton variant='ghost-secondary'>
                    <Ghost size={16} />
                </IconButton>
                <IconButton variant='muted'>
                    <MicOff size={16} />
                </IconButton>
            </div>
        </Showcase>
    </div>
  )
}

export default page
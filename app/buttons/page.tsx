import React from 'react'
import {Button, IconButton} from '../components/ui/Button'
import { Camera, Ghost, MicOff, Smile, Video } from 'lucide-react'

const page = () => {
  return (
    <div className="h-full w-full flex flex-col gap-4 justify-center items-center">
        <h1 className='text-2xl font-light'>buttons</h1>
        <div className='flex gap-4'>
            <Button variant='action'>
                <div className='flex items-center justify-center gap-2.5'>
                    <span>action</span>
                    <Video size={16} />
                </div>
            </Button>

            <Button variant='regular'>
                <div className='flex items-center justify-center gap-2.5'>
                    <span>regular</span>
                    <Smile size={16} /> 
                </div>
            </Button>
            <Button variant='ghost'>
                <div className='flex items-center justify-center gap-2.5'>
                    <span>ghost</span>
                    <Ghost size={16} />
                </div>
            </Button>
            <Button variant='mute'>
                <div className='flex items-center justify-center gap-2.5'>
                    <span>mute</span>
                    <MicOff size={16} />
                </div>
            </Button>
        </div>
        <div className='flex gap-4'>
            <IconButton variant='action'>
                    <Camera size={16} />
            </IconButton>
            <IconButton variant='regular'>
                    <Smile size={16} />
            </IconButton>
            <IconButton variant='ghost'>
                    <Ghost size={16} />
            </IconButton>
            <IconButton variant='mute'>
                    <MicOff size={16} />
            </IconButton>
        </div>
    </div>
  )
}

export default page
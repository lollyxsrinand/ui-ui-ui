import React from 'react'
import Card from '../ui/Card'
import { LogIn } from 'lucide-react'
import { Input } from '../ui/Input'
import { Button } from '../ui/Button'

const Login = () => {
  return (
      <Card className='border border-border sm:w-sm w-xs'>
      <div className='flex items-center gap-2'>
        <LogIn size={24} />
        <span className='text-2xl font-bold'>login to bread</span>
      </div>
        <div className='flex flex-col gap-2'>
          <div className='flex flex-col gap-1'>
            <span>email</span>
            <Input type="email" placeholder='example@mail.domain' />
          </div>
          <div className='flex flex-col gap-1'>
            <span>password</span>
            <Input type="password" placeholder='password' />
          </div>
        </div>
        <div className='flex flex-col gap-2'>
          <Button variant='action' className='w-full'>login</Button>
          <Button variant='regular' className='w-full'>sign in with google</Button>
        </div>
        <div>
          <span>or sign up</span>
        </div>
      </Card>
  )
}

export default Login
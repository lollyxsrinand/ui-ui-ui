import React from 'react'
import { Card } from '../../ui/Card'
import { LogIn } from 'lucide-react'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'

const Login = () => {
  return (
    <Card>
      <Card.Header>
        <LogIn size={24} />
        <span className='text-2xl font-bold'>login</span>
      </Card.Header>

      <Card.Content>
        <Input  placeholder='email' label='email'/>
        <Input  placeholder='password' label='password'/>
        <Button variant='primary' className='w-full'>login</Button>
        <Button variant='secondary' className='w-full'>or die</Button>
      </Card.Content>

    </Card>
  )
}

export default Login
'use client'
import React from 'react'
import { Card } from '../../ui/Card'
import { PiggyBank } from 'lucide-react'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'

const AddAccount = () => {
  const [option, setOption] = React.useState('checking')

  return (
    <Card>
      <Card.Header>
        <PiggyBank size={24} />
        <span className='text-2xl font-bold'>add account</span>
      </Card.Header>

      <Card.Content>
        <Input placeholder='account name' label='account name' />
        
      </Card.Content>
    </Card>
  )
}

export default AddAccount
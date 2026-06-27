'use client'
import React from 'react'
import { Card } from '../../ui/Card'
import { ChevronDown, PiggyBank } from 'lucide-react'
import { Input } from '../../ui/Input'
import { Button } from '../../ui/Button'
import { Select } from '../../ui/Select'

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
        <Select onValueChange={(value) => setOption(value)} size='md'>
          <Select.Trigger>
            <span>choose account</span>
            <ChevronDown size={14} />
          </Select.Trigger>
        </Select>
      </Card.Content>
    </Card>
  )
}

export default AddAccount
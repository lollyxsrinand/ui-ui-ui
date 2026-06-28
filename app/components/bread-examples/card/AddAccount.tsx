'use client'
import { useState } from 'react'
import { Card } from '../../ui/Card'
import { ChevronDown, PiggyBank } from 'lucide-react'
import { Input } from '../../ui/Input'
import { Select } from '../../ui/Select'
import { Button } from '../../ui/Button'

const AddAccount = () => {
  const [accountType, setAccountType] = useState('')
  const [balance, setBalance] = useState(0)
  const handleClick = () => {
    console.log('Account Type:', accountType)
    console.log('Balance:', balance)
  }
  return (
    <Card className='w-96'>
      <Card.Header>
        <PiggyBank size={24} />
        <span className='text-2xl font-bold'>Add Account</span>
      </Card.Header>
      <Card.Content>
        <Input label='Account Name' placeholder='Enter account name' />
        <Select label='Select Account Type' value={accountType} onValueChange={(value) => setAccountType(value)}>
          <Select.Trigger>
            <span>{accountType || 'Select account type'}</span>
            <ChevronDown size={16} />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>cash</Select.Label>
              <Select.Item value='checking'>Checking</Select.Item>
              <Select.Item value='savings'>Savings</Select.Item>
              <Select.Item value='cash'>cash</Select.Item>
            </Select.Group>
            <Select.Group>
              <Select.Label>Loan</Select.Label>
              <Select.Item value='checking'>Mortgage</Select.Item>
              <Select.Item value='personal-loan'>Personal Loan</Select.Item>
              <Select.Item value='other-debt'>Other Debt</Select.Item>
            </Select.Group>
            <Select.Group>
              <Select.Label>Tracking</Select.Label>
              <Select.Item value='asset'>Asset</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select>
        <Input onChange={(value) => setBalance(Number(value))} label='Initial Balance' placeholder='Enter initial balance' type='number' />
        <span className='px-2 py-1 text-sm text-muted bg-accent rounded-lg hover:text-accent-foreground transition-all'>
          a transaction of ₹{balance} will be made to initiate the balance</span>
        <Button onClick={handleClick} variant='primary'>Add Account</Button>
        <Button variant='secondary'>Cancel</Button>
      </Card.Content>
    </Card>
  )
}

export default AddAccount
'use client'
import React from 'react'
import Card from '../ui/Card'
import { PiggyBankIcon } from 'lucide-react'
import { Input, Select } from '../ui/Input'
import { Button } from '../ui/Button'

const AddAccount = () => {
  const [accountName, setAccountName] = React.useState('');
  const accountTypes = ['checking', 'savings', 'credit card', 'investment', 'loan', 'other'];
  const [accountType, setAccountType] = React.useState(accountTypes[0]);

  return (
      <Card className='border border-border w-xs sm:w-sm'>
      <div className='flex items-center gap-2'>
        <PiggyBankIcon size={24} className='' />
        <span className='text-2xl font-bold'>add an account</span>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col gap-1'>
          <span>name</span>
          <Input type="text" placeholder='name of your account' onChange={(name) => setAccountName(name)} />
        </div>
        <div className='flex flex-col gap-1'>
          <span>type</span>
          <Select options={['checking', 'savings']} option={accountType} setOption={setAccountType} />
        </div>
        <div className='flex flex-col gap-1'>
          <span>balance</span>
          <Input type="number" placeholder='amount available' className='font-mono' />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <Button onClick={() => console.log(accountName)} variant='action' className='w-full'>add account</Button>
        <Button variant='regular' className='w-full'>cancel</Button>
      </div>
      </Card>
  )
}

export default AddAccount
import React from 'react'
import Login from '../components/bread-examples/card/Login'
import AddAccount from '../components/bread-examples/card/AddAccount'

const page = () => {
  return (
    <div className='h-full w-full flex flex-col items-center py-4'>
        <Login />
        <AddAccount />
    </div>
  )
}

export default page
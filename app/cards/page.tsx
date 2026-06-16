import React from 'react'
import Login from '../components/examples/Login'
import AddAccount from '../components/examples/AddAccount'

const page = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
        <Login />
        <AddAccount /> 
    </div>
  )
}

export default page
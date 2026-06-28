import React from 'react'

const Centered = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='w-full flex justify-center min-w-96 p-2'>
        <div className='w-lg flex flex-col'>
            {children}
        </div>
    </div>
  )
}

export default Centered
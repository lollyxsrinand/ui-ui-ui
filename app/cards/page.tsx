import React from 'react'
import AddAccount from '../components/bread-examples/card/AddAccount'
import Showcase from '../components/Showcase'
import Centered from '../components/Centered'
import Link from '../components/ui/Link'

const page = () => {
  return (
    <Centered>
      <span className='text-2xl font-bold mb-1'>cards</span>
      <span className='mb-4'>i cant jus show empty cards so im showing examples from <Link href='https://bread-webapp.vercel.app/'>bread</Link> </span>
      <Showcase>
        <Showcase.Title>add account card</Showcase.Title>
        <Showcase.Item>
          <AddAccount />
        </Showcase.Item>
      </Showcase>
    </Centered>
  )
}

export default page
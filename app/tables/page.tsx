import React from 'react'
import { Table, TableRow } from '../components/ui/Table'
import Showcase from '../components/Showcase'
import TransactionTable from '../components/bread-examples/table/TransactionTable'

const Page = () => {
  return (
    <Showcase>
        <span className='text-2xl font-black'>tables</span>
        <TransactionTable />
    </Showcase>
  )
}

export default Page
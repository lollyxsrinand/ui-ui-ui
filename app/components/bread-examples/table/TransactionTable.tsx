import React from 'react'
import { Table, TableCell, TableHeader, TableRow } from '../../ui/Table'
import { Input } from '../../ui/Input'
import { Calendar, MoreHorizontal } from 'lucide-react'
import { Button, IconButton } from '../../ui/Button'

const TransactionTable = () => {
  return (
    <Table className='min-w-fit w-1/2'>
      <TableHeader className='grid grid-cols-[1fr_1fr_1fr_1fr_1fr_auto]'>
        <TableCell className='font-bold flex items-center gap-2'>
          <Calendar size={16} />
          <span>Date</span>
        </TableCell>
        <TableCell className='font-bold'>Date</TableCell>
        <TableCell className='font-bold'>Date</TableCell>
        <TableCell className='font-bold'>Date</TableCell>
        <TableCell className='font-bold'>Date</TableCell>
        <TableCell className='p-0'>
          <IconButton variant='mute'>
            <MoreHorizontal size={16} />
          </IconButton>
        </TableCell>
      </TableHeader>
    </Table>
  )
}

export default TransactionTable
'use client'
import React from 'react'
import { Select } from '../components/ui/Select'
import { ChevronDown } from 'lucide-react'
import Showcase from '../components/Showcase'
import { Card } from '../components/ui/Card'

const Page = () => {
  const [categoryName, setCategoryName] = React.useState('select')
  const mappings: Record<string, string> = {
    '1': 'item 1',
    '2': 'item 2',
    '3': 'item 3',
  } 

  return (
    <div className='w-full h-full'>
      <Showcase>
        <span className="text-2xl font-bold mb-2.5">select</span>
        <Select className='min-w-fit w-42' value={categoryName} onValueChange={(value) => setCategoryName(mappings[value])}>
          <Select.Trigger>
            <span>{categoryName}</span>
            <ChevronDown size={16} />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>group 1</Select.Label>
              <Select.Item value='1'>item 1
              </Select.Item>
              <Select.Item value='2'>item 2</Select.Item>
              <Select.Item value='3'>item 3</Select.Item>
            </Select.Group>
            <Select.Group>
              <Select.Label>group 2</Select.Label>
              <Select.Item value='1'>item 1</Select.Item>
              <Select.Item value='2'>item 2</Select.Item>
              <Select.Item value='3'>item 3</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select>
      </Showcase>
      <Showcase>
        <span className="text-2xl font-bold mb-2.5">select</span>
        <Select label='select something' className='min-w-fit w-42' value={categoryName} onValueChange={(value) => setCategoryName(mappings[value])}>
          <Select.Trigger>
            <span>{categoryName}</span>
            <ChevronDown size={16} />
          </Select.Trigger>
          <Select.Content>
            <Select.Group>
              <Select.Label>group 1</Select.Label>
              <Select.Item value='1'>item 1
              </Select.Item>
              <Select.Item value='2'>item 2</Select.Item>
              <Select.Item value='3'>item 3</Select.Item>
            </Select.Group>
            <Select.Group>
              <Select.Label>group 2</Select.Label>
              <Select.Item value='1'>item 1</Select.Item>
              <Select.Item value='2'>item 2</Select.Item>
              <Select.Item value='3'>item 3</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select>
      </Showcase>
    </div>
  )
}

export default Page
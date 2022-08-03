import { Popover } from '@headlessui/react'

export function CardButton() {
  return (
    <Popover.Button className="h-24 w-24 bg-zinc-600 rounded-md focus:ring-2 focus:outline-none focus:ring-teal-600 hover:ring-teal-600 shadow-md focus:-translate-y-2 transition-transform"></Popover.Button>
  )
}

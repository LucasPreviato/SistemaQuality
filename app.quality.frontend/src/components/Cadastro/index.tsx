import { Popover } from '@headlessui/react'
import { CardButton } from '../CardButton'

export function Cadastro() {
  return (
    <div className="w-full p-12">
      <Popover className="h-full bg-dark-600 rounded p-6 grid gap-4 grid-cols-6 place-items-center">
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
        <CardButton />
      </Popover>
    </div>
  )
}

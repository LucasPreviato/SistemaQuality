import { Popover } from '@headlessui/react'
import { Button } from '../Button'

import logoImg from '../assets/SysQuali.ico'
import { NavLink } from 'react-router-dom'

export function Sidebar() {
  return (
    <Popover className="p-2 group bg-zinc-900 w-16 h-screen hover:w-48 transition-all duration-500 ease-linear flex flex-col overflow-y-scroll scrollbar-none ">
      <NavLink
        to="/"
        className="mb-4 pb-4 border-b border-b-green-50 transition-all duration-1000"
      >
        <Button src={logoImg} title="SysQuali" variant />
      </NavLink>
      <ul>
        <li className="">
          <NavLink to="/" className="">
            <Button src={logoImg} title="SysQuali" />
          </NavLink>
        </li>
      </ul>
    </Popover>
  )
}

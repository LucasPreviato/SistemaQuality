import { NavLink } from 'react-router-dom'

interface CardButtonProps {
  icon: string
  title: string
  path: string
}

export function CardButton({ icon, title, path }: CardButtonProps) {
  return (
    <NavLink
      to={path}
      className="h-24 w-24 bg-zinc-600 rounded-md focus:ring-2 focus:outline-none focus:ring-teal-600 hover:ring-teal-600 shadow-md focus:-translate-y-2 transition-transform grid place-items-center"
    >
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <img src={icon} alt="" className="h-10 w-10" />
        <p className="text-xs font-medium text-dark-200">{title}</p>
      </div>
    </NavLink>
  )
}

import { ReactNode } from 'react'

interface TableTheadProps {
  children: ReactNode
}

export default function TableThead({ children }: TableTheadProps) {
  return (
    <thead>
      <tr className="grid grid-cols-8 place-items-center rounded-t bg-teal-500">
        {children}
      </tr>
    </thead>
  )
}

import { ReactNode } from 'react'

interface TableTbodyProps {
  children: ReactNode
}

export function TableTbody({ children }: TableTbodyProps) {
  return (
    <tbody className="max-h-40  overflow-auto scrollbar-none grid gap-2 border-collapse border-x-2 border-b-2 rounded-b border-dark-600">
      {children}
    </tbody>
  )
}

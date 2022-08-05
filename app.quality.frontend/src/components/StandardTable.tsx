import { ReactNode } from 'react'

interface StandardTableProps {
  children: ReactNode
}

export function StandardTable({ children }: StandardTableProps) {
  return <table className="w-full grid table-auto">{children}</table>
}

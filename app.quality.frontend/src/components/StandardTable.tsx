import { ReactNode } from 'react'

interface StandardTableProps {
  theadChildren: ReactNode
  tbodyChildren: ReactNode
}

export function StandardTable({
  theadChildren,
  tbodyChildren,
}: StandardTableProps) {
  return (
    <table className="w-full grid table-auto">
      <thead>
        <tr className="grid grid-cols-8 place-items-center rounded-t bg-teal-500">
          {theadChildren}
        </tr>
      </thead>
      <tbody className="max-h-40  overflow-auto scrollbar-none grid gap-2 border-collapse border-x-2 border-b-2 rounded-b border-dark-600">
        <tr className="grid grid-cols-8  place-items-center py-2 hover:bg-dark-400 transition-colors">
          {tbodyChildren}
        </tr>
      </tbody>
    </table>
  )
}

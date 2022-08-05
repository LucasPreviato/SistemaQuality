import { StandardTable } from '../../../StandardTable'

const theadTitle = [
  {
    title: 'Título',
  },
  {
    title: 'Título',
  },
  {
    title: 'Título',
  },
  {
    title: 'Título',
  },
  {
    title: 'Título',
  },
  {
    title: 'Título',
  },
]
const tbodyTitle = [
  {
    title: 'Título',
  },
  {
    title: 'Título',
  },
  {
    title: 'Título',
  },
  {
    title: 'Título',
  },
  {
    title: 'Título',
  },
  {
    title: 'Título',
  },
]

export function CargosFuncao() {
  return (
    <div className="w-full md:p-12 p-10">
      <div className="p-6 bg-dark-500 rounded-md">
        <StandardTable>
          <thead>
            <tr className="grid grid-cols-8 place-items-center rounded-t bg-teal-500">
              {theadTitle.map((thead) => (
                <th key={thead.title}>{thead.title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="max-h-40  overflow-auto scrollbar-none grid gap-2 border-collapse border-x-2 border-b-2 rounded-b border-dark-600">
            {tbodyTitle.map((tbody) => (
              <tr
                key={tbody.title}
                className="grid grid-cols-8  place-items-center py-2 hover:bg-dark-400 transition-colors"
              >
                <td>{tbody.title}</td>
              </tr>
            ))}
          </tbody>
        </StandardTable>
      </div>
    </div>
  )
}

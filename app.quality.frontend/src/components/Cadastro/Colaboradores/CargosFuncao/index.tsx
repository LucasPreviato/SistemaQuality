import { StandardTable } from '../../../StandardTable'

const theadTitle = [
  {
    title: 'titulo',
  },
  {
    title: 'titulo',
  },
  {
    title: 'titulo',
  },
  {
    title: 'titulo',
  },
  {
    title: 'titulo',
  },
  {
    title: 'titulo',
  },
]

export function CargosFuncao() {
  return (
    <div className="w-full md:p-12 p-10">
      <div className="p-6 bg-dark-500 rounded-md">
        <StandardTable
          tbodyChildren={theadTitle.map((thead) => (
            <th key={thead.title}>{thead.title}</th>
          ))}
          theadChildren={theadTitle.map((tbody) => (
            <tr key={tbody.title}>
              <td>{tbody.title}</td>
            </tr>
          ))}
        />
      </div>
    </div>
  )
}

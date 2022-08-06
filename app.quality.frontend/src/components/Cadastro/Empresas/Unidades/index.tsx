import { StandardTable } from '../../../StandardTable'

const heading = [
  {
    title: 'ID',
  },
  {
    title: 'Nome',
  },
  {
    title: 'Responsável',
  },
  {
    title: 'Status',
  },
]

const tableBody = [
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
  {
    title: [
      {
        field: '00002',
      },
      {
        field: 'Matriz',
      },
      {
        field: 'João Braúna',
      },
      {
        field: 'Ativo',
      },
    ],
  },
]

export function Unidades() {
  return (
    <StandardTable
      tbodyChildren={tableBody.map((tr) => (
        <tr key={tr.title}>
          {tr.title.map((td) => (
            <td key={tr.title}>{td.field}</td>
          ))}
        </tr>
      ))}
      theadChildren={heading.map((head) => (
        <th key={head.title}>{head.title}</th>
      ))}
    />
  )
}

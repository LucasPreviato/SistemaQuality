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
        <tr key={tr.title} className="flex hover:bg-dark-400 transition-colors">
          {tr.title.map((td) => (
            <td key={tr.title} className="flex-1 py-3">
              {td.field}
            </td>
          ))}
        </tr>
      ))}
      theadChildren={heading.map((head) => (
        <th key={head.title} className="flex-1">
          {head.title}
        </th>
      ))}
    />
  )
}

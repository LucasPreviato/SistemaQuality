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
    <table>
      <thead>
        <tr>
          {heading.map((head) => (
            <th key={head.title}>{head.title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tableBody.map((tbody) => (
          <tr key={tbody.title}>
            {tbody.title.map((tds) => (
              <td key={tds.field}>{tds.field}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

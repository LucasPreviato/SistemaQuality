import { SelectionPanel } from '../../SelectionPanel'

import rhImg from '../../../assets/img/imgsidebar/iconRH.svg'
import { CardButton } from '../../CardButton'

const colaboratorsCards = [
  {
    title: 'Colaborador',
    icon: rhImg,
    path: '/colaborador',
  },
  {
    title: 'Cargos/funções',
    icon: rhImg,
    path: '/cargos-funcoes',
  },
  {
    title: 'Categoria de cargos',
    icon: rhImg,
    path: '/categoria-de-cargos',
  },
]

export function Colaboradores() {
  return (
    <SelectionPanel>
      {colaboratorsCards.map((card) => (
        <CardButton
          key={card.title}
          icon={card.icon}
          path={card.path}
          title={card.title}
        />
      ))}
    </SelectionPanel>
  )
}

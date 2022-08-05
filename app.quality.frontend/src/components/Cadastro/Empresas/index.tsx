import { SelectionPanel } from '../../SelectionPanel'

import rhImg from '../../../assets/img/sidebar/iconRH.svg'
import { CardButton } from '../../CardButton'

const colaboratorsCards = [
  {
    title: 'Empresas',
    icon: rhImg,
    path: '/empresas',
  },
]

export function Empresas() {
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

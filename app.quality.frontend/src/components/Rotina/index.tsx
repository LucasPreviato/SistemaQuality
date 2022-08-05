import { SelectionPanel } from '../SelectionPanel'

import rhImg from '../../assets/img/sidebar/iconRH.svg'
import { CardButton } from '../CardButton'

const CardButtonSelection = [
  {
    title: 'Colaboradores',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Empresas',
    icon: rhImg,
    path: '/cadastro/empresas',
  },
  {
    title: 'Colaboradores',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Colaboradores',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Colaboradores',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Colaboradores',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Colaboradores',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Colaboradores',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Colaboradores',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Colaboradores',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
]

export function Rotina() {
  return (
    <SelectionPanel>
      {CardButtonSelection.map((card) => (
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

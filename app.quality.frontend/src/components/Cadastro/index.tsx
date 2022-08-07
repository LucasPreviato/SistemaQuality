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
    title: 'tipos de tarefas',
    icon: rhImg,
    path: '/cadastro/tipotarefas',
  },
  {
    title: 'Acesso ao sistema',
    icon: rhImg,
    path: '/cadastro/acesso',
  },
  {
    title: 'Notificação',
    icon: rhImg,
    path: '/cadastro/notificação',
  },
  {
    title: 'Convênios',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Indicadores',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Processos',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Perfis de treinamentos',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Perfis de pesquisa de satisfação',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Itens Laboratóriais',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Agendamento Sala',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'tipo de requisitos legais',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'tipo de certidões',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Checklist Setores',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
  {
    title: 'Administrativo',
    icon: rhImg,
    path: '/cadastro/colaboradores',
  },
]

export function Cadastro() {
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

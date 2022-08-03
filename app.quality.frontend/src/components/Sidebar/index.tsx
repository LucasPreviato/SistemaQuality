import { NavLink } from 'react-router-dom'
import { Popover } from '@headlessui/react'
import { Button } from '../Button'

import rhImg from '../../assets/img/imgsidebar/iconRH.svg'
import auditoriaImg from '../../assets/img/imgsidebar/iconAuditoria.svg'
import equipamentoImg from '../../assets/img/imgsidebar/iconEquipamento.svg'
import fornecedoresImg from '../../assets/img/imgsidebar/iconFornecedores.svg'
import iconRotina from '../../assets/img/imgsidebar/iconRotina.svg'
import iconCadastro from '../../assets/img/imgsidebar/iconCadastro.svg'

import logoImg from '../../assets/SysQuali.ico'

const BUTTONS_INFO = [
  {
    src: iconRotina,
    title: 'Rotina',
    path: '/rotina',
  },
  {
    src: rhImg,
    title: 'RH',
    path: '/rh',
  },
  {
    src: equipamentoImg,
    title: 'Equipamento',
    path: '/equipamento',
  },
  {
    src: auditoriaImg,
    title: 'Auditoria',
    path: '/auditoria',
  },
  {
    src: fornecedoresImg,
    title: 'Fornecedores',
    path: '/fornecedores',
  },

  {
    src: iconCadastro,
    title: 'Cadastro',
    path: '/cadastro',
  },

  {
    src: iconCadastro,
    title: 'Relatórios',
    path: '/relatorios',
  },

  {
    src: iconCadastro,
    title: 'Indicadores',
    path: '/indicadores',
  },

  {
    src: iconCadastro,
    title: 'Documentos',
    path: '/documentos',
  },

  {
    src: iconCadastro,
    title: 'Contratos',
    path: '/contratos',
  },

  {
    src: iconCadastro,
    title: 'Manutenção',
    path: '/manutencao',
  },

  {
    src: iconCadastro,
    title: 'Técnicos',
    path: '/tecnicos',
  },

  {
    src: iconCadastro,
    title: 'Controles',
    path: '/controles',
  },

  {
    src: iconCadastro,
    title: 'Chamados',
    path: '/chamados',
  },

  {
    src: iconCadastro,
    title: 'Outros',
    path: '/outros',
  },

  {
    src: iconCadastro,
    title: 'TI',
    path: '/ti',
  },

  {
    src: iconCadastro,
    title: 'Médicos',
    path: '/medicos',
  },
]

export function Sidebar() {
  return (
    <Popover className="px-2 py-3 group bg-dark-700 w-16 h-screen hover:w-48 transition-all duration-500 ease-linear flex flex-col overflow-y-scroll scrollbar-none ">
      <NavLink
        to="/"
        className="mb-4 pb-4 border-b border-b-green-50 transition-all duration-1000"
      >
        <Button src={logoImg} title="SysQuali" variant path="/" />
      </NavLink>
      <ul className="grid gap-4">
        {BUTTONS_INFO.map((button) => (
          <li key={button.title} className="group">
            <Button src={button.src} title={button.title} path={button.path} />
          </li>
        ))}
      </ul>
    </Popover>
  )
}

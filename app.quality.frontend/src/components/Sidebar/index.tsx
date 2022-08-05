import { NavLink } from 'react-router-dom'
import { Popover } from '@headlessui/react'
import { Button } from '../Button'

import iconRotina from '../../assets/img/sidebar/iconRotina.svg'
import iconRH from '../../assets/img/sidebar/iconRH.svg'
import iconEquipamento from '../../assets/img/sidebar/iconEquipamento.svg'
import iconAuditoria from '../../assets/img/sidebar/iconAuditoria.svg'
import iconFornecedores from '../../assets/img/sidebar/iconFornecedores.svg'
import iconCadastro from '../../assets/img/sidebar/iconCadastro.svg'
import iconRelatorios from '../../assets/img/sidebar/iconRelatorios.svg'
import iconIndicadores from '../../assets/img/sidebar/iconIndicadores.svg'
import iconDocumentos from '../../assets/img/sidebar/iconDocumentos.svg'
import iconContratos from '../../assets/img/sidebar/iconContratos.svg'
import iconManutencao from '../../assets/img/sidebar/iconManutencao.svg'
import iconTecnicos from '../../assets/img/sidebar/iconTecnicos.svg'
import iconControles from '../../assets/img/sidebar/iconControles.svg'
import iconChamados from '../../assets/img/sidebar/iconChamados.svg'
import iconOutros from '../../assets/img/sidebar/iconOutros.svg'
import iconTI from '../../assets/img/sidebar/iconTI.svg'
import iconMedicos from '../../assets/img/sidebar/iconMedicos.svg'

import logoImg from '../../assets/SysQuali.ico'

const BUTTONS_INFO = [
  {
    src: iconRotina,
    title: 'Rotina',
    path: '/rotina',
  },
  {
    src: iconRH,
    title: 'RH',
    path: '/rh',
  },
  {
    src: iconEquipamento,
    title: 'Equipamento',
    path: '/equipamento',
  },
  {
    src: iconAuditoria,
    title: 'Auditoria',
    path: '/auditoria',
  },
  {
    src: iconFornecedores,
    title: 'Fornecedores',
    path: '/fornecedores',
  },

  {
    src: iconCadastro,
    title: 'Cadastro',
    path: '/cadastro',
  },

  {
    src: iconRelatorios,
    title: 'Relatórios',
    path: '/relatorios',
  },

  {
    src: iconIndicadores,
    title: 'Indicadores',
    path: '/indicadores',
  },

  {
    src: iconDocumentos,
    title: 'Documentos',
    path: '/documentos',
  },

  {
    src: iconContratos,
    title: 'Contratos',
    path: '/contratos',
  },

  {
    src: iconManutencao,
    title: 'Manutenção',
    path: '/manutencao',
  },

  {
    src: iconTecnicos,
    title: 'Técnicos',
    path: '/tecnicos',
  },

  {
    src: iconControles,
    title: 'Controles',
    path: '/controles',
  },

  {
    src: iconChamados,
    title: 'Chamados',
    path: '/chamados',
  },

  {
    src: iconOutros,
    title: 'Outros',
    path: '/outros',
  },

  {
    src: iconTI,
    title: 'TI',
    path: '/ti',
  },

  {
    src: iconMedicos,
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
          <li key={button.title} className="group ">
            <Button src={button.src} title={button.title} path={button.path} />
          </li>
        ))}
      </ul>
    </Popover>
  )
}

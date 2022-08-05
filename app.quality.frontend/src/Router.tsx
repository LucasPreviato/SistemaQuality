import { Route, Routes } from 'react-router-dom'
import { Auditorias } from './components/Auditorias'
import { Cadastro } from './components/Cadastro'
import { Colaboradores } from './components/Cadastro/Colaboradores'
import { Colaborador } from './components/Cadastro/Colaboradores/Colaborador'
import { Empresas } from './components/Cadastro/Empresas'
import { Chamados } from './components/Chamados'
import { Contratos } from './components/Contratos'
import { Controles } from './components/Controles'
import { Documentos } from './components/Documentos'
import { Equipamentos } from './components/Equipamentos'
import { Fornecedores } from './components/Fornecedores'
import { Indicadores } from './components/Indicadores'
import { Manutencao } from './components/Manutencao'
import { Medicos } from './components/Medicos'
import { Outros } from './components/Outros'
import { Relatorios } from './components/Relatorios'
import { RH } from './components/RH'
import { Rotina } from './components/Rotina'
import { Tecnicos } from './components/Tecnicos'
import { TI } from './components/TI'
import { DefaultLayout } from './Layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/rotina" element={<Rotina />} />
        <Route path="/rh" element={<RH />} />
        <Route path="/equipamentos" element={<Equipamentos />} />
        <Route path="/auditorias" element={<Auditorias />} />
        <Route path="/fornecedores" element={<Fornecedores />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro/colaboradores" element={<Colaboradores />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/indicadores" element={<Indicadores />} />
        <Route path="/documentos" element={<Documentos />} />
        <Route path="/contratos" element={<Contratos />} />
        <Route path="/manutencao" element={<Manutencao />} />
        <Route path="/tecnicos" element={<Tecnicos />} />
        <Route path="/controles" element={<Controles />} />
        <Route path="/chamados" element={<Chamados />} />
        <Route path="/outros" element={<Outros />} />
        <Route path="/ti" element={<TI />} />
        <Route path="/medicos" element={<Medicos />} />
        <Route
          path="/cadastro/colaboradores/colaborador"
          element={<Colaborador />}
        />
        <Route path="/cadastro/empresas" element={<Empresas />} />
      </Route>
    </Routes>
  )
}

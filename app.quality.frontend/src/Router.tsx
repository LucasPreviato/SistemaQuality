import { Route, Routes } from 'react-router-dom'
import { Cadastro } from './components/Cadastro'
import { Colaboradores } from './components/Cadastro/Colaboradores'
import { Colaborador } from './components/Cadastro/Colaboradores/Colaborador'
import { Empresas } from './components/Cadastro/Empresas'
import { DefaultLayout } from './Layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro/colaboradores" element={<Colaboradores />} />
        <Route
          path="/cadastro/colaboradores/colaborador"
          element={<Colaborador />}
        />
        <Route path="/cadastro/empresas" element={<Empresas />} />
      </Route>
    </Routes>
  )
}

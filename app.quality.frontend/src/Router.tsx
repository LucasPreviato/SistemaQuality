import { Route, Routes } from 'react-router-dom'
import { Cadastro } from './components/Cadastro'
import { DefaultLayout } from './Layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
    </Routes>
  )
}

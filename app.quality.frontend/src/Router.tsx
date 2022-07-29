import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home'
import { Rh } from './components/Rh'
import { DefaultLayout } from './Layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/rh" element={<Rh />} />
      </Route>
    </Routes>
  )
}

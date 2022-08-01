import { Outlet } from 'react-router-dom'
import { Sidebar } from '../components/Sidebar'

export function DefaultLayout() {
  return (
    <div className="flex">
      <Sidebar />
      <Outlet />
    </div>
  )
}

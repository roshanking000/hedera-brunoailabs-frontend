import { Outlet } from 'react-router-dom'
import './applayout.css'
import NotificationToaster from './NotificationToaster'
import Footer from './Footer'
import AppNavbar from './AppNavbar'

const AppLayout = () => {
  return (
    <div className='app_layout relative h-full flex flex-col flex-1 !overflow-y-auto  max-w-screen min-h-screen text-light'>
      <AppNavbar />
      <main>
        <Outlet />
        <NotificationToaster />
      </main>
    </div>
  )
}

export default AppLayout

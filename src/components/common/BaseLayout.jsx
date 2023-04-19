import { Outlet } from 'react-router-dom'

import NotificationToaster from './NotificationToaster'
import Navbar from './Navbar'
import Footer from './Footer'

const BaseLayout = () => {
  return (
    <div className='relative h-full flex flex-col flex-1 !overflow-hidden  max-w-screen min-h-screen text-light'>
      <Navbar />
      <main>
        <Outlet />
        <NotificationToaster />
      </main>
      <Footer />
    </div>
  )
}

export default BaseLayout

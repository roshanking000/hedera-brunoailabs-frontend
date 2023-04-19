import { Route, Routes } from 'react-router-dom'
import { BaseLayout } from './components/common'
import StakePage from './components/Stake/Stake'
import { HomePage, NotFoundPage } from './pages'

import 'react-tooltip/dist/react-tooltip.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<StakePage />} />
    </Routes>
  )
}

export default App

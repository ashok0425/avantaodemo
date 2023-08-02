import { Route, Routes } from 'react-router-dom'

import NavHeader from '@components/nav/NavHeader.jsx'

import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </>
  )
}

export default App

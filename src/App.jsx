import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import NavHeader from '@components/nav/NavHeader.jsx'

import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Footer from './components/footer/Footer'

function App() {
  const loco = async () => {
    const LocomotiveScroll = (await import('locomotive-scroll')).default
    const locomotiveScroll = new LocomotiveScroll()
  }

  useEffect(() => {
    loco()
  }, [])

  return (
    <>
      <NavHeader />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

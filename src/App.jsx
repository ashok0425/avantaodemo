import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import NavHeader from '@components/nav/NavHeader.jsx'

import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Footer from './components/footer/Footer'
import PreLoader from './components/preloader/PreLoader'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading)
    }, 4600)

    // return () => s
  }, [])

  const loco = async () => {
    const LocomotiveScroll = (await import('locomotive-scroll')).default
    const locomotiveScroll = new LocomotiveScroll()
  }

  useEffect(() => {
    loco()
  }, [])

  if (isLoading) {
    return <PreLoader />
  }

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

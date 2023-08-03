import { Route, Routes } from 'react-router-dom'

import NavHeader from '@components/nav/NavHeader.jsx'

import HomePage from './pages/HomePage'
import AboutUs from './pages/AboutUs'
import Footer from './components/footer/Footer'

function App() {
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

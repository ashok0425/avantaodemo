import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
// import MouseFollower from 'mouse-follower'
// import { gsap } from 'gsap'
import AnimatedCursor from 'react-animated-cursor'

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

  // useEffect(() => {
  //   MouseFollower.registerGSAP(gsap)
  //   const cursor = new MouseFollower({
  //     stateDetection: {
  //       // '-pointer': 'a,button',
  //       // '-hidden': 'iframe',
  //       '-lg': 'a button',
  //       '-exclusion': 'a button'
  //     }
  //   })
  //   return () => cursor.destroy()
  // }, [])

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
      <AnimatedCursor
        innerSize={8}
        outerSize={22}
        color='193, 11, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        showSystemCursor={true}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
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

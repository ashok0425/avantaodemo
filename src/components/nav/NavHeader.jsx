import React, { useState } from 'react'
import { Turn as Hamburger } from 'hamburger-react'

import styles from './nav.module.scss'
import Menu from './Menu'

const NavHeader = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: false
  })

  const handleMenu = () => {
    const body = document.body
    if (state.initial === false) {
      setState({
        initial: true,
        clicked: true
      })
    } else if (state.clicked === true) {
      setState({
        ...state,
        clicked: false
      })
    } else if (state.clicked === false) {
      setState({
        ...state,
        clicked: !state.clicked
      })
    }
  }

  // console.log(state)

  return (
    <>
      <nav className={`toggle-nav ${styles.nav_container}`}>
        <div className='container'>
          <div className={styles.nav_wrapper}>
            <div className={styles.logo}>
              <img src='/logo.svg' />
            </div>

            <div className={styles.ham_menu}>
              <button onClick={handleMenu}>
                <Hamburger distance='sm' duration={0.8} />
              </button>
              {/* <button type='button'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='43'
                  height='19'
                  viewBox='0 0 43 19'
                >
                  <path
                    id='Menu'
                    d='M-6160,19V15.143h26.875V19Zm0-7.572V7.572h43v3.856Zm0-7.571V0h43V3.857Z'
                    transform='translate(6160)'
                    fill='#121245'
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </nav>
      <Menu state={state} />
    </>
  )
}

export default NavHeader

import React from 'react'

import styles from './nav.module.scss'

const NavHeader = () => {
  return (
    <>
      <nav className='container'>
        <div className={styles.nav_container}>
          <div className={styles.nav_wrapper}>
            <div className={styles.logo}>
              <img src='/logo.svg' />
            </div>

            <div className={styles.ham_menu}>
              <button type='button'>
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
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavHeader

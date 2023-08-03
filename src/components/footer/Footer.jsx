import React from 'react'

import styles from './footer.module.scss'

const Footer = () => {
  return (
    <>
      <footer className='container'>
        <div className={styles.footer_wrapper}>
          <div className={styles.footer_grid}>
            <div className={styles.logo}>
              <img src='/logo-white.svg' alt='logo' />
            </div>
            <div className={styles.quick_links}>
              <ul>
                <li>Home</li>
                <li>Product</li>
                <li>Services</li>
                <li>About us</li>
                <li>Contact us</li>
                <li>Resources</li>
              </ul>
            </div>
            <div className={styles.locations}></div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

import React, { useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

import styles from './nav.module.scss'
import { useIsomorphicLayoutEffect } from '../../utils/IsomorphicLayout'

const Menu = ({ state }) => {
  const menuWrapperRef = useRef(null)
  const labelRef = useRef(null)

  const location = useLocation()
  const menuList = [
    { name: 'Home', link: '/' },
    { name: 'Products', link: '/products' },
    { name: 'Services', link: '/services' },
    { name: 'About us', link: '/about-us' },
    { name: 'Contact us', link: '/contact-us' },
    { name: 'Resources', link: '/resources' }
  ]

  useIsomorphicLayoutEffect(() => {
    const labels = gsap.utils.toArray('.label')
    // console.log(labels)
    const tl = gsap.timeline()
    if (state.clicked === false) {
      tl.to(menuWrapperRef.current, {
        height: 0,
        duration: 1.5,
        ease: 'power4'
        // y: '-100%'
        // display: 'none'
      })

      document.body.classList.remove('nav-active')
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      tl.to(menuWrapperRef.current, {
        height: '100%',
        ease: 'power4',
        y: '0',
        // display: 'block',
        duration: 1.5
      })

      labels.forEach((label, index) => {
        gsap.from(label, {
          y: 100,
          ease: 'power4',
          duration: 1,
          skewY: 10,
          delay: 0.15 * index
        })
      })

      document.body.classList.add('nav-active')
    }
  }, [state])

  // console.log(location.pathname)

  return (
    <>
      <div ref={menuWrapperRef} className={styles.menu}>
        <div className={`container ${styles.menu_container}`}>
          <ul className={styles.menu_list}>
            {menuList.map(({ name, link }, index) => (
              <li key={`${name}-${index}`}>
                <Link
                  data-active={location.pathname === link ? 'active' : ''}
                  to={link}
                >
                  <span className={`label ${styles.main}`}>
                    <span className={styles.inner}>
                      <span className={styles.content}>{name}</span>
                    </span>
                    <span className={styles.inner}>
                      <span className={styles.content} aria-hidden='true'>
                        {name}
                      </span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Menu

import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import Button from '../Button'
import { RightChevron } from '../../assets/Icons'

import styles from './card.module.scss'
import HeadingFadeIn from '../../utils/HeadingFadeIn'
import { useIsomorphicLayoutEffect } from '../../utils/IsomorphicLayout'

const Card = ({ title, description }) => {
  const containerRef = useRef(null)
  const overlayRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    if (typeof window !== 'undefined') {
      const ctx = gsap.context(() => {})

      return () => ctx.revert()
    }
  }, [])
  return (
    <>
      <div ref={containerRef} className={styles.product_grid}>
        <div
          // data-scroll
          // data-scroll-speed={0.02}
          className={styles.product_thumb}
        >
          <div className={styles.product_assets}>
            <div className={styles.product_assets_wrapper}>
              <div ref={overlayRef} className={styles.overlay} />
              <img
                src='/images/video.png'
                alt=''
                className={styles.product_image}
              />
            </div>
          </div>
        </div>

        <div
          data-scroll
          data-scroll-speed={0.1}
          className={styles.product_content}
        >
          <HeadingFadeIn>
            <h1>{title}</h1>
          </HeadingFadeIn>
          <p>{description}</p>
          <Link to='/'>
            <span>
              <label>Visit now</label>
              <span>
                <RightChevron color='#D22027' />
              </span>
            </span>
          </Link>
          <Button>View all</Button>
        </div>
      </div>
    </>
  )
}

export default Card

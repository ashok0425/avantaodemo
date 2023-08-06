'use client'

import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Button from '../Button'
import { RightChevron, UpArrow } from '../../assets/Icons'

import styles from './card.module.scss'
import { useIsomorphicLayoutEffect } from '../../utils/IsomorphicLayout'
import { splitText } from '../../utils/splitText'

gsap.registerPlugin(ScrollTrigger)

const Card = ({ title, description }) => {
  const containerRef = useRef(null)
  const overlayRef = useRef(null)
  const headingRef = useRef(null)
  const paraRef = useRef(null)
  const actionRef = useRef(null)
  const buttonRef = useRef(null)
  const actionContainrRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      // console.log('first')
      const ctx = gsap.context(() => {
        const headingSplit = splitText(headingRef.current)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            markers: false
          }
        })

        gsap.to(overlayRef.current, {
          height: 0,
          duration: 1.5,
          ease: 'power4',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            markers: false
          }
        })

        tl.from(headingSplit.chars, {
          y: 100,
          duration: 1,
          ease: 'power4',
          autoAlpha: 0,
          stagger: 0.03
        })
          .from(
            paraRef.current,
            {
              y: 100,
              autoAlpha: 0,
              duration: 0.7
            },
            '-=0.4'
          )
          .from(
            [actionRef.current, buttonRef.current],
            {
              y: 75,
              autoAlpha: 0,
              duration: 1,
              stagger: 0.1,
              ease: 'power4'
            },
            '-=0.4'
          )
      })

      return () => ctx.revert()
    }
  }, [])

  useIsomorphicLayoutEffect(() => {
    gsap.set(actionContainrRef.current, {
      y: 100,
      autoAlpha: 0
    })
  }, [])

  const mouseEnter = (e) => {
    gsap.to(actionContainrRef.current, {
      y: 0,
      autoAlpha: 1,
      duration: 0.8,
      ease: 'power4'
    })
  }

  const mouseExit = (e) => {
    gsap.to(actionContainrRef.current, {
      y: 100,
      autoAlpha: 0,
      duration: 0.8,
      ease: 'power4'
    })
  }
  return (
    <>
      <div className={styles.product_grid}>
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
          ref={containerRef}
          className={styles.product_content}
        >
          <h1 ref={headingRef}>{title}</h1>
          <p ref={paraRef}>{description}</p>
          <Link to='/'>
            <div
              className={styles.secondary_btn}
              onMouseEnter={(e) => mouseEnter(e)}
              onMouseOut={(e) => mouseExit(e)}
              ref={actionRef}
            >
              <div ref={actionContainrRef} className={styles.hover_action}>
                <UpArrow className='arrow' />
              </div>
              <div>Visit now</div>
              <div>
                <RightChevron color='#D22027' />
              </div>
            </div>
          </Link>
          <div ref={buttonRef}>
            <Button>View all</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card

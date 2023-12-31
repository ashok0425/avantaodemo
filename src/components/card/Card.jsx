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

const Card = ({ title, description, index }) => {
  const containerRef = useRef(null)
  const imgRef = useRef(null)
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
            toggleActions: 'play none none reverse',
            start: 'top center',
            markers: false
          }
        })

        gsap.to

        tl.from(imgRef.current, {
          // height: 0,
          x: index % 2 === 0 ? -100 : 100,
          autoAlpha: 0,
          duration: 1.5,
          ease: 'power4'
        })
          .from(
            headingSplit.chars,
            {
              y: 100,
              duration: 1,
              ease: 'power4',
              autoAlpha: 0,
              stagger: 0.01
            },
            0
          )
          .from(
            paraRef.current,
            {
              y: 100,
              autoAlpha: 0,
              duration: 0.7
            },
            '-=1'
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

  // useIsomorphicLayoutEffect(() => {
  //   gsap.set(actionContainrRef.current, {
  //     y: 100,
  //     autoAlpha: 0
  //   })
  // }, [])

  //   const mouseEnter = (e) => {
  //     gsap.to(actionContainrRef.current, {
  //       y: 0,
  //       autoAlpha: 1,
  //       duration: 0.8,
  //       ease: 'power4'
  //     })
  //   }
  //
  //   const mouseExit = (e) => {
  //     gsap.to(actionContainrRef.current, {
  //       y: 100,
  //       autoAlpha: 0,
  //       duration: 0.8,
  //       ease: 'power4'
  //     })
  //   }

  return (
    <>
      <div ref={containerRef} className={styles.product_grid}>
        <div className={styles.product_thumb}>
          <div className={styles.product_assets}>
            <div ref={imgRef} className={styles.product_assets_wrapper}>
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
          <h1 ref={headingRef}>{title}</h1>
          <p ref={paraRef}>{description}</p>
          <Link to='/'>
            <div ref={actionRef} className={styles.secondary_btn}>
              <div ref={actionContainrRef} className={styles.hover_action}>
                <RightChevron color='#fff' />
              </div>
              <div>Visit now</div>
              <RightChevron color='#D22027' />
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

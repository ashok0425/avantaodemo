import React, { useRef } from 'react'
import { gsap } from 'gsap'
import SplitType from 'split-type'

import { useIsomorphicLayoutEffect } from '../../utils/IsomorphicLayout'
import styles from './hero.module.scss'
import Button from '../Button'

const HomeHero = () => {
  const headingRef = useRef(null)
  const heading2Ref = useRef(null)
  const buttonRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    const heading = SplitType.create(headingRef.current, {
      // types: 'words, chars',
      wordClass: 'heading-word',
      lineClass: 'heading-line',
      charClass: 'heading-char'
    })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        delay: 0.5
      })
      tl.from(heading.lines, {
        y: 70,
        autoAlpha: 0,
        duration: 1,
        ease: 'power4',
        stagger: 0.25
      }).from(
        buttonRef.current,
        {
          y: 100,
          autoAlpha: 0,
          duration: 1
          // ease: 'Power4'
        },
        '-=0.4'
      )
    })

    return () => ctx.revert()
  }, [])

  
  return (
    <>
      <section className={styles.hero_container}>
        <div className={styles.bg_video}>
          <video
            src='/video/helix_pc.webm'
            loop
            controls={false}
            autoPlay
            muted
          />
        </div>
        <div className={`container ${styles.hero}`}>
          <div className={styles.hero_wrapper}>
            <div className={styles.hero_heading}>
              <h1>
                <div
                  data-scroll
                  data-scroll-speed={0.04}
                  ref={headingRef}
                  className={styles.line}
                >
                  Welcome to Avantao Technologies
                </div>
                </h1>

<div className={styles.line1}>
<span>a</span>
                <span
                  data-scroll
                  data-scroll-speed={0.01}
                  className={`${styles.anim_typewriter}`}
                >
                  utomated
                </span>
</div>
            </div>

            <div ref={buttonRef}>
              <Button>Try now</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeHero

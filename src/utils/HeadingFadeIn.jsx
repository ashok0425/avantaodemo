/**
 * when using this component to make animation in headings,
 * make sure to use for headings only tag with only one line
 * on it
 */

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import SplitType from 'split-type'

import { useIsomorphicLayoutEffect } from './IsomorphicLayout'

const HeadingFadeIn = ({ children, wordClass = '' }) => {
  const componentRef = useRef(null)

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const split = SplitType.create(componentRef.current, {
        types: 'chars, words',
        wordClass: `heading-word ${wordClass}`
      })
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          toggleActions: 'play none none reset',
          start: 'top center+=150px',
          end: '100% top',
          markers: false
        }
      })

      tl.from(split.chars, {
        y: 100,
        duration: 1,
        ease: 'power4',
        delay: 0.1,
        autoAlpha: 0,
        stagger: 0.03
      })
    })

    return () => ctx.revert()
  }, [])

  return <div ref={componentRef}>{children}</div>
}

export default HeadingFadeIn

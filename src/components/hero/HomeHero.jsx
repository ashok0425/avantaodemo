import React from 'react'

import styles from './hero.module.scss'
import { RightChevron } from '../../assets/Icons'
import Button from '../Button'

const HomeHero = () => {
  return (
    <>
      <section className={`container ${styles.hero}`}>
        <div className={styles.hero_wrapper}>
          <div className={styles.hero_heading}>
            <h1>
              <div>Welcome to Avantao Technologies</div>
              <div>
                <span>a</span>tomated
              </div>
            </h1>
          </div>

          <div>
            <Button>Try now</Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeHero

import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'
import { RightChevron } from '../../assets/Icons'

import styles from './card.module.scss'

const Card = ({ title, description }) => {
  return (
    <>
      <div className={styles.product_grid}>
        <div className={styles.product_thumb}>
          <div className={styles.product_assets}>
            <div className={styles.product_assets_wrapper}>
              <img
                src='/images/video.png'
                alt=''
                className={styles.product_image}
              />
            </div>
          </div>
        </div>

        <div className={styles.product_content}>
          <h1>{title}</h1>
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

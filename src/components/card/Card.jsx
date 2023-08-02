import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'
import { RightChevron } from '../../assets/Icons'

import styles from './card.module.scss'

const Card = ({ title, description }) => {
  return (
    <>
      <div className={styles.product_container}>
        <div className={styles.product_video}></div>
        <div className={styles.product_details}>
          <div className={styles.product_content}>
            <h1>{title}</h1>
            <p>{description}</p>
            <Link to='/'>
              <span>Visit now</span>
              <RightChevron color='#D22027' />
            </Link>
            <Button>view all</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card

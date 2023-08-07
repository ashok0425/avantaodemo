import React from 'react'

import styles from './products.module.scss'

import Card from '../card/Card'
import HeadingFadeIn from '../../utils/HeadingFadeIn'

const ProductsSection = () => {
  const data = [
    {
      id: 651564,
      title: 'AI call analytics',
      description:
        'Harnessing the power of AI, we analyze over 100,000 calls every day, transforming raw data into actionable insights. Elevate your business performance with our AI Call Analytics solution.'
    },

    {
      id: 2165456,
      title: 'AI document validation',
      description:
        'Save time and resources while improving the quality and compliance of your documents with Avantao’s AI-Based Document Validation solution.'
    }
  ]
  return (
    <section className={`section-space ${styles.product_section}`}>
      <div className='container'>
        <HeadingFadeIn>
          <h1 className='section-headline'>Products</h1>
        </HeadingFadeIn>
      </div>

      <div className={styles.products_wrapper}>
        {data.map(({ id, title, description }, index) => (
          <React.Fragment key={id}>
            <Card title={title} description={description} index={index} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default ProductsSection

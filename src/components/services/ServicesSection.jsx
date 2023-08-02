import React from 'react'

import styles from './services.module.scss'
import Card from '../card/Card'

const ServicesSection = () => {
  const data = [
    {
      id: 651564,
      title: 'AI and RPA Solutions',
      description:
        "At avantao Technologies, we're passionate about helping business like yours optimize their processes with AI, and gain a competitive edge in the industry."
    },

    {
      id: 2165456,
      title: 'Software Development',
      description:
        'At Avantao Technologies, we deeply understand that each business possesses its own challenges and demands.'
    }
  ]
  return (
    <>
      <section className={styles.service_section}>
        <div className='container'>
          <h1 className='section-headline'>Services</h1>
        </div>

        <div className={styles.services_wrapper}>
          {data.map(({ id, title, description }) => (
            <React.Fragment key={id}>
              <Card title={title} description={description} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  )
}

export default ServicesSection

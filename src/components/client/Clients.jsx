import React from 'react'

import styles from './clients.module.scss'

const Clients = () => {
  const clientData = [
    { id: 54845, imgUrl: '/clients/campbellsville.png' },
    { id: 64651, imgUrl: '/clients/insol.png' },
    { id: 64556, imgUrl: '/clients/uni.png' },
    { id: 89465, imgUrl: '/clients/caremotto.png' },
    { id: 89465, imgUrl: '/clients/rorotel.png' },
    { id: 16054, imgUrl: '/clients/dentalcare.png' },
    { id: 55635, imgUrl: '/clients/london.png' }
  ]

  const partnersData = [
    { id: 54845, imgUrl: '/partners/smart.png' },
    { id: 64651, imgUrl: '/partners/youth.png' },
    { id: 64556, imgUrl: '/partners/uni.png' }
  ]
  return (
    <>
      <section className={styles.clients_wrapper}>
        <div className='container'>
          <h1 className='section-headline'>Our Clients</h1>
          <div className={styles.logo_wrapper}>
            {clientData.map(({ id, imgUrl }) => (
              <>
                <div key={id} className={styles.client_logo}>
                  <img alt='' src={imgUrl} />
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.clients_wrapper}>
        <div className='container'>
          <h1 className='section-headline'>Our Partners</h1>
          <div className={styles.logo_wrapper}>
            {partnersData.map(({ id, imgUrl }) => (
              <>
                <div key={id} className={styles.client_logo}>
                  <img alt='' src={imgUrl} />
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Clients

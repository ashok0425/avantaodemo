import React from 'react'

import styles from './preloader.module.scss'

const PreLoader = () => {
  return (
    <section className={styles.preloader}>
      <video
        src='/video/loading.webm'
        loop
        muted
        autoPlay={true}
        controls={false}
      />
    </section>
  )
}

export default PreLoader

import React from 'react'
import { Link } from 'react-router-dom'

import styles from './footer.module.scss'

const Footer = () => {
  const footerData = {
    quickLinks: [
      'Home',
      'Product',
      'Sercices',
      'About us',
      'Contact us',
      'Resources'
    ],
    locations: [
      {
        city: 'United Kingdom',
        location:
          'Wickham House, 2 Upper Teddington Road KingstonKT70NASurreyLNDGB'
      },

      {
        city: 'USA',
        location: '37 Station Dr Suite-D, Princeton Junction NJ, 08550'
      },

      {
        city: 'Bangalore',
        location:
          'Spacelance Office Solutions Pvt. Ltd. 198, 2nd Floor, CMH Road, Indiranagar, Bangalore - 560038'
      },

      {
        city: 'Hyderabad',
        location:
          'Spacelance Office Solutions Pvt. Ltd. 203, 2nd Floor, SBR CV Towers, Madhapur Hyderabad - 500081'
      }
    ]
  }

  return (
    <>
      <footer className={styles.footer_wrapper}>
        <div className={styles.top}>
          <button
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
              // alert('hello')
            }}
          >
            Top
          </button>
        </div>
        <div className={styles.footer_container}>
          <div className={styles.footer_grid}>
            <div className={styles.logo}>
              <img src='/logo-white.svg' alt='logo' />
            </div>
            <div className={styles.quick_links}>
              <ul>
                {footerData?.quickLinks.map((item, index) => (
                  <React.Fragment key={index * 54}>
                    <li>{item}</li>
                  </React.Fragment>
                ))}
              </ul>
            </div>

            <div className={styles.company_detail}>
              <div className={styles.locations}>
                <h4>Locations</h4>
                <div className={styles.location_grid}>
                  {footerData?.locations.map(({ city, location }, index) => (
                    <React.Fragment key={index * 87}>
                      <div className={styles.location_detail}>
                        <h5>{city}</h5>
                        <p>{location}</p>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className={styles.contact}>
                <div className={styles.email}>
                  <h4>Email us</h4>
                  <a href='mailto:support@accessque.com'>
                    support@accessque.com
                  </a>
                </div>
                <div className={styles.call}>
                  <h4>Email us</h4>
                  <a href='mailto:support@accessque.com'>
                    support@accessque.com
                  </a>
                </div>
                <div className={styles.social_media}>
                  <h4>Email us</h4>
                  <a href='mailto:support@accessque.com'>
                    support@accessque.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.lower_footer}>
            <div className={styles.extra_links}>
              <Link to='/'>Privacy Policy</Link>
              <Link to='/'>Terms & Conditions</Link>
            </div>
            <div className={styles.copyright}>
              <p>
                Copyright © 2023 - All Right Reserved by Avantao Technologies
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

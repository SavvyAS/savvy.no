import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './Nav.module.scss'
import { useState } from 'react'
import { MobileMenuModal } from '../Modals/MobileMenuModal'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEquals } from '@fortawesome/pro-regular-svg-icons'

export const Nav = () => {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false)

  const router = useRouter()

  const nav = [
    { name: 'Kunder', slug: '/clients' },
    { name: 'Selskapet', slug: '/agency' },
    { name: 'Kontakt oss', slug: '/contact' }
  ]

  return (
    <>
      <MobileMenuModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)} />
      <nav className={styles.navbar}>
        <div className="container">
          <div className="column">
            <div className={styles.navbar__inner}>
              <div className={styles.navbar__logo}>
                <Link href="/">
                  <div>
                    <img
                      className="logo"
                      src="/images/savvy-logo.svg"
                      alt="Savvy logo"
                      width="105"
                      height="35"
                    />
                  </div>
                </Link>
              </div>
              <div className={styles.navbar__links}>
                {nav.map((item) => {
                  const isActive = item.slug === router.pathname
                  return (
                    <div key={item.slug} className={styles['link-wrapper']}>
                      <Link href={item.slug} className={isActive ? '' : styles['hover-highlight']}>
                        <span>{item.name}</span>
                      </Link>
                      {isActive && (
                        <div className={styles['link-body']}>
                          <Image src="/images/active-link.svg" alt="" width="140" height="42" />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
              <button
                className={styles['navbar__mobile-button']}
                aria-label="Open menu"
                onClick={() => setModalIsOpen(true)}
              >
                <FontAwesomeIcon icon={faEquals} />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

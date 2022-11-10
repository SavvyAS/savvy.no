import clsx from 'clsx'
import Link from 'next/link'
import { BaseModal } from './BaseModal'
import styles from './Modals.module.scss'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenuModal = ({ isOpen, onClose }: Props) => {
  const nav = [
    { name: 'Kunder', slug: '/clients' },
    { name: 'Selskapet', slug: '/agency' },
    { name: 'Kontakt oss', slug: '/contact' }
  ]

  return (
    <>
      {isOpen && (
        <BaseModal isOpen={isOpen} onClose={onClose} color="gradient">
          <nav className={styles['mobile-nav']}>
            {nav.map((item) => (
              <Link
                href={item.slug}
                onClick={onClose}
                key={item.slug}
                className={clsx(styles['mobile-link'], 'h1')}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </BaseModal>
      )}
    </>
  )
}

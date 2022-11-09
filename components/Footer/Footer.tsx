import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from '../Button/Button'
import content from '@/lib/content.json'
import { Globals } from '@/lib/content.interface'
import styles from './Footer.module.scss'
import clsx from 'clsx'
import { ReactNode, useState } from 'react'
import { CvForm } from 'components/Forms/CvForm'
import { ContactForm } from 'components/Forms/ContactForm'
import { BaseModal } from 'components/Modals/BaseModal'

export const Footer = () => {
  const { footer } = content.globals as Globals

  const [modalContent, setModalContent] = useState<{
    content: ReactNode
    color: string
  } | null>(null)

  const router = useRouter()
  const pathname = usePathname()

  const openUploadCVModal = () => {
    setModalContent({ content: <CvForm />, color: 'primary-dark' })
  }

  const openSendMessageModal = () => {
    setModalContent({ content: <ContactForm />, color: 'primary-dark' })
  }

  const footerText =
    pathname === '/agency' || pathname === '/contact'
      ? 'Vil du bli bedre kjent med oss?'
      : 'Vil du samarbeide med oss?'

  return (
    <>
      {modalContent && (
        <BaseModal
          isOpen={!!modalContent}
          onClose={() => setModalContent(null)}
          color={modalContent.color}
        >
          {modalContent.content}
        </BaseModal>
      )}
      <footer className={clsx('container', styles.footer)}>
        <div className={styles.row}>
          <div className={clsx('column', styles.footer__cta)}>
            <h3 className="color-secondary">{footerText}</h3>

            {pathname === '/agency' ? (
              <Button onClick={openUploadCVModal}>Send din CV</Button>
            ) : (
              <Button v-else onClick={openSendMessageModal}>
                Send oss en melding
              </Button>
            )}
          </div>
        </div>

        <div className="row">
          <div className={clsx('column', styles.footer__bottom)}>
            <div className={styles.footer__grid}>
              <address className={styles.address}>
                <div>{footer.address}</div>
                <div>{footer.postal}</div>
                <div>
                  <a className={clsx('color-white', styles.a)} href="mailto:hei@savvy.no">
                    {footer.email}
                  </a>
                </div>
              </address>
              <nav className={styles.links}>
                <Link href="/clients" className="color-secondary">
                  Kunder
                </Link>
                <Link
                  href="/agency"
                  className="color-secondary"
                  onClick={() => router.push('/about')}
                >
                  Selskapet
                </Link>
                <Link href="/contact" className="color-secondary">
                  Kontakt oss
                </Link>
              </nav>
            </div>
            <div className="copyright">&#169;{new Date().getFullYear()} All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </>
  )
}

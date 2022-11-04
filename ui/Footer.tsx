'use client'

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { Button } from './Button'
import content from '@/lib/content.json'
import { Globals } from '@/lib/content'
// import './Footer.module.scss'

export const Footer = () => {
  const { footer } = content.globals as Globals
  const router = useRouter()
  const pathname = usePathname()
  const openUploadCVModal = () => {}
  const openSendMessageModal = () => {}

  const footerText =
    pathname === '/agency' || pathname === 'contact'
      ? 'Want to be part of our team?'
      : 'Want to collaborate with us?'

  return (
    <footer className="container footer">
      <div className="row">
        <div className="column footer__cta">
          <h3 className="color-secondary">{footerText}</h3>

          {pathname === 'agency' ? (
            <Button onClick={openUploadCVModal}>Send your CV</Button>
          ) : (
            <Button v-else onClick={openSendMessageModal}>
              Contact us
            </Button>
          )}
        </div>
      </div>

      <div className="row">
        <div className="column footer__bottom">
          <div className="footer__grid">
            <address className="address">
              <div>{footer.address}</div>
              <div>{footer.postal}</div>
              <div>
                <a className="a color-white" href="mailto:hei@savvy.no">
                  {footer.email}
                </a>
              </div>
            </address>
            <nav className="links">
              <Link href="/clients" className="color-secondary">
                Clients
              </Link>
              <Link
                href="/agency"
                className="color-secondary"
                onClick={() => router.push('/about')}
              >
                Agency
              </Link>
              <Link href="/contact" className="color-secondary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="copyright">&#169;{new Date().getFullYear()} All Rights Reserved</div>
        </div>
      </div>
    </footer>
  )
}

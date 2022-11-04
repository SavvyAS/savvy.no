'use client'

import clsx from 'clsx'
import { useSelectedLayoutSegments } from 'next/navigation'
import Link from 'next/link'

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments()

  const openMegaMenu = () => {}

  return (
    <nav className="navbar">
      <div className="container">
        <div className="column">
          <div className="navbar__inner">
            <div className="navbar__logo">
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
            <div className="navbar__links">
              <div className="link-wrapper">
                <Link href="/clients">
                  <span>Clients</span>
                </Link>
                <div className="link-body">
                  <img src="/images/active-link.svg" alt="" width="140" height="42" />
                </div>
              </div>
              <div className="link-wrapper">
                <Link href="/agency">
                  <span>Agency</span>
                </Link>
                <div className="link-body">
                  <img src="/images/active-link.svg" alt="" width="140" height="42" />
                </div>
              </div>
              <div className="link-wrapper">
                <Link href="/contact">
                  <span>Contact</span>
                </Link>
                <div className="link-body">
                  <img src="/images/active-link.svg" alt="" width="140" height="42" />
                </div>
              </div>
            </div>
            <button className="navbar__mobile-button" aria-label="Open menu" onClick={openMegaMenu}>
              <i className="far fa-equals faw" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

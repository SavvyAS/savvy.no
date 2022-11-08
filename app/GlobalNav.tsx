'use client'

import clsx from 'clsx'
import { useSelectedLayoutSegments } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

export default function GlobalNav() {
  const [selectedLayoutSegments] = useSelectedLayoutSegments()

  const openMegaMenu = () => {}

  const nav = [
    { name: 'Kunder', slug: 'clients' },
    { name: 'Selskapet', slug: 'agency' },
    { name: 'Kontakt oss', slug: 'contact' }
  ]

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
              {nav.map((item) => {
                const isActive = item.slug === selectedLayoutSegments
                return (
                  <div key={item.slug} className="link-wrapper">
                    <Link href={`/${item.slug}`}>
                      <span>{item.name}</span>
                    </Link>
                    {isActive && <div className="link-body">
                      <Image src="/images/active-link.svg" alt="" width="140" height="42" />
                    </div>}
                  </div>
                )
              })}
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

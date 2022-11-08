import { Contact, FooterContent } from '@/lib/content.interface'
import content from '@/lib/content.json'
import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'

export default function Page() {
  const contact = content.pages.contact as Contact
  const footer = content.globals.footer as FooterContent

  return (
    <>
      <Head>
        <title>{contact.metaTitle}</title>
      </Head>
      <div className="overflow-hidden">
        <div className="container">
          <header>
            <h1 className="sr-only">{contact.metaTitle}</h1>
            <div className="row">
              <div className={clsx('column', styles['grid-layout'])}>
                <Image
                  className={styles['grid-layout__image']}
                  src="/images/header-image-1.png"
                  alt=""
                  width="628"
                  height="790"
                  quality="100"
                />
                <p className={clsx('paragraph-large', styles['grid-layout__ingress'])}>
                  {contact.text}
                </p>
                <div className={styles['grid-layout__contact']}>
                  <a href={`tel:${footer.telephone}`}>
                    <h3>{footer.telephone}</h3>
                  </a>
                  <a href={`mailto:${footer.email}`}>
                    <h3>{footer.email}</h3>
                  </a>
                </div>
                <address className={styles['grid-layout__address']}>
                  <h3>{footer.address}</h3>
                  <h3>{footer.postal}</h3>
                </address>

                <Image
                  className={styles['grid-layout__graffiti']}
                  src="/images/graffiti_2.svg"
                  width="379"
                  height="431"
                  quality="100"
                  alt=""
                />
              </div>
            </div>
          </header>
        </div>
      </div>
    </>
  )
}

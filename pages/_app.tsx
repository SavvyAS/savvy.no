import { AppProps } from 'next/app'
import '@/styles/globals.scss'
import Layout from './layout'
import Head from 'next/head'
import content from '@/lib/content.json'
import { Pages } from '@/lib/content.interface'
import Script from 'next/script'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function MyApp({ Component, pageProps }: AppProps) {
  const { agency } = content.pages as Pages
  const ga_id = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={agency.ingress}></meta>
        <title>Savvy</title>
      </Head>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}></Script>
      <Script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${ga_id}');
          `}
      </Script>
      <Component {...pageProps} />
    </Layout>
  )
}

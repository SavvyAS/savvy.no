import { AppProps } from 'next/app'
import '../node_modules/@fortawesome/fontawesome-pro/css/all.min.css'
import '@/styles/globals.scss'
import Layout from './layout'
import Head from 'next/head'
import content from '@/lib/content.json'
import { Pages } from '@/lib/content.interface'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { agency } = content.pages as Pages

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={agency.ingress}></meta>
        <title>Savvy</title>
      </Head>
      {!!process.env.GOOGLE_ANALYTICS_ID && process.env.ENV === 'production' && (
        <>
          <Script id="google-analytics" strategy="afterInteractive">
            {`
                  window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                  ga('create', ${process.env.GOOGLE_ANALYTICS_ID}, 'auto');
                  ga('send', 'pageview');
                `}
          </Script>
          <Script src="https://www.google-analytics.com/analytics.js" strategy="afterInteractive" />
        </>
      )}
      <Component {...pageProps} />
    </Layout>
  )
}

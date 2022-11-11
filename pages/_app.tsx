import { AppProps } from 'next/app'
import '../node_modules/@fortawesome/fontawesome-pro/css/all.min.css'
import '@/styles/globals.scss'
import Layout from './layout'
import Head from 'next/head'
import content from '@/lib/content.json'
import { Pages } from '@/lib/content.interface'

export default function MyApp({ Component, pageProps }: AppProps) {
  const { agency } = content.pages as Pages

  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content={agency.ingress}
        ></meta>
        <title>Savvy</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

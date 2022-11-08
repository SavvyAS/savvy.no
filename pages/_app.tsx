import { AppProps } from 'next/app'
import '@fortawesome/fontawesome-pro/css/all.css'
import '@/styles/globals.scss'
import Layout from './layout'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Savvy</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

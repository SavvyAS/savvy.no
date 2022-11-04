import { Footer } from '@/ui/Footer'
import GlobalNav from './GlobalNav'
import '@fortawesome/fontawesome-pro/css/all.css'
import '@/styles/globals.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Savvy</title>
      </head>
      <body>
        <div style={{ overflowX: 'hidden', width: '100%'}}>
          <GlobalNav />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}

import { Footer } from '@/ui/Footer'
import GlobalNav from './GlobalNav'
import '@fortawesome/fontawesome-pro/css/all.css'
import '@/styles/globals.scss'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <title>Savvy</title>
      </head>
      <body>
        <GlobalNav />
        <div className="content">{children}</div>
        <Footer />
      </body>
    </html>
  )
}

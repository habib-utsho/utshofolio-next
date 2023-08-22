import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Utshofolio',
  description: 'Portfolio of Ahashan Habib Utsho',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* For background */}
        <div className='main'>
          <div className='gradient' />
        </div>

        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

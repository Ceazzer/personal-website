import './globals.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'

import { Inter } from 'next/font/google'
import { FeatureProvider } from './injector'

const inter = Inter({ subsets: ['latin'] })

library.add(fas)

export const metadata = {
  title: 'Profile',
  description: 'My Profile',
}

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <FeatureProvider>
            {children}
        </FeatureProvider>
      </body>
    </html>
  )
}

export default RootLayout
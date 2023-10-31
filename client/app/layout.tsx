import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'

import MainNavigation from './components/(Layout)/Navigation/MainNavigation'
import getCurrentUser from './api/(server)/get-current-user'

const ibmPlex = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Property Dev Notifier',
  description: 'Generated for notifying property developers',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  console.log('CURRENT_USSSAAAH:', currentUser)

  return (
    <html lang="en" className={ibmPlex.className}>
      <body>
        <div className="root">
          <header className="header">
            <h1>Property Dev Notifier</h1>
            {currentUser !== null && <MainNavigation />}
          </header>
          {children}
        </div>
        <footer className="footer">
          <p>&copy;2023 Nagua. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

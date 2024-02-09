import './globals.css'
import type { Metadata } from 'next'

import { inter500 } from './fonts'
// import getCurrentUser from '@/api/(server)/auth/get-current-user'

import BackgroundPortal from '@/components/UI/Background/BackgroundPortal'
// import NavigationListener from './components/(Listener)/navigation/NavigationListener'
// import { Suspense } from 'react'
// import { NavigationProvider } from './context/NavigationProvider'
// import LoadingContainer from '@/components/(Loading)/LoadingContainer'

export const metadata: Metadata = {
  title: 'Property Dev Notifier',
  description: 'Generated for notifying property developers',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // const currentUser = await getCurrentUser()

  return (
    <html lang="en" className={inter500.className}>
      <body>
        {/* <NavigationProvider> */}
        {children}
        {/* </NavigationProvider> */}
        <BackgroundPortal />
        {/* <Suspense fallback={null}>
          <NavigationListener />
        </Suspense> */}
      </body>
    </html>
  )
}

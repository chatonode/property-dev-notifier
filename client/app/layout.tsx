import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import { cookies } from 'next/headers'

import MainNavigation from './components/(Layout)/Navigation/MainNavigation'

const ibmPlex = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] })

// Local
const ingressNginxURL =
  'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local'

// // Prod
// // const ingressNginxURL = 'http://www.your-domain.com'

const getCurrentUser = async () => {
  const cookieStore = cookies()
  const session = cookieStore.get('session')
  console.log('cookie->session | Server Action:', session)

  const response = await fetch(`${ingressNginxURL}/api/auth/current-user`, {
    cache: 'no-store', // getServerSideProps
    headers: {
      // TODO: Make it env variable
      Host: 'property-dev-notifier.com', // Fixed the issue!!!
      cookie: `${session?.name}=${session?.value}`, // Review Differences: https://www.diffchecker.com/H6vuVwUz/
    },
  })
  // The return value is *not* serialized

  if (!response.ok) {
    throw new Error('Failed to fetch user!')
  }

  // console.log('RESPONZAAA:', await response.json())

  const { currentUser } = await response.json()

  return currentUser
}

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

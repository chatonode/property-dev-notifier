import './globals.css'
import type { Metadata } from 'next'

import { inter500 } from './fonts'
import getCurrentUser from '@/api/(users)/get-current-user'

import BackgroundPortal from '@/components/UI/Background/BackgroundPortal'
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
  // const router = useRouter()
  const currentUser = await getCurrentUser()

  return (
    <html lang="en" className={inter500.className}>
      <body>
        {children}
        <BackgroundPortal />
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'

import { inter500 } from './fonts'
import getCurrentUser from '@/api/(users)/get-current-user'

import MainHeader from '@/components/(Layout)/Header/MainHeader'
import MainFooter from '@/components/(Layout)/Footer/MainFooter'
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
        <MainHeader currentUser={currentUser} />
        {/* <LoadingContainer /> */}
        <div className="root">{children}</div>
        <MainFooter />
        <BackgroundPortal />
      </body>
    </html>
  )
}

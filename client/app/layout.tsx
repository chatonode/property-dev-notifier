import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import getCurrentUser from '@/api/(users)/get-current-user'

import MainHeader from '@/components/(Layout)/Header/MainHeader'
import MainFooter from './components/(Layout)/Footer/MainFooter'
import RootLoadingSkeleton from './loading-unused'
import BackgroundPortal from './components/UI/Background/BackgroundPortal'

const inter500 = Inter({ weight: '500', subsets: ['latin'] })

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
        <div className="root">{children}</div>
        {/* <RootLoadingSkeleton /> */}
        <MainFooter />
        <BackgroundPortal />
      </body>
    </html>
  )
}

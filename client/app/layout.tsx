import './globals.css'
import type { Metadata } from 'next'
import { Anton } from 'next/font/google'

import getCurrentUser from '@/api/(users)/get-current-user'
import MovingCircles from '@/components/UI/Background/MovingCircles'
import MainHeader from '@/components/(Layout)/Header/MainHeader'
import MainFooter from './components/(Layout)/Footer/MainFooter'

const anton = Anton({ weight: '400', subsets: ['latin'] })

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
    <html lang="en" className={anton.className}>
      <body>
        <MainHeader currentUser={currentUser} />
        <div className="root">{children}</div>
        <MainFooter />
        <MovingCircles />
      </body>
    </html>
  )
}

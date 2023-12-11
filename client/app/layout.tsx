import './globals.css'
import type { Metadata } from 'next'
import { Anton } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import logo from '@/public/assets/images/logo/SmartLogoWebMobile.png'

import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'
import MovingCircles from './components/UI/Background/MovingCircles'

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
  const currentUser = await getCurrentUser()

  // console.log('CURRENT_USER:', currentUser)

  return (
    <html lang="en" className={anton.className}>
      <body>
        <header className="header">
          <div className="logo-container">
            <Image
              src={logo.src}
              quality={100}
              width={200}
              height={45}
              //   sizes="(max-width: 768px) 100vw"
              alt="logo"
            />
            <Link
              href={ERoute.Logout}
              className="nav-item"
              // onClick={logUserOut}
            >
              Logout
            </Link>
          </div>
          <h1>Property Dev Notifier</h1>
          {/* {currentUser !== null && <MainNavigation />} */}
        </header>
        <div className="root">
          <MovingCircles />
          {children}
        </div>
        <footer className="footer">
          <p>&copy;2023 Nagua. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}

'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Inter } from 'next/font/google'
import BackgroundPortal from '@/components/UI/Background/BackgroundPortal'
import MainFooter from './components/(Layout)/Footer/MainFooter'
import MainHeader from './components/(Layout)/Header/MainHeader'
import ErrorLayout from './components/UI/Error/ErrorLayout'

const inter500 = Inter({ weight: '500', subsets: ['latin'] })

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <html lang="en" className={inter500.className}>
      <body>
        {/* <MainHeader currentUser={null} /> */}
        <div className="root">
          <ErrorLayout>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
          </ErrorLayout>
        </div>
        <MainFooter />
        <BackgroundPortal />
      </body>
    </html>
  )
}

'use client' // Error components must be Client Components

import { useEffect } from 'react'

import { inter500 } from '@/app/fonts'

import BackgroundPortal from '@/components/UI/Background/BackgroundPortal'
import MainHeader from './components/(Layout)/(public)/Header/MainHeader'
import MainFooter from './components/(Layout)/(public)/Footer/MainFooter'
import ErrorSectionWrapper from './components/(Layout)/Body/Error/ErrorSectionWrapper'

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
          <ErrorSectionWrapper>
            <h2>Something went wrong!</h2>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
          </ErrorSectionWrapper>
        </div>
        <MainFooter />
        <BackgroundPortal />
      </body>
    </html>
  )
}

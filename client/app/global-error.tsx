'use client' // Error components must be Client Components

import './globals.css'

import { memo, useCallback } from 'react'
import Link from 'next/link'

import useCurrentUserAfterError from '@/hooks/useCurrentUserAfterError'

import { ERoute } from '@/types/enums'
import { TErrorProps } from '@/types/error'

import { inter500 } from '@/app/fonts'
import MainHeader from '@/components/(Layout)/(public)/Header/MainHeader'
import BackgroundPortal from '@/components/UI/Background/BackgroundPortal'
import MainFooter from '@/components/(Layout)/(public)/Footer/MainFooter'
import PublicMainWrapper from '@/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'

const GlobalError = ({ error, reset }: TErrorProps) => {
  const { currentUser } = useCurrentUserAfterError({ error })

  const resetHandler = useCallback(() => {
    reset()
  }, [reset])

  return (
    <html lang="en" className={inter500.className}>
      <body>
        <div className="layout-public">
          <MainHeader currentUser={currentUser} />
          <div className="root">
            <PublicMainWrapper>
              <PublicSectionWrapper>
                <h2>Whoopsie...</h2>
                {/* <h3>{error.name}</h3> */}
                <h3>{error.name}</h3>
                {/* <button onClick={resetHandler}>Reset</button> */}

                <p>{error.message}</p>

                {/* <code>
                  <p>{error.stack}</p>
                </code> */}

                {/* <p>{error.detail}</p> */}

                <p>{error.detail}</p>

                {/* {error.cause && (
                    <ul>
                      {error.cause}
                    </ul>
                  )} */}
                <Link href={ERoute.Home}>Return to Home Page</Link>
              </PublicSectionWrapper>
            </PublicMainWrapper>
          </div>
          <MainFooter />
        </div>
        <BackgroundPortal />
      </body>
    </html>
  )
}

export default memo(GlobalError)

'use client'

import { memo, useCallback } from 'react'
import Link from 'next/link'

import useCurrentUserAfterError from '@/hooks/useCurrentUserAfterError'

import { TErrorProps } from '@/types/error'
import { ERoute } from '@/types/enums'

import PublicMainWrapper from '@/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'

const PublicError = ({ error, reset }: TErrorProps) => {
  const { currentUser } = useCurrentUserAfterError({ error })

  const resetHandler = useCallback(() => {
    reset()
  }, [reset])

  return (
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
  )
}

export default memo(PublicError)

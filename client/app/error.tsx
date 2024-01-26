'use client'

import { useCallback, useEffect } from 'react'
import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import Link from 'next/link'
import { ERoute } from './types/enums'

type TNextError = Error & { digest?: string }

type TError = TNextError & { detail: string }

type TErrorProps = {
  error: TError
  reset: () => void
}

const Error = ({ error, reset }: TErrorProps) => {
  const resetHandler = useCallback(() => {
    reset()
  }, [reset])

  useEffect(() => {
    console.log('ERROR TSX:', error.name)
    // Log the error to an error reporting service
    console.error('error.tsx: ', error.digest)
  }, [error])

  return (
    <ErrorSectionWrapper>
      <div>
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
      </div>
    </ErrorSectionWrapper>
  )
}

export default Error

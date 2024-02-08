'use client'

import { memo, useCallback } from 'react'
import Link from 'next/link'

import useCurrentUserAfterError from '@/hooks/useCurrentUserAfterError'

import { ERoute } from '@/types/enums'
import { TErrorProps } from '@/types/error'

import DashboardMainWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import PageTitleWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'
import DashboardSectionWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'

const DashboardError = ({ error, reset }: TErrorProps) => {
  const { currentUser } = useCurrentUserAfterError({ error })

  const resetHandler = useCallback(() => {
    reset()
  }, [reset])

  return (
    <DashboardMainWrapper>
      <PageTitleWrapper
        // TODO: Make currentUser optional for Page Title or other solutions for client components
        currentUser={currentUser}
      >
        Dashboard | Whoopsie...
      </PageTitleWrapper>
      <DashboardSectionWrapper>
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
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default memo(DashboardError)

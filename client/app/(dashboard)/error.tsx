'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { ERoute } from '@/types/enums'
import { TErrorProps } from '@/types/error'
// import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import getCurrentUser, { TCurrentUser } from '@/api/(users)/get-current-user'
import DashboardMainWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import PageTitleWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'
import DashboardSectionWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'

const DashboardError = ({ error, reset }: TErrorProps) => {
  const [currentUser, setCurrentUser] = useState<TCurrentUser>({
    email: '***@***.***',
    iat: 0,
    id: '###',
  })

  const resetHandler = useCallback(() => {
    reset()
  }, [reset])

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the current user data
        const user = await getCurrentUser()

        console.log('Dashboard Error: user ->> ', user)

        // Set the fetched user data to the state
        setCurrentUser(user)
      } catch (error) {
        console.error('Error fetching current user:', error)
      }
    }

    // Call the fetchData function
    fetchData()

    console.log('ERROR TSX:', error.name)
    // Log the error to an error reporting service
    console.error('error.tsx: ', error.digest)
  }, [error])

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

export default DashboardError

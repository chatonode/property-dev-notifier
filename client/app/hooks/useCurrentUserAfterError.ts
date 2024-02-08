'use client'

import { useEffect, useState } from 'react'

import { TErrorProps } from '@/types/error'
import getCurrentUser, { TCurrentUser } from '@/api/(users)/get-current-user'

const useCurrentUserAfterError = ({
  error,
}: //   reset,
Pick<TErrorProps, 'error'>) => {
  const [currentUser, setCurrentUser] = useState<TCurrentUser>({
    email: 'Loading...',
    iat: 0,
    id: '###',
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the current user data
        const user = await getCurrentUser()

        console.log('User Data after Error: user ->> ', user)

        // Set the fetched user data to the state
        setCurrentUser(user)
      } catch (error) {
        console.error('Error fetching current user:', error)
      }
    }

    // Call the fetchData function
    fetchData()

    // Log the error to an error reporting service
    console.error('Error Component | error.tsx: ', error.digest)
  }, [error])

  //   useEffect(() => {
  //     const resetHandler = () => {
  //       reset()
  //     }

  //     // Attach the reset handler to the reset function
  //     resetHandler()
  //   }, [reset])

  return { currentUser }
}

export default useCurrentUserAfterError

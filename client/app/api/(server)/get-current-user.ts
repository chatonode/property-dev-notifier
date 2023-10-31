

import { cookies } from 'next/headers'
import { buildSender } from '../build-sender'

/**
 * @function
 * @description to get Current User from React Server Components (not including 'use client')
 * Attaches cookies manually
 */
const getCurrentUser = async () => {
  const cookieStore = cookies()
  const session = cookieStore.get('session')
  // console.log('cookie->session | Server Action:', session)

  const axiosSender = buildSender()

  const response = await axiosSender.get('/api/auth/current-user', {
    headers: {
      cookie: `${session?.name}=${session?.value}`,
    },
    withCredentials: true,
  })

  if (response.status !== 200) {
    throw new Error('Failed to fetch current user!')
  }

  const { currentUser } = await response.data

  return currentUser
}

export default getCurrentUser

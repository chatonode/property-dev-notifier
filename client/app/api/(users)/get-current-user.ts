import { buildServerSender } from '@/app/api/(axios)/server/build-server-sender'

export type TCurrentUser = {
  id: string
  email: string
  iat: number
}

/**
 * @function
 * @description to get Current User from React Server Components (not including 'use client')
 * Attaches cookies manually
 */
const getCurrentUser = async () => {

  const axiosSender = buildServerSender()

  const response = await axiosSender.get('/api/auth/current-user')

  if (response.status !== 200) {
    throw new Error('Failed to fetch current user!')
  }

  const { currentUser }: { currentUser: TCurrentUser } = await response.data

  return currentUser
}

export default getCurrentUser

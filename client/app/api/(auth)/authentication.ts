import { buildClientSender } from '../(axios)/client/build-client-sender'

/**
 * @function
 */
const logUserOutFromClient = async () => {
  const axiosSender = buildClientSender()

  const response = await axiosSender.post('/api/auth/logout', {})

  if (response.status !== 200) {
    throw new Error('Log out Failed!')
  }

  return true
}

export { logUserOutFromClient }

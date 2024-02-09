import { buildClientSender } from '../../(axios)/client/build-client-sender'

/**
 * @function
 */
const logUserOutFromClient = async () => {
  const axiosSender = buildClientSender()

  try {
    const response = await axiosSender.post('/api/auth/logout', {})

    if (response.status !== 200) {
      throw new Error('Log out Failed!')
    }
  } catch (error) {
    throw error
  }

  // return true
}

export default logUserOutFromClient

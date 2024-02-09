import { buildServerSender } from '../../(axios)/server/build-server-sender'

/**
 * @function
 */
const logUserOutFromServer = async () => {
  const axiosSender = buildServerSender()

  try {
    const response = await axiosSender.post('/api/auth/logout', {})

    if (response.status !== 200) {
      throw new Error('Log out Failed!')
    }
  } catch (error) {
    throw error
  }
}

export default logUserOutFromServer

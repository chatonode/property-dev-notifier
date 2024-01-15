import axios, { AxiosInstance } from 'axios'
import { activateResponseInterceptor } from '../common/interceptor'

/**
 * Builds a client-side Axios instance for sending HTTP requests.
 *
 * @throws {Error} Throws an error if used in a server environment.
 * @returns {AxiosInstance} The Axios instance configured for client-side requests.
 */
const buildClientSender = (): AxiosInstance => {
  // Server || Browser
  if (typeof window === 'undefined') {
    // We are on the server!
    // console.log('We are on the server!')

    throw new Error('This sender works with Client Components only!')
  } else {
    // We are on the browser!

    const axiosInstance = axios.create({
      headers: {
        'Content-Type': 'application/json',
      },
    })

    activateResponseInterceptor(axiosInstance)

    return axiosInstance
  }
}

export { buildClientSender }

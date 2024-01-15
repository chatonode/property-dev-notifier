// For Server Components only!
import axios, { AxiosInstance } from 'axios'
import { cookies } from 'next/headers'
import { activateResponseInterceptor } from '../common/interceptor'

// Local
const ingressNginxURL =
  'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local'

// Prod
// const ingressNginxURL = 'http://www.your-domain.com'

/**
 * Builds a server-side Axios instance for sending HTTP requests.
 *
 * @throws {Error} Throws an error if used in a browser environment.
 * @returns {AxiosInstance} The Axios instance configured for server-side requests.
 */
const buildServerSender = (): AxiosInstance => {
  // Server || Browser
  if (typeof window === 'undefined') {
    // We are on the server!
    // console.log('We are on the server!')
    const cookieStore = cookies()
    const session = cookieStore.get('session')

    const axiosInstance = axios.create({
      baseURL: ingressNginxURL,
      headers: {
        Host: 'property-dev-notifier.com', // Fixed the issue!!!
        'Content-Type': 'application/json',
        cookie: `${session?.name}=${session?.value}`,
      },
      withCredentials: true,
    })

    activateResponseInterceptor(axiosInstance)

    return axiosInstance
  } else {
    // We are on the browser!

    throw new Error('This sender works with Server Components only!')
  }
}

export { buildServerSender }

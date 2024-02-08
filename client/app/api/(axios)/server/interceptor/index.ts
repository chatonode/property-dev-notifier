import { redirect } from 'next/navigation'
import { AxiosError, AxiosInstance } from 'axios'

import { ERoute } from '@/app/types/enums'

const inServer = typeof window === 'undefined'

const activateServerResponseInterceptor = (instance: AxiosInstance) => {
  console.warn('***Server Interceptor***')
  if (inServer) {
    // Response interceptor
    instance.interceptors.response.use(
      (response) => {
        // Modify the response data here
        console.log(`SUCCESS: I'm in the server interceptor!!!`)

        return response
      },
      (error) => {
        // Handle response errors here
        console.log(`ERROR: I'm in the server interceptor!!!`)

        if (error.response && error.response.status) {
          switch (error.response.status) {
            case 400: // Custom Errors can be used(Client Components are responded with BadRequest).
              console.error('Interceptor: 400')
              return Promise.resolve(error.response)
            case 401:
              console.error('Interceptor: 401')
              redirect(ERoute.Unauthorized)
            case 403:
              console.error('Interceptor: 403')
              return redirect(ERoute.Forbidden)
            case 404:
              console.error('Interceptor: 404')
              return Promise.resolve(error.response)
            case 500:
              console.error('Interceptor: 500')
              return redirect(ERoute.InternalServerError)
            default:
              return Promise.reject(error)
          }
        } else if (error.request) {
          // Network-related errors (e.g., timeout, no response)
          console.error('Interceptor: Network error')
          // Handle and provide user feedback
          return redirect(ERoute.NetworkError)
        } else {
          // Other unexpected errors
          console.error('Interceptor: Unexpected error', error.message)
          // Handle and provide user feedback
          return redirect(ERoute.GenericError)
        }
      }
    )
  } else {
    // We are on the browser!
    throw new Error('This interceptor works with Server Components only!')
  }
}

export { activateServerResponseInterceptor }

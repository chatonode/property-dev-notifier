import { AxiosError, AxiosInstance } from 'axios'

import { ERoute } from '@/app/types/enums'
// import { useRouter } from 'next/navigation'

// import { useAsyncError } from '@/app/hooks/useAsyncError'
import BadRequestError from '@/app/lib/errors/BadRequestError'

const inClient = !(typeof window === 'undefined')

const activateClientResponseInterceptor = (instance: AxiosInstance) => {
  //   const throwError = useAsyncError()
  //   const router = useRouter()

  console.warn('***Client Interceptor***')

  if (inClient) {
    // Response interceptor
    instance.interceptors.response.use(
      (response) => {
        // Modify the response data here
        console.log(`SUCCESS: I'm in the client interceptor!!!`)

        return response
      },
      (error) => {
        // Handle response errors here
        console.log(`ERROR: I'm in the client interceptor!!!`)

        if (error.response && error.response.status) {
          switch (error.response.status) {
            case 400: // Custom Errors can be used (Client Components are responded with BadRequest).
              console.error('Client Interceptor: 400')
              //   return Promise.resolve(error.response)
              throw new BadRequestError(error.response.data.errors[0].message)
            case 401:
              console.error('Client Interceptor: 401')
              //   return router.push(ERoute.Unauthorized)
              return window.history.pushState(null, '', ERoute.Unauthorized)
            case 403:
              console.error('Client Interceptor: 403')
              //   return router.push(ERoute.Forbidden)
              return window.history.pushState(null, '', ERoute.Forbidden)
            case 404:
              console.error('Client Interceptor: 404')
              return Promise.resolve(error.response)
            case 500:
              console.error('Client Interceptor: 500')
              //   return router.push(ERoute.InternalServerError)
              return window.history.pushState(
                null,
                '',
                ERoute.InternalServerError
              )
            default:
              return Promise.reject(error)
          }
        } else if (error.request) {
          // Network-related errors (e.g., timeout, no response)
          console.error('Client Interceptor: Network error')
          //   return router.push(ERoute.NetworkError)
          return window.history.pushState(null, '', ERoute.NetworkError)
        } else {
          // Other unexpected errors
          console.error('Client Interceptor: Unexpected error', error.message)
          //   return router.push(ERoute.GenericError)
          return window.history.pushState(null, '', ERoute.GenericError)
        }
      }
    )
  } else {
    // We are on the server!

    throw new Error('This sender works with Client Components only!')
  }
}

export { activateClientResponseInterceptor }

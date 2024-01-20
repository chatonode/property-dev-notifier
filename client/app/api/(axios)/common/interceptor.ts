import AuthRequiredError from '@/app/lib/errors/AuthRequiredError'
import { ERoute } from '@/app/types/enums'
import { AxiosError, AxiosInstance } from 'axios'
import { redirect } from 'next/navigation'

const inServer = typeof window === 'undefined'

const activateResponseInterceptor = (instance: AxiosInstance) => {
  // Response interceptor
  instance.interceptors.response.use(
    (response) => {
      // Modify the response data here
      console.log(`SUCCESS: I'm in the interceptor!!!`)

      return response
    },
    (error) => {
      // Handle response errors here
      console.log(`ERROR: I'm in the interceptor!!!`)

      if (error.response && error.response.status) {
        switch (error.response.status) {
          case 400: // Custom Errors can be used(Client Components are responded with BadRequest).
            console.error('Interceptor: 400')
            return Promise.resolve(error.response)
          case 401:
            console.error('Interceptor: 401')
            // const router = useRouter()
            return redirect(ERoute.Unauthorized)
          // return Promise.resolve(error.response)
          case 404:
            console.error('Interceptor: 404')
            return Promise.resolve(error.response)
          case 500:
            console.error('Interceptor: 500')
            return Promise.resolve(error.response)
          default:
            return Promise.reject(error)
        }
      }
    }
  )
}

export { activateResponseInterceptor }

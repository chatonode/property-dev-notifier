/* **************** Basic ************** */
/* ************************************* */

// import { useRouter as originalUseRouter } from 'next/navigation'
// import { useEffect, useState } from 'react'

// type TRouterInstanceMethodProps = (
//   url: string,
//   as?: string,
//   options?: {}
// ) => void

// const useRouter = () => {
//   const router = originalUseRouter()
//   const [isNavigating, setIsNavigating] = useState(false)
//   const [targetUrl, setTargetUrl] = useState<string | null>(null)
//   const [method, setMethod] = useState<'push' | 'replace' | 'refresh' | null>(
//     null
//   )

//   useEffect(() => {
//     if (isNavigating && targetUrl) {
//       const timer = setTimeout(() => {
//         if (method === 'push') {
//           router.push(targetUrl)
//         } else if (method === 'replace') {
//           router.replace(targetUrl)
//         }
//         setIsNavigating(false)
//         console.log('Delayed things happening???')
//       }, 2000) // 2000ms delay

//       return () => clearTimeout(timer)
//     }
//   }, [isNavigating, router, targetUrl, method])

//   const push: TRouterInstanceMethodProps = (url, as, options) => {
//     setTargetUrl(url)
//     setMethod('push')
//     setIsNavigating(true)
//   }

//   const replace: TRouterInstanceMethodProps = (url, as, options) => {
//     setTargetUrl(url)
//     setMethod('replace')
//     setIsNavigating(true)
//   }

//   const refresh = () => {
//     router.refresh()
//   }

//   return { ...router, push, replace, refresh, isNavigating }
// }

// export { useRouter }

/* ************************************* */


/* ************** With Context ********* */
/* ************************************* */

import { useRouter as originalUseRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useNavigationContext } from '@/app/context/NavigationProvider'

type TRouterInstanceMethodProps = (
  url: string,
  as?: string,
  options?: {}
) => void

const useRouter = () => {
  const router = originalUseRouter()
  const { isNavigating, setIsNavigating } = useNavigationContext()
  const [targetUrl, setTargetUrl] = useState<string | null>(null)
  const [method, setMethod] = useState<'push' | 'replace' | 'refresh' | null>(
    null
  )

  useEffect(() => {
    if (isNavigating && targetUrl) {
      const timer = setTimeout(() => {
        if (method === 'push') {
          router.push(targetUrl)
        } else if (method === 'replace') {
          router.replace(targetUrl)
        }
        setIsNavigating(false)
        console.log('Delayed things happening???')
      }, 520) // 520ms delay

      return () => {
        clearTimeout(timer)
      }
    }
  }, [isNavigating, router, targetUrl, method, setIsNavigating])

  const push: TRouterInstanceMethodProps = (url, as, options) => {
    setTargetUrl(url)
    setMethod('push')
    setIsNavigating(true)
  }

  const replace: TRouterInstanceMethodProps = (url, as, options) => {
    setTargetUrl(url)
    setMethod('replace')
    setIsNavigating(true)
  }

  const refresh = () => {
    router.refresh()
  }

  return { ...router, push, replace, refresh }
}

export { useRouter }

/* ************************************* */

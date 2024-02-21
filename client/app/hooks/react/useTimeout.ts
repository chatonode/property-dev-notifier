// import { useEffect, useRef } from 'react'

// const useTimeout = (callback: () => void, delay: number) => {
//   const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

//   useEffect(() => {
//     timeoutRef.current = setTimeout(callback, delay)

//     return () => {
//       clearTimeout(timeoutRef.current)
//     }
//   }, [callback, delay])

//   const resetTimeout = () => {
//     clearTimeout(timeoutRef.current)
//     // timeoutRef.current = setTimeout(newCallback, newDelay)
//   }

//   return resetTimeout
// }

// export default useTimeout

import { useEffect, useRef } from 'react'

const useTimeout = (callback: () => void, delay: number) => {
  const timeoutIdRef = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => {
    timeoutIdRef.current = setTimeout(callback, delay)

    return () => {
      clearTimeout(timeoutIdRef.current)
    }
  }, [callback, delay])

  return [
    timeoutIdRef.current, // timeoutId
    () => clearTimeout(timeoutIdRef.current), // clearTimeout
  ]
}

export default useTimeout

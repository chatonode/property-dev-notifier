// useQueryString.ts
import { useSearchParams } from 'next/navigation'
import { useCallback } from 'react'

const useQueryString = () => {
  const searchParams = useSearchParams()

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return createQueryString
}

export default useQueryString

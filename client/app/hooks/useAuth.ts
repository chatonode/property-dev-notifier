import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'
// import { useRouter } from '@/hooks/next/useRouter'

type TAuthenticated = boolean

type TUseAuthReturn = [TAuthenticated, Dispatch<SetStateAction<TAuthenticated>>]

const useAuth = (isAuthenticatedInitially: TAuthenticated): TUseAuthReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    isAuthenticatedInitially
  )
  const router = useRouter()

  useEffect(() => {
    let isMounted = false
    if (!isMounted && isAuthenticated) {
      router.refresh()
    }

    isMounted = true
  }, [isAuthenticated])

  return [isAuthenticated, setIsAuthenticated]
}

export default useAuth

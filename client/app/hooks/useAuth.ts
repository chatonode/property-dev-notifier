// useAuth.ts
import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/navigation'

type TAuthenticated = boolean

type TUseAuthReturn = [TAuthenticated, Dispatch<SetStateAction<TAuthenticated>>]

const useAuth = (isAuthenticatedInitially: TAuthenticated): TUseAuthReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    isAuthenticatedInitially
  )
  const router = useRouter()

  useEffect(() => {
    if (isAuthenticated) {
      router.refresh()
    }
  }, [isAuthenticated])

  return [isAuthenticated, setIsAuthenticated]
}

export default useAuth

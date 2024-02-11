'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

type TNavigationProviderProps = {
  children: ReactNode
}

type TNavigationContextType = [
  boolean, // isNavigating
  Dispatch<SetStateAction<boolean>> // setIsNavigating
]

const DEFAULT_NAVIGATION_CONTEXT: TNavigationContextType = [
  false,
  () => {}, // A dummy function
]

const NavigationContext = createContext<TNavigationContextType>(
  DEFAULT_NAVIGATION_CONTEXT
)

export const useNavigationContext = () => {
  return useContext(NavigationContext)
}

export const NavigationProvider = ({ children }: TNavigationProviderProps) => {
  const [isNavigating, setIsNavigating] = useState<boolean>(false)

  useEffect(() => {
    // Cleanup logic or any other actions during unmounting
    return () => {
      console.log('Unmounting styling or cleanup')
    }
  }, [])

  const value: TNavigationContextType = [isNavigating, setIsNavigating]

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  )
}

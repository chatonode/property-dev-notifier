import { ReactNode, useCallback, useContext } from 'react'

import OriginalLink from 'next/link'

import { useRouter } from '@/hooks/next/useRouter'

type TLinkProps = {
  href: string
  as?: string
  className?: string
  children: ReactNode
}

const Link = ({ href, as, className, children }: TLinkProps) => {
  //   const [_, setIsNavigating] = useNavigationContext();
  const router = useRouter()

  const handleClick = useCallback(() => {
    return router.push(href, as)
  }, [])

  return (
    <OriginalLink
      href={href}
      as={as}
      passHref
      onClick={handleClick}
      className={className}
    >
      {children}
    </OriginalLink>
  )
}

export default Link

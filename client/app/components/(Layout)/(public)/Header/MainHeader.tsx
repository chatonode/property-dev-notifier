'use client'

import { memo, useCallback, useEffect, useState, useTransition } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import classes from './MainHeader.module.css'

import { TCurrentUser } from '@/app/api/(server)/auth/get-current-user'
import LogoContainer from './LogoContainer'
import HamburgerSVG from '../../../UI/SVG/Layout/common/HamburgerSVG'
import Headbar from './Headbar/Headbar'
import { ERoute } from '@/app/types/enums'

type TMainHeaderProps = {
  currentUser: TCurrentUser
  // onClick: () => void
}

const MainHeader = (props: TMainHeaderProps) => {
  const [headbarExpanded, setHeadbarExpanded] = useState(false)

  const toggleHeadbarHandler = useCallback(() => {
    setHeadbarExpanded((prevHeadbarState) => !prevHeadbarState)
  }, [])

  const collapseHeadbarHandler = useCallback(() => {
    setHeadbarExpanded(false)
  }, [])

  return (
    <>
      <header className="header">
        <LogoContainer />
        <Headbar
          currentUser={props.currentUser}
          expanded={headbarExpanded}
          onCollapse={collapseHeadbarHandler}
        />
        <HamburgerSVG onClick={toggleHeadbarHandler} />
      </header>
    </>
  )
}

export default memo(MainHeader)

{
  /* <Link
href={ERoute.GoodBye}
className={`${classes.logout}${
  isPending || isFetching ? ` ${classes.sending}` : ''
}`}
onClick={
  !isPending && !isFetching ? sendLogoutRequest : undefined
}
>
<LogoutIcon />
</Link> */
}
{
  /* {isPending || isFetching ? 'Logging out...' : <LogoutIcon />} */
}

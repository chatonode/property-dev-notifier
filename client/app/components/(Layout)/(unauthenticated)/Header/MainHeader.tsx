'use client'

import { memo, useCallback, useEffect, useState, useTransition } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import classes from './MainHeader.module.css'

import { TCurrentUser } from '@/app/api/(users)/get-current-user'
import LogoContainer from './LogoContainer'
import HamburgerSVG from '../../../UI/SVG/Layout/Sidebar/HamburgerSVG'
import Headbar from './Headbar/Headbar'
import { ERoute } from '@/app/types/enums'

type TMainHeaderProps = {
  currentUser: TCurrentUser
  // onClick: () => void
}

const MainHeader = (props: TMainHeaderProps) => {
  const [headbarCollapsed, toggleHeadbarCollapsed] = useState(false)

  const toggleHeadbarHandler = useCallback(() => {
    toggleHeadbarCollapsed((prevHeadbarState) => !prevHeadbarState)
  }, [])

  const closeHeadbarHandler = useCallback(() => {
    toggleHeadbarCollapsed(false)
  }, [])

  return (
    <>
      <header className="header">
        <LogoContainer />
        <Headbar
          currentUser={props.currentUser}
          collapsed={headbarCollapsed}
          onClose={closeHeadbarHandler}
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

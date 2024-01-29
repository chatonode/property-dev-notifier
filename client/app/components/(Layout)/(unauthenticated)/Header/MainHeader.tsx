'use client'

import { memo, useEffect, useState, useTransition } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import classes from './MainHeader.module.css'

import { TCurrentUser } from '@/app/api/(users)/get-current-user'
import LogoContainer from './LogoContainer'
import HamburgerSVG from '../../../UI/SVG/Layout/Sidebar/HamburgerSVG'
import Headbar from './Headbar/Headbar'
import { ERoute } from '@/app/types/enums'

type TMainHeaderProps = {
  // currentUser: TCurrentUser
  // onClick: () => void
}

const MainHeader = (props: TMainHeaderProps) => {
  const [headbarCollapsed, toggleHeadbarCollapsed] = useState(false)

  const toggleHeadbarHandler = () => {
    toggleHeadbarCollapsed((prevHeadbarState) => !prevHeadbarState)
  }

  return (
    <>
      <header className="header">
        <LogoContainer />
        <Headbar collapsed={headbarCollapsed} />
        <div className={classes['hamburger-container']}>
          <HamburgerSVG onClick={toggleHeadbarHandler} />
        </div>
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

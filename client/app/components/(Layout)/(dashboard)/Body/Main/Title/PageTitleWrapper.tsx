import { ReactNode } from 'react'

import classes from './PageTitleWrapper.module.css'
import UserInfoContainer from './UserInfoContainer'
import { TCurrentUser } from '@/app/api/(server)/auth/get-current-user'

type TPageTitleWrapperProps = {
  children: ReactNode
  currentUser: TCurrentUser
}

const PageTitleWrapper = (props: TPageTitleWrapperProps) => {
  return (
    <div className={classes.wrapper}>
      <h2>{props.children}</h2>
      {!!props.currentUser && (
        <UserInfoContainer currentUser={props.currentUser} />
      )}
    </div>
  )
}

export default PageTitleWrapper

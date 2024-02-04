import { memo } from 'react'

import { TCurrentUser } from '@/app/api/(users)/get-current-user'

import classes from './UserInfoContainer.module.css'
import UserInfo from '@/app/components/UI/User/UserInfo'

type TUserInfoContainerProps = {
  currentUser: TCurrentUser
}

const UserInfoContainer = (props: TUserInfoContainerProps) => {
  return (
    <div className={classes.container}>
      <UserInfo currentUser={props.currentUser} />
    </div>
  )
}

export default memo(UserInfoContainer)

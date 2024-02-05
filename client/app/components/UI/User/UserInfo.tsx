import { memo } from 'react'

import { TCurrentUser } from '@/app/api/(users)/get-current-user'

import classes from './UserInfo.module.css'
import UserAvatarIcon from '@/app/components/UI/Icon/common/UserAvatarIcon'

type TUserInfoProps = {
  currentUser: TCurrentUser
}

const UserInfo = (props: TUserInfoProps) => {
  return (
    <>
      <UserAvatarIcon />
      <div className={classes['user-info']}>
        <p>Logged in with</p>
        <span>{props.currentUser.email}</span>
      </div>
    </>
  )
}

export default memo(UserInfo)

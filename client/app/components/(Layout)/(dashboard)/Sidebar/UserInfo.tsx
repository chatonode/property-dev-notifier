import { memo } from 'react'

import { TCurrentUser } from '@/app/api/(users)/get-current-user'

import classes from './UserInfo.module.css'
import UserAvatarSVG from '@/app/components/UI/SVG/Layout/Sidebar/UserAvatarSVG'

type TUserInfoProps = {
  currentUser: TCurrentUser
}

const UserInfo = (props: TUserInfoProps) => {
  return (
    <div className={classes.container}>
      <UserAvatarSVG />
      <div className={classes['user-info']}>
        <p>Logged in with</p>
        <span>{props.currentUser.email}</span>
      </div>
    </div>
  )
}

export default memo(UserInfo)

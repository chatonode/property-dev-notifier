import { memo } from 'react'

import MenuIconWrapper from '../wrapper/MenuIconWrapper'
import UserAvatarSVG from '@/components/UI/SVG/User/UserAvatarSVG'

const UserAvatarIcon = () => {
  return (
    <MenuIconWrapper>
      <UserAvatarSVG />
    </MenuIconWrapper>
  )
}

export default memo(UserAvatarIcon)

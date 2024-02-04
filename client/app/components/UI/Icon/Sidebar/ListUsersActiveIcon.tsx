import { memo } from 'react'
import MenuIconWrapper from '../wrapper/MenuIconWrapper'
import ListUsersActiveSVG from '@/components/UI/SVG/Layout/Sidebar/Navigation/ListUsersActiveSVG'

const ListUsersActiveIcon = () => {
  return (
    <MenuIconWrapper>
      <ListUsersActiveSVG />
    </MenuIconWrapper>
  )
}

export default memo(ListUsersActiveIcon)

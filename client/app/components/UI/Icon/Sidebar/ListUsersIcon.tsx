import { memo } from 'react'
import MenuIconWrapper from '../wrapper/MenuIconWrapper'
import ListUsersSVG from '@/components/UI/SVG/Layout/Sidebar/Navigation/ListUsersSVG'

const ListUsersIcon = () => {
  return (
    <MenuIconWrapper>
      <ListUsersSVG />
    </MenuIconWrapper>
  )
}

export default memo(ListUsersIcon)

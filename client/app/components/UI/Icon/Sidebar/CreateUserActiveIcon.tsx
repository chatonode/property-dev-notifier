import { memo } from 'react'
import MenuIconWrapper from '../wrapper/MenuIconWrapper'
import CreateUserActiveSVG from '@/components/UI/SVG/Layout/Sidebar/Navigation/CreateUserActiveSVG'

const CreateUserActiveIcon = () => {
  return (
    <MenuIconWrapper>
      <CreateUserActiveSVG />
    </MenuIconWrapper>
  )
}

export default memo(CreateUserActiveIcon)

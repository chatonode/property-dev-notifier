import { memo } from 'react'
import MenuIconWrapper from '../wrapper/MenuIconWrapper'
import CreateUserSVG from '@/components/UI/SVG/Layout/Sidebar/Navigation/CreateUserSVG'

const CreateUserIcon = () => {
  return (
    <MenuIconWrapper>
        <CreateUserSVG />
    </MenuIconWrapper>
  )
}

export default memo(CreateUserIcon)

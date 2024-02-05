import { memo } from 'react'
import MenuIconWrapper from '../wrapper/MenuIconWrapper'
import DashboardSVG from '@/components/UI/SVG/Layout/Sidebar/Navigation/DashboardSVG'

const DashboardIcon = () => {
  return (
    <MenuIconWrapper>
      <DashboardSVG />
    </MenuIconWrapper>
  )
}

export default memo(DashboardIcon)

import { memo } from 'react'
import MenuIconWrapper from '../wrapper/MenuIconWrapper'
import DashboardActiveSVG from '@/components/UI/SVG/Layout/Sidebar/Navigation/DashboardActiveSVG'

const DashboardActiveIcon = () => {
  return (
    <MenuIconWrapper>
      <DashboardActiveSVG />
    </MenuIconWrapper>
  )
}

export default memo(DashboardActiveIcon)

import { memo } from 'react'
import MenuIconWrapper from '../wrapper/MenuIconWrapper'
import SendNotificationActiveSVG from '@/components/UI/SVG/Layout/Sidebar/Navigation/SendNotificationActiveSVG'

const SendNotificationActiveIcon = () => {
  return (
    <MenuIconWrapper>
      <SendNotificationActiveSVG />
    </MenuIconWrapper>
  )
}

export default memo(SendNotificationActiveIcon)

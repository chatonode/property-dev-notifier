import { memo } from 'react'
import MenuIconWrapper from '../wrapper/MenuIconWrapper'
import SendNotificationSVG from '@/components/UI/SVG/Layout/Sidebar/Navigation/SendNotificationSVG'

const SendNotificationIcon = () => {
  return (
    <MenuIconWrapper>
      <SendNotificationSVG />
    </MenuIconWrapper>
  )
}

export default memo(SendNotificationIcon)

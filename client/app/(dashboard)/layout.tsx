import { PropsWithChildren } from 'react'
import { Metadata } from 'next'
import { permanentRedirect } from 'next/navigation'

import getCurrentUser from '@/api/(users)/get-current-user'
import SidebarContainer from '@/components/(Layout)/(authenticated)/Sidebar/SidebarContainer'
import { ERoute } from '@/types/enums'

type TDashboardLayoutProps = PropsWithChildren

export const metadata: Metadata = {
  title: 'Property Dev Notifier | Dashboard',
  description:
    'Create list of property developers and send them your own notifications!',
}

const DashboardLayout = async (props: TDashboardLayoutProps) => {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return permanentRedirect(ERoute.Login)
  }

  return (
    <div className="layout-dashboard">
      <SidebarContainer />
      <div className="root">{props.children}</div>
    </div>
  )
}

export default DashboardLayout

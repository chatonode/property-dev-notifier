import { PropsWithChildren } from 'react'
import { Metadata } from 'next'

import getCurrentUser from '@/api/(users)/get-current-user'
import SidebarContainer from '@/components/(Layout)/(authenticated)/Sidebar/SidebarContainer'

type TInternalLayoutProps = PropsWithChildren

export const metadata: Metadata = {
  title: 'Property Dev Notifier | Dashboard',
  description:
    'Create list of property developers and send them your own notifications!',
}

const InternalLayout = async (props: TInternalLayoutProps) => {
  const currentUser = await getCurrentUser()

  return (
    <>
      {!!currentUser && <SidebarContainer />}
      <div className="root">{props.children}</div>
    </>
  )
}

export default InternalLayout

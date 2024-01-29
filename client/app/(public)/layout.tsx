import { PropsWithChildren } from 'react'
import { Metadata } from 'next'

import getCurrentUser from '@/api/(users)/get-current-user'
import SidebarContainer from '@/components/(Layout)/(authenticated)/Sidebar/SidebarContainer'
import MainFooter from '@/components/(Layout)/Footer/MainFooter'
import MainHeader from '@/components/(Layout)/(unauthenticated)/Header/MainHeader'

type TInternalLayoutProps = PropsWithChildren

export const metadata: Metadata = {
  title: 'Property Dev Notifier',
  description:
    'Create list of property developers and send them your own notifications!',
}

const PublicLayout = async (props: TInternalLayoutProps) => {
  const currentUser = await getCurrentUser()

  return (
    <>
      <MainHeader />
      <div className="root">{props.children}</div>
      <MainFooter />
    </>
  )
}

export default PublicLayout

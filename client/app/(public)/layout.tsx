import { PropsWithChildren } from 'react'
import { Metadata } from 'next'

import getCurrentUser from '@/app/api/(server)/auth/get-current-user'
import MainFooter from '@/app/components/(Layout)/(public)/Footer/MainFooter'
import MainHeader from '@/components/(Layout)/(public)/Header/MainHeader'

type TInternalLayoutProps = PropsWithChildren

export const metadata: Metadata = {
  title: 'Property Dev Notifier',
  description:
    'Create list of property developers and send them your own notifications!',
}

const PublicLayout = async (props: TInternalLayoutProps) => {
  const currentUser = await getCurrentUser()

  return (
    <div className="layout-public">
      <MainHeader currentUser={currentUser} />
      <div className="root">{props.children}</div>
      <MainFooter />
    </div>
  )
}

export default PublicLayout

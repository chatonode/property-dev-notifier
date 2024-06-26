import { Suspense } from 'react'

import getPropertyDevelopers from '@/app/api/(server)/users/property-developers/list'

import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'
import PageTitleWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'

import NotificationMultiForm from '@/app/components/(Notification)/NotificationMultiForm'
import getCurrentUser from '@/app/api/(server)/auth/get-current-user'

const CreateNotificationTemplate = async () => {
  // const propertyDevelopers = await getPropertyDevelopers()
  const currentUser = await getCurrentUser()

  return (
    <DashboardMainWrapper>
      <PageTitleWrapper currentUser={currentUser}>
        Create Notification Template
      </PageTitleWrapper>
      <DashboardSectionWrapper>
        <Suspense fallback={<p>Loading...</p>}>
          <NotificationMultiForm
            propertyDevelopers={await getPropertyDevelopers()}
          />
        </Suspense>
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default CreateNotificationTemplate

export const dynamic = 'force-dynamic'

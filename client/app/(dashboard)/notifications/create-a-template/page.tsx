import { Suspense } from 'react'

import getPropertyDevelopers from '@/app/api/(users)/property-developers/list'

import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'
import PageTitleWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'

import NotificationMultiForm from '@/app/components/(Notification)/NotificationMultiForm'

const CreateNotificationTemplate = async () => {
  // const propertyDevelopers = await getPropertyDevelopers()

  return (
    <DashboardMainWrapper>
      <PageTitleWrapper>Create Notification Template</PageTitleWrapper>
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

import { Suspense } from 'react'
import NotificationMultiForm from '@/app/components/(Notification)/NotificationMultiForm'

import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'
import getPropertyDevelopers from '@/api/(users)/property-developers/get'

const CreateNotificationTemplate = async () => {
  // const propertyDevelopers = await getPropertyDevelopers()

  return (
    <MainSectionWrapper>
      <h2>Create Notification Template</h2>

      <Suspense fallback={<p>Loading...</p>}>
        <NotificationMultiForm
          propertyDevelopers={await getPropertyDevelopers()}
        />
      </Suspense>
    </MainSectionWrapper>
  )
}

export default CreateNotificationTemplate

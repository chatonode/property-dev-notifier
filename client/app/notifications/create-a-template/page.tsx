import { Suspense } from 'react'
import NotificationMultiForm from '@/app/components/(Notification)/NotificationMultiForm'

import getPropertyDevelopers from '@/api/(users)/property-developers/get'

const CreateNotificationTemplate = async () => {
  // const propertyDevelopers = await getPropertyDevelopers()

  return (
    <main>
      <section>
        <h2>Create Notification Template</h2>

        <Suspense fallback={<p>loading...</p>}>
          <NotificationMultiForm
            propertyDevelopers={await getPropertyDevelopers()}
          />
        </Suspense>
      </section>
    </main>
  )
}

export default CreateNotificationTemplate

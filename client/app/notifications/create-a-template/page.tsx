import { buildServerSender } from '@/app/api/(axios)/server/build-server-sender'
import NotificationMultiForm from '@/app/components/(Notification)/NotificationMultiForm'
import AuthRequiredError from '@/app/lib/errors/AuthRequiredError'
import { TPropertyDevelopersList } from '@/app/types/types'

const getPropertyDevelopers = async () => {
  const axiosSender = buildServerSender()

  try {
    const response = await axiosSender.get('/api/users/property-developers')

    if (response.status === 401) {
      console.log('Can i reach here?')
      throw new AuthRequiredError(response.data.errors[0].message)
    }

    const { propertyDevelopers } = (await response.data) as {
      propertyDevelopers: TPropertyDevelopersList
    }

    return propertyDevelopers
  } catch (error: any) {
    console.error(
      'CreateNotificationTemplate error response: ',
      error.name,
      '(((((((---)))))))',
      error.message,
      '(((((((---)))))))',
      error.detail
    )
    throw error
  }
}

const CreateNotificationTemplate = async () => {
  const propertyDevelopers = await getPropertyDevelopers()

  return (
    <main>
      <section>
        <h2>Create Notification Template</h2>

        <NotificationMultiForm propertyDevelopers={propertyDevelopers} />
      </section>
    </main>
  )
}

export default CreateNotificationTemplate

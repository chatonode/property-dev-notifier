import { buildServerSender } from '@/app/api/(axios)/server/build-server-sender'
import NotificationMultiForm from '@/app/components/(Notification)/NotificationMultiForm'
import { TPropertyDevelopersList } from '@/app/types/types'

const getPropertyDevelopers = async () => {
  const axiosSender = buildServerSender()

  const response = await axiosSender.get('/api/users/property-developers')

  if (response.status === 401) {
    throw new Error('Unauthorized User!')
  }

  const { propertyDevelopers } = (await response.data) as {
    propertyDevelopers: TPropertyDevelopersList
  }

  return propertyDevelopers
}

const PropertyDevelopers = async () => {
  const propertyDevelopers = await getPropertyDevelopers()

  return (
    <main>
      <section>
        <h2>Property Developers</h2>

        <NotificationMultiForm propertyDevelopers={propertyDevelopers} />
      </section>
    </main>
  )
}

export default PropertyDevelopers

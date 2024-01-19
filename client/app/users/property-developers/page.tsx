import { buildServerSender } from '@/app/api/(axios)/server/build-server-sender'
import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'
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
    <MainSectionWrapper>
      <h2>Property Developers</h2>

      <p>TODO</p>
    </MainSectionWrapper>
  )
}

export default PropertyDevelopers

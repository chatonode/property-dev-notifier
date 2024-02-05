// import { cache } from 'react'
import { buildServerSender } from '@/api/(axios)/server/build-server-sender'
import { TPropertyDevelopersList } from '@/types/types'
import AuthRequiredError from '@/lib/errors/AuthRequiredError'
import { permanentRedirect, redirect, useRouter } from 'next/navigation'
import { ERoute } from '@/app/types/enums'

const getPropertyDevelopers = async () => {
  const axiosSender = buildServerSender()

  try {
    const response = await axiosSender.get('/api/users/property-developers')

    if (response.status === 401) {
      console.log('Can i reach here?')
      //   throw new AuthRequiredError(response.data.errors[0].message)
    //   return redirect(ERoute.Unauthorized)
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

export default getPropertyDevelopers

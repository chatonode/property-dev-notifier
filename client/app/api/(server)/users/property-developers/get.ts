// import { cache } from 'react'
import { buildServerSender } from '@/api/(axios)/server/build-server-sender'
import { TPropertyDeveloper } from '@/types/types'
import AuthRequiredError from '@/lib/errors/AuthRequiredError'
import { permanentRedirect, redirect, useRouter } from 'next/navigation'
import { ERoute } from '@/app/types/enums'
import logUserOutFromServer from '../../auth/logout'

const getPropertyDeveloper = async (id: string) => {
  const axiosSender = buildServerSender()

  try {
    const response = await axiosSender.get(
      `/api/users/property-developers/${id}`
    )

    if (response.status === 401) {
      console.log('Can i reach here?')
      //   throw new AuthRequiredError(response.data.errors[0].message)
      await logUserOutFromServer()
      return redirect(ERoute.Unauthorized)
    }

    if (response.status === 404) {
        // TODO: Handle 404 case of this page
        // throw new NotFoundError()
    }

    const { propertyDeveloper } = (await response.data) as {
      propertyDeveloper: TPropertyDeveloper
    }

    return propertyDeveloper
  } catch (error) {
    throw error
  }
}

export default getPropertyDeveloper

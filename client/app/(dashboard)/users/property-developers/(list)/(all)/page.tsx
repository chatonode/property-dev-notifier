import { Suspense } from 'react'

import getCurrentUser from '@/api/(server)/auth/get-current-user'
import getPropertyDevelopers from '@/api/(server)/users/property-developers/list'
import { TPropertyDevelopersList } from '@/types/types'

import PropertyDeveloperItem from '@/app/components/(Users)/PropertyDevelopers/CRUD/list/body/item/PropertyDeveloperItem'

const PropertyDevelopers = async () => {
  // const currentUser = await getCurrentUser()
  const propertyDevelopers = await getPropertyDevelopers()

  return (
    <>
      {propertyDevelopers.map((developer) => (
        <PropertyDeveloperItem
          key={developer.id}
          developer={developer}
          isExpanded={false}
          // onClick={itemClickHandler}
        />
      ))}
    </>
  )
}

export default PropertyDevelopers

export const dynamic = 'force-dynamic'

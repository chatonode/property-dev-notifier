import { TPropertyDevelopersList } from '@/app/types/types'

import getPropertyDevelopers from '@/app/api/(users)/property-developers/list'

import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'
import PropertyDevelopersContainer from '@/app/components/(Users)/PropertyDevelopers/CRUD/list/PropertyDevelopersContainer'
import { Suspense } from 'react'

const PropertyDevelopers = async () => {
  return (
    <MainSectionWrapper>
      <h2>Property Developers</h2>

      <Suspense fallback={<p>Loading...</p>}>
        <PropertyDevelopersContainer
          propertyDevelopers={await getPropertyDevelopers()}
        />
      </Suspense>
    </MainSectionWrapper>
  )
}

export default PropertyDevelopers

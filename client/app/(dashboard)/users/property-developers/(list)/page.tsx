import { Suspense } from 'react'

import getPropertyDevelopers from '@/app/api/(users)/property-developers/list'
import { TPropertyDevelopersList } from '@/app/types/types'

import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'
import PageTitleWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'

import PropertyDevelopersContainer from '@/app/components/(Users)/PropertyDevelopers/CRUD/list/PropertyDevelopersContainer'

const PropertyDevelopers = async () => {
  return (
    <DashboardMainWrapper>
      <PageTitleWrapper>Property Developers</PageTitleWrapper>
      <DashboardSectionWrapper>
        <Suspense fallback={<p>Loading...</p>}>
          <PropertyDevelopersContainer
            propertyDevelopers={await getPropertyDevelopers()}
          />
        </Suspense>
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default PropertyDevelopers

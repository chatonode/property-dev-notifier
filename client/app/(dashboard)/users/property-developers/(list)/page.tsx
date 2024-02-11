import { Suspense } from 'react'

import getCurrentUser from '@/app/api/(server)/auth/get-current-user'
import getPropertyDevelopers from '@/app/api/(server)/users/property-developers/list'
import { TPropertyDevelopersList } from '@/app/types/types'

import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'
import PageTitleWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'

import PropertyDevelopersContainer from '@/app/components/(Users)/PropertyDevelopers/CRUD/list/PropertyDevelopersContainer'

const PropertyDevelopers = async () => {
  const currentUser = await getCurrentUser()
  const propertyDevelopers = await getPropertyDevelopers()

  return (
    <DashboardMainWrapper>
      <PageTitleWrapper currentUser={currentUser}>
        Property Developers
      </PageTitleWrapper>
      <DashboardSectionWrapper>
        <Suspense fallback={<p>Loading...</p>}>
          <PropertyDevelopersContainer
            propertyDevelopers={propertyDevelopers}
          />
        </Suspense>
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default PropertyDevelopers

export const dynamic = 'force-dynamic'

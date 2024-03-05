import { ReactNode, Suspense } from 'react'

import getCurrentUser from '@/api/(server)/auth/get-current-user'
import getPropertyDevelopers from '@/api/(server)/users/property-developers/list'
import { TPropertyDevelopersList } from '@/types/types'

import DashboardMainWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'
import PageTitleWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'

import PropertyDevelopersContainer from '@/components/(Users)/PropertyDevelopers/CRUD/list/PropertyDevelopersContainer'
import PropertyDeveloperItem from '@/app/components/(Users)/PropertyDevelopers/CRUD/list/PropertyDeveloperItem'
import NoDevelopersFound from '@/app/components/(Users)/PropertyDevelopers/CRUD/list/body/NoDevelopersFound'

type TPropertyDevelopersLayoutProps = {
  children: ReactNode
}

const PropertyDevelopersLayout = async ({
  children,
}: TPropertyDevelopersLayoutProps) => {
  const currentUser = await getCurrentUser()
  const propertyDevelopers = await getPropertyDevelopers()

  return (
    <DashboardMainWrapper>
      <PageTitleWrapper currentUser={currentUser}>
        Property Developers
      </PageTitleWrapper>
      <DashboardSectionWrapper>
        <PropertyDevelopersContainer propertyDevelopers={propertyDevelopers}>
          {children}
        </PropertyDevelopersContainer>
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default PropertyDevelopersLayout

export const dynamic = 'force-dynamic'

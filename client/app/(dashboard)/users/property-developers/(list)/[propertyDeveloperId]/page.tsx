import { Suspense } from 'react'

import getCurrentUser from '@/api/(server)/auth/get-current-user'
import getPropertyDeveloper from '@/api/(server)/users/property-developers/get'
import getPropertyDevelopers from '@/api/(server)/users/property-developers/list'
import { TPropertyDevelopersList } from '@/types/types'

import DashboardMainWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'
import PageTitleWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'

import PropertyDevelopersContainer from '@/components/(Users)/PropertyDevelopers/CRUD/list/PropertyDevelopersContainer'
import PropertyDeveloperItem from '@/components/(Users)/PropertyDevelopers/CRUD/list/PropertyDeveloperItem'

type TViewPropertyDeveloperProps = {
  params: {
    propertyDeveloperId: string
  }
}

const ViewPropertyDeveloper = async ({
  params,
}: TViewPropertyDeveloperProps) => {
  // const currentUser = await getCurrentUser()

  const propertyDeveloperId = params.propertyDeveloperId
  const propertyDeveloper = await getPropertyDeveloper(propertyDeveloperId)

  return (
    <>
      <PropertyDeveloperItem developer={propertyDeveloper} isExpanded={true} />
    </>
  )
}

export default ViewPropertyDeveloper

export const dynamic = 'force-dynamic'
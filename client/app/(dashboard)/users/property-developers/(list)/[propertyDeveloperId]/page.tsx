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
import BackdropPortal from '@/app/components/UI/Overlay/BackdropPortal'

type TViewPropertyDeveloperProps = {
  params: {
    propertyDeveloperId: string
  }
}

const ViewPropertyDeveloper = async ({
  params,
}: TViewPropertyDeveloperProps) => {
  // const currentUser = await getCurrentUser()

  const propertyDevelopers = await getPropertyDevelopers()
  const propertyDeveloperId = params.propertyDeveloperId
  const propertyDeveloper = await getPropertyDeveloper(propertyDeveloperId)

  return (
    <>
      {propertyDevelopers.map((developer) => {
        if (developer.id === propertyDeveloper.id) {
          return (
            <BackdropPortal>
              <PropertyDeveloperItem
                key={developer.id}
                developer={developer}
                isExpanded={true}
                // onClick={itemClickHandler}
              />
            </BackdropPortal>
          )
        }

        return (
          <PropertyDeveloperItem
            key={developer.id}
            developer={developer}
            isExpanded={false}
            // onClick={itemClickHandler}
          />
        )
      })}
    </>
  )
}

export default ViewPropertyDeveloper

export const dynamic = 'force-dynamic'

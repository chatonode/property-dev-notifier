import { Suspense } from 'react'

import getCurrentUser from '@/api/(server)/auth/get-current-user'
import getPropertyDeveloper from '@/api/(server)/users/property-developers/get'
import getPropertyDevelopers from '@/api/(server)/users/property-developers/list'
import { TPropertyDevelopersList } from '@/types/types'

import DashboardMainWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'
import PageTitleWrapper from '@/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'

import PropertyDevelopersContainer from '@/app/components/(Users)/PropertyDevelopers/CRUD/list/layout/PropertyDevelopersLayoutContainer'
import PropertyDeveloperItem from '@/app/components/(Users)/PropertyDevelopers/CRUD/list/body/item/PropertyDeveloperItem'
import BackdropPortal from '@/app/components/UI/Overlay/BackdropPortal'

type TEditPropertyDeveloperProps = {
  params: {
    propertyDeveloperId: string
  }
}

const EditPropertyDeveloper = async ({
  params,
}: TEditPropertyDeveloperProps) => {
  // const currentUser = await getCurrentUser()

  const propertyDevelopers = await getPropertyDevelopers()
  const propertyDeveloperId = params.propertyDeveloperId
  const propertyDeveloper = await getPropertyDeveloper(propertyDeveloperId)

  return (
    <>
      {propertyDevelopers.map((developer) => {
        if (developer.id === propertyDeveloper.id) {
          return (
            // <BackdropPortal>
            <PropertyDeveloperItem
              key={developer.id}
              developer={developer}
              isExpanded={true}
              // onClick={itemClickHandler}
            />
            // </BackdropPortal>
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

export default EditPropertyDeveloper

export const dynamic = 'force-dynamic'

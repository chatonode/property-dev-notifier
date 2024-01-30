// import { TPropertyDevelopersList } from '@/app/types/types'

// import getPropertyDevelopers from '@/app/api/(users)/property-developers/get'

import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'
import PageTitleWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Title/PageTitleWrapper'

import CreatePropertyDeveloperContainer from '@/app/components/(Users)/PropertyDevelopers/CRUD/create/CreatePropertyDeveloperContainer'

const PropertyDevelopers = async () => {
  return (
    <DashboardMainWrapper>
      <PageTitleWrapper>Create a Property Developer</PageTitleWrapper>
      <DashboardSectionWrapper>
        <CreatePropertyDeveloperContainer />
        <div style={{ height: '100px' }}>dummy height div</div>
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default PropertyDevelopers

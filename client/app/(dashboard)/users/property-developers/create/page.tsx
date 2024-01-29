// import { TPropertyDevelopersList } from '@/app/types/types'

// import getPropertyDevelopers from '@/app/api/(users)/property-developers/get'

import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'

import CreatePropertyDeveloperContainer from '@/app/components/(Users)/PropertyDevelopers/CRUD/create/CreatePropertyDeveloperContainer'

const PropertyDevelopers = async () => {
  return (
    <MainSectionWrapper>
      <h2>Create a Property Developer</h2>

      <CreatePropertyDeveloperContainer />
      <div style={{height: '100px'}}></div>
    </MainSectionWrapper>
  )
}

export default PropertyDevelopers

import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'

import InternalServerErrorContainer from '@/components/(ResponsePage)/InternalServerError/InternalServerErrorContainer'

const InternalServerError = () => {
  return (
    <DashboardMainWrapper>
      <DashboardSectionWrapper>
        <InternalServerErrorContainer />
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default InternalServerError

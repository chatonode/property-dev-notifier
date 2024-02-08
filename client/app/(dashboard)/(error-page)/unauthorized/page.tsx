import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'

import UnauthorizedContainer from '@/components/(ResponsePage)/Unauthorized/UnauthorizedContainer'

const Unauthorized = () => {
  return (
    <DashboardMainWrapper>
      <DashboardSectionWrapper>
        <UnauthorizedContainer />
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default Unauthorized

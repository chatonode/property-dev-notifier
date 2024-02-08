import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'

import ForbiddenContainer from '@/components/(ResponsePage)/Forbidden/ForbiddenContainer'

const Forbidden = () => {
  return (
    <DashboardMainWrapper>
      <DashboardSectionWrapper>
        <ForbiddenContainer />
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default Forbidden

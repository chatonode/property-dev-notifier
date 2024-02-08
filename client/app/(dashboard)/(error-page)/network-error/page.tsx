import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'

import NetworkErrorContainer from '@/app/components/(ResponsePage)/NetworkError/NetworkErrorContainer'

const NetworkError = () => {
  return (
    <DashboardMainWrapper>
      <DashboardSectionWrapper>
        <NetworkErrorContainer />
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default NetworkError

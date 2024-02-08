import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'

import GenericErrorContainer from '@/components/(ResponsePage)/GenericError/GenericErrorContainer'

const GenericError = () => {
  return (
    <DashboardMainWrapper>
      <DashboardSectionWrapper>
        <GenericErrorContainer />
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

export default GenericError

import DashboardMainWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Default/DashboardMainWrapper'
import DashboardSectionWrapper from '@/app/components/(Layout)/(dashboard)/Body/Main/Section/DashboardSectionWrapper'

import RateLimitContainer from '@/components/(ResponsePage)/RateLimit/RateLimitContainer'

export default function RateLimitExceeded() {
  return (
    <DashboardMainWrapper>
      <DashboardSectionWrapper>
        <RateLimitContainer />
      </DashboardSectionWrapper>
    </DashboardMainWrapper>
  )
}

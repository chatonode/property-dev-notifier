import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'
import RateLimitContainer from '@/components/(ResponsePage)/RateLimit/RateLimitContainer'

export default function RateLimitExceeded() {
  return (
    <MainSectionWrapper>
      <RateLimitContainer />
    </MainSectionWrapper>
  )
}

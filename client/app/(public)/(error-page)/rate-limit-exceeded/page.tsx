import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import RateLimitContainer from '@/components/(ResponsePage)/RateLimit/RateLimitContainer'

export default function RateLimitExceeded() {
  return (
    <ErrorSectionWrapper>
      <RateLimitContainer />
    </ErrorSectionWrapper>
  )
}

import ErrorLayout from '@/components/UI/Error/ErrorLayout'
import RateLimitContainer from '@/components/(ResponsePage)/RateLimit/RateLimitContainer'

export default function RateLimitExceeded() {
  return (
    <ErrorLayout>
      <RateLimitContainer />
    </ErrorLayout>
  )
}

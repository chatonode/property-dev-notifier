import RateLimitContainer from '@/components/(ResponsePage)/RateLimit/RateLimitContainer'

export default function RateLimitExceeded() {
  return (
    <main className="base">
      <section className="base content">
        <RateLimitContainer />
      </section>
    </main>
  )
}

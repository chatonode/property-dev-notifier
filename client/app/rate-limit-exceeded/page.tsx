import RateLimitContainer from '@/components/(ResponsePage)/RateLimit/RateLimitContainer'

export default function RateLimitExceeded() {
  return (
    <main>
      <section className="content">
        <RateLimitContainer />
      </section>
    </main>
  )
}

import PublicMainWrapper from '@/app/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/app/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
import TestContainer from '@/components/(Test)/TestContainer'

const Test = () => {
  return (
    <PublicMainWrapper>
      <PublicSectionWrapper>
        <h2>Test!</h2>
        <TestContainer />
      </PublicSectionWrapper>
    </PublicMainWrapper>
  )
}

export default Test

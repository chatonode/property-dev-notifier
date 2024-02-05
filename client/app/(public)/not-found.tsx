import PublicMainWrapper from '@/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
import NotFoundContainer from '@/components/(ResponsePage)/NotFound/NotFoundContainer'

const NotFound = () => {
  return (
    <PublicMainWrapper>
      <PublicSectionWrapper>
        <NotFoundContainer />
      </PublicSectionWrapper>
    </PublicMainWrapper>
  )
}

export default NotFound

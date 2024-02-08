import PublicMainWrapper from '@/app/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/app/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
// import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import ForbiddenContainer from '@/components/(ResponsePage)/Forbidden/ForbiddenContainer'

const Forbidden = () => {
  return (
    <PublicMainWrapper>
      <PublicSectionWrapper>
        <ForbiddenContainer />
      </PublicSectionWrapper>
    </PublicMainWrapper>
  )
}

export default Forbidden

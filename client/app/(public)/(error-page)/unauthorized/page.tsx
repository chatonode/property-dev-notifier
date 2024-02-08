import PublicMainWrapper from '@/app/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/app/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
// import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import UnauthorizedContainer from '@/components/(ResponsePage)/Unauthorized/UnauthorizedContainer'

const Unauthorized = () => {
  return (
    <PublicMainWrapper>
      <PublicSectionWrapper>
        <UnauthorizedContainer />
      </PublicSectionWrapper>
    </PublicMainWrapper>
  )
}

export default Unauthorized

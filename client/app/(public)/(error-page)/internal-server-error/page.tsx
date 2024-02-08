import PublicMainWrapper from '@/app/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/app/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
// import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import InternalServerErrorContainer from '@/components/(ResponsePage)/InternalServerError/InternalServerErrorContainer'

const InternalServerError = () => {
  return (
    <PublicMainWrapper>
      <PublicSectionWrapper>
        <InternalServerErrorContainer />
      </PublicSectionWrapper>
    </PublicMainWrapper>
  )
}

export default InternalServerError

import PublicMainWrapper from '@/app/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/app/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
// import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import GenericErrorContainer from '@/components/(ResponsePage)/GenericError/GenericErrorContainer'

const GenericError = () => {
  return (
    <PublicMainWrapper>
      <PublicSectionWrapper>
        <GenericErrorContainer />
      </PublicSectionWrapper>
    </PublicMainWrapper>
  )
}

export default GenericError

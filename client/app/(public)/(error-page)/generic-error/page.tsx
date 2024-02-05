import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import GenericErrorContainer from '@/components/(ResponsePage)/GenericError/GenericErrorContainer'

const GenericError = () => {
  return (
    <ErrorSectionWrapper>
      <GenericErrorContainer />
    </ErrorSectionWrapper>
  )
}

export default GenericError

import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import InternalServerErrorContainer from '@/components/(ResponsePage)/InternalServerError/InternalServerErrorContainer'

const InternalServerError = () => {
  return (
    <ErrorSectionWrapper>
      <InternalServerErrorContainer />
    </ErrorSectionWrapper>
  )
}

export default InternalServerError

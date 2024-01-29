import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import UnauthorizedContainer from '@/components/(ResponsePage)/Unauthorized/UnauthorizedContainer'

const Unauthorized = () => {
  return (
    <ErrorSectionWrapper>
      <UnauthorizedContainer />
    </ErrorSectionWrapper>
  )
}

export default Unauthorized

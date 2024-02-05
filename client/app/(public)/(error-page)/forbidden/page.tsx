import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import ForbiddenContainer from '@/components/(ResponsePage)/Forbidden/ForbiddenContainer'

const Forbidden = () => {
  return (
    <ErrorSectionWrapper>
      <ForbiddenContainer />
    </ErrorSectionWrapper>
  )
}

export default Forbidden

import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import NetworkErrorContainer from '@/app/components/(ResponsePage)/NetworkError/NetworkErrorContainer'

const NetworkError = () => {
  return (
    <ErrorSectionWrapper>
      <NetworkErrorContainer />
    </ErrorSectionWrapper>
  )
}

export default NetworkError

import ErrorLayout from '@/components/UI/Error/ErrorLayout'
import NetworkErrorContainer from '@/app/components/(ResponsePage)/NetworkError/NetworkErrorContainer'

const NetworkError = () => {
  return (
    <ErrorLayout>
      <NetworkErrorContainer />
    </ErrorLayout>
  )
}

export default NetworkError

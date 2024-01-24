import ErrorLayout from '@/components/UI/Error/ErrorLayout'
import InternalServerErrorContainer from '@/components/(ResponsePage)/InternalServerError/InternalServerErrorContainer'

const InternalServerError = () => {
  return (
    <ErrorLayout>
      <InternalServerErrorContainer />
    </ErrorLayout>
  )
}

export default InternalServerError

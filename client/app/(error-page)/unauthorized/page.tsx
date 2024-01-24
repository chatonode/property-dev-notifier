import ErrorLayout from '@/components/UI/Error/ErrorLayout'
import UnauthorizedContainer from '@/components/(ResponsePage)/Unauthorized/UnauthorizedContainer'

const Unauthorized = () => {
  return (
    <ErrorLayout>
      <UnauthorizedContainer />
    </ErrorLayout>
  )
}

export default Unauthorized

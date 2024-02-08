import PublicMainWrapper from '@/app/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/app/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
// import ErrorSectionWrapper from '@/app/components/(Layout)/Body/Error/ErrorSectionWrapper'
import NetworkErrorContainer from '@/app/components/(ResponsePage)/NetworkError/NetworkErrorContainer'

const NetworkError = () => {
  return (
    <PublicMainWrapper>
      <PublicSectionWrapper>
        <NetworkErrorContainer />
      </PublicSectionWrapper>
    </PublicMainWrapper>
  )
}

export default NetworkError

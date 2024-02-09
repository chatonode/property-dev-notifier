import MainHeader from './components/(Layout)/(public)/Header/MainHeader'
import MainFooter from './components/(Layout)/(public)/Footer/MainFooter'
import PublicMainWrapper from '@/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
import NotFoundContainer from '@/components/(ResponsePage)/NotFound/NotFoundContainer'
import getCurrentUser from '@/api/(server)/auth/get-current-user'

const NotFound = async () => {
  const currentUser = await getCurrentUser()

  return (
    <div className="layout-public">
      <MainHeader currentUser={currentUser} />
      <div className="root">
        <PublicMainWrapper>
          <PublicSectionWrapper>
            <NotFoundContainer />
          </PublicSectionWrapper>
        </PublicMainWrapper>
      </div>
      <MainFooter />
    </div>
  )
}

export default NotFound

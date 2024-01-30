import { permanentRedirect } from 'next/navigation'

import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import WelcomeScreen from '@/components/(Welcome)/WelcomeScreen'
import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'
import PageTitleWrapper from '@/app/components/(Layout)/(authenticated)/Body/PageTitleWrapper'
// import SideNavBarContainer from '@/components/(Layout)/Sidebar/SideNavBarContainer'

const Dashboard = async () => {
  // const currentUser = await getCurrentUser()

  // console.log(currentUser)

  // if (!currentUser) {
  //   return permanentRedirect(ERoute.Home)
  // }

  return (
    <>
      <MainSectionWrapper>
        <PageTitleWrapper>Dashboard</PageTitleWrapper>
        <WelcomeScreen />
      </MainSectionWrapper>
    </>
  )
}

export default Dashboard

import { permanentRedirect } from 'next/navigation'

import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import WelcomeScreen from '@/components/(Welcome)/WelcomeScreen'
import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'
import DashboardNavBar from '../components/(Layout)/Body/Dashboard/DashboardNavBar'

const Dashboard = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (!currentUser) {
    return permanentRedirect(ERoute.Home)
  }

  return (
    <>
      <MainSectionWrapper>
        <DashboardNavBar>
          {/* <h3>Howdy There!</h3> */}
          <WelcomeScreen />
        </DashboardNavBar>
      </MainSectionWrapper>
    </>
  )
}

export default Dashboard

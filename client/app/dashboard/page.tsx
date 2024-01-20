import { permanentRedirect } from 'next/navigation'

import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import WelcomeScreen from '@/components/(Welcome)/WelcomeScreen'
import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'

const Dashboard = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (!currentUser) {
    return permanentRedirect(ERoute.Home)
  }

  return (
    <MainSectionWrapper>
      <h2>Welcome!</h2>
      <WelcomeScreen />
    </MainSectionWrapper>
  )
}

export default Dashboard

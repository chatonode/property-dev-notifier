import { permanentRedirect } from 'next/navigation'

import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import WelcomeScreen from '@/components/(Welcome)/WelcomeScreen'
import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'
// import SideNavBarContainer from '@/components/(Layout)/Sidebar/SideNavBarContainer'

const About = async () => {
//   const currentUser = await getCurrentUser()

  // console.log(currentUser)

//   if (!currentUser) {
//     return permanentRedirect(ERoute.Home)
//   }

  return (
    <>
      <MainSectionWrapper>
        <h2>About</h2>
      </MainSectionWrapper>
    </>
  )
}

export default About

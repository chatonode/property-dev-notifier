import { permanentRedirect } from 'next/navigation'

// import getCurrentUser from '@/app/api/(server)/auth/get-current-user'
import { ERoute } from '@/types/enums'

import PublicMainWrapper from '@/app/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/app/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
// import WelcomeScreen from '@/components/(Welcome)/WelcomeScreen'

const About = async () => {
  //   const currentUser = await getCurrentUser()

  // console.log(currentUser)

  //   if (!currentUser) {
  //     return permanentRedirect(ERoute.Home)
  //   }

  return (
    <>
      <PublicMainWrapper>
        <PublicSectionWrapper>
          <h2>About</h2>
          <p>This is the application about to be...</p>
        </PublicSectionWrapper>
      </PublicMainWrapper>
    </>
  )
}

export default About

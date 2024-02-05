import { permanentRedirect } from 'next/navigation'

import { ERoute } from '@/types/enums'
import getCurrentUser from '@/api/(users)/get-current-user'

import PublicMainWrapper from '@/app/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '../components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
import HomeContainer from '@/components/(Home)/HomeContainer'

const Home = async () => {
  // const router = useRouter()
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  // if (currentUser) {
  //   return permanentRedirect(ERoute.Dashboard)
  // }

  return (
    <PublicMainWrapper>
      <PublicSectionWrapper>
        <HomeContainer />
      </PublicSectionWrapper>
      <PublicSectionWrapper>
        <HomeContainer />
      </PublicSectionWrapper>
    </PublicMainWrapper>
  )
}

export default Home

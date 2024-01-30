import { permanentRedirect } from 'next/navigation'
import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import PublicMainWrapper from '@/app/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/app/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
import GoodByeScreen from '@/components/(GoodBye)/GoodByeScreen'

const GoodBye = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (currentUser) {
    return permanentRedirect(ERoute.Dashboard)
  }

  return (
    <PublicMainWrapper>
      <PublicSectionWrapper>
        <GoodByeScreen />
      </PublicSectionWrapper>
    </PublicMainWrapper>
  )
}

export default GoodBye

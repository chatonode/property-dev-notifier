import { permanentRedirect } from 'next/navigation'
import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'
import GoodByeScreen from '@/components/(GoodBye)/GoodByeScreen'

const GoodBye = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (currentUser) {
    return permanentRedirect(ERoute.Dashboard)
  }

  return (
    <MainSectionWrapper>
      <GoodByeScreen />
    </MainSectionWrapper>
  )
}

export default GoodBye

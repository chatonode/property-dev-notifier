import { permanentRedirect } from 'next/navigation'

import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'
import LoginForm from '@/app/components/(Auth)/form/login/LoginForm'

const LogIn = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (currentUser) {
    return permanentRedirect(ERoute.Dashboard)
  }

  return (
    <MainSectionWrapper>
      {/* <h2>Log In</h2> */}
      <LoginForm />
    </MainSectionWrapper>
  )
}

export default LogIn

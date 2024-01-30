import { permanentRedirect } from 'next/navigation'

import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import PublicMainWrapper from '@/app/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/app/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
import LoginForm from '@/app/components/(Auth)/form/login/LoginForm'

const LogIn = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (currentUser) {
    return permanentRedirect(ERoute.Dashboard)
  }

  return (
    <PublicMainWrapper>
      <PublicSectionWrapper>
        {/* <h2>Log In</h2> */}
        <LoginForm />
      </PublicSectionWrapper>
    </PublicMainWrapper>
  )
}

export default LogIn

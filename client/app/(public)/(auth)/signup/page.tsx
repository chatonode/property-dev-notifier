import { permanentRedirect } from 'next/navigation'

import { ERoute } from '@/types/enums'
import getCurrentUser from '@/app/api/(server)/auth/get-current-user'

import PublicMainWrapper from '@/app/components/(Layout)/(public)/Body/Main/Default/PublicMainWrapper'
import PublicSectionWrapper from '@/app/components/(Layout)/(public)/Body/Main/Section/PublicSectionWrapper'
import SignupForm from '@/app/components/(Auth)/form/signup/SignupForm'

const SignUp = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (currentUser) {
    return permanentRedirect(ERoute.Dashboard)
  }

  return (
    <PublicMainWrapper>
      <PublicSectionWrapper>
        {/* <h2>Sign Up</h2> */}
        <SignupForm />
      </PublicSectionWrapper>
    </PublicMainWrapper>
  )
}

export default SignUp

import { permanentRedirect } from 'next/navigation'

import { ERoute } from '@/types/enums'
import getCurrentUser from '@/api/(users)/get-current-user'

import MainSectionWrapper from '@/app/components/(Layout)/Body/MainSectionWrapper'
import SignupForm from '@/app/components/(Auth)/form/signup/SignupForm'

const SignUp = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (currentUser) {
    return permanentRedirect(ERoute.Dashboard)
  }

  return (
    <MainSectionWrapper>
      {/* <h2>Sign Up</h2> */}
      <SignupForm />
    </MainSectionWrapper>
  )
}

export default SignUp

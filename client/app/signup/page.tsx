import { permanentRedirect } from 'next/navigation'

import SignupForm from '@/app/components/(Auth)/form/signup/SignupForm'
import { ERoute } from '@/types/enums'
import getCurrentUser from '@/api/(users)/get-current-user'

const SignUp = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (currentUser) {
    return permanentRedirect(ERoute.Dashboard)
  }

  return (
    <main>
      <section className="content">
        {/* <h2>Sign Up</h2> */}
        <SignupForm />
      </section>
    </main>
  )
}

export default SignUp

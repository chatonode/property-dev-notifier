import { permanentRedirect } from 'next/navigation'

import SignupForm from '@/components/(Auth)/SignupForm'
import { ERoute } from '@/types/enums'
import getCurrentUser from '@/api/(users)/get-current-user'

const SignUp = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (currentUser) {
    return permanentRedirect(ERoute.Dashboard)
  }

  return (
    <main className="base">
      <section className="base content">
        {/* <h2>Sign Up</h2> */}
        <SignupForm />
      </section>
    </main>
  )
}

export default SignUp

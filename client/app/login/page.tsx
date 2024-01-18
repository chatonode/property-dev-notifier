import { permanentRedirect } from 'next/navigation'

import getCurrentUser from '@/api/(users)/get-current-user'
import { ERoute } from '@/types/enums'

import LoginForm from '@/app/components/(Auth)/form/login/LoginForm'

const LogIn = async () => {
  const currentUser = await getCurrentUser()

  // console.log(currentUser)

  if (currentUser) {
    return permanentRedirect(ERoute.Dashboard)
  }

  return (
    <main>
      <section className="content">
        {/* <h2>Log In</h2> */}
        <LoginForm />
      </section>
    </main>
  )
}

export default LogIn

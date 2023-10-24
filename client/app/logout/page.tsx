
import Link from 'next/link'
import { Route } from '../types/enums'

const LogOut = () => {
  return (
    <main className="base">
      <section className="base content">
        <h2>Logged Out</h2>
        <Link href={Route.Home}>Return to Home Page</Link>
      </section>
    </main>
  )
}

export default LogOut

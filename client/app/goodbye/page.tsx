'use client'

import Link from 'next/link'
import { ERoute } from '../types/enums'

const GoodBye = () => {
  return (
    <main className="base">
      <section className="base content">
        <h2>Good Bye 👋</h2>
        <p>We'll miss you...</p>
        <Link href={ERoute.Home}>Return to Home Page</Link>
      </section>
    </main>
  )
}

export default GoodBye

'use client'

import { PropsWithChildren } from 'react'

const ErrorLayout = (props: PropsWithChildren) => {
  return (
    <main className="base">
      <section className="base content">{props.children}</section>
    </main>
  )
}

export default ErrorLayout

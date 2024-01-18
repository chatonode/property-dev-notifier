'use client'

import { PropsWithChildren } from 'react'

const ErrorLayout = (props: PropsWithChildren) => {
  return (
    <main >
      <section className="content">{props.children}</section>
    </main>
  )
}

export default ErrorLayout

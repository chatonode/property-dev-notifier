// 'use client'

import { PropsWithChildren } from 'react'

const ErrorSectionWrapper = (props: PropsWithChildren) => {
  return (
    <main>
      <section className="error-section">{props.children}</section>
    </main>
  )
}

export default ErrorSectionWrapper

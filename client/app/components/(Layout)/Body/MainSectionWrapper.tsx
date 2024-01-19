'use client'

import { memo } from 'react'

import { PropsWithChildren } from 'react'

const MainSectionWrapper = (props: PropsWithChildren) => {
  return (
    <main>
      <section className="content">{props.children}</section>
    </main>
  )
}

export default memo(MainSectionWrapper)

import { PropsWithChildren } from 'react'

const MainSectionWrapper = (props: PropsWithChildren) => {
  return (
    <main>
      <section>{props.children}</section>
    </main>
  )
}

export default MainSectionWrapper

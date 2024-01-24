import { PropsWithChildren } from 'react'

const MainSectionWrapper = (props: PropsWithChildren) => {
  return (
    <main>
      <section className="content">{props.children}</section>
    </main>
  )
}

export default MainSectionWrapper

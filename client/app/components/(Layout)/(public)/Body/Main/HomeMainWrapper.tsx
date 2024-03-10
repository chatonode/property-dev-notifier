import { ReactNode } from 'react'

type THomeMainWrappeProps = {
  children: ReactNode
}

const HomeMainWrapper = (props: THomeMainWrappeProps) => {
  return <main className="main-home">{props.children}</main>
}

export default HomeMainWrapper

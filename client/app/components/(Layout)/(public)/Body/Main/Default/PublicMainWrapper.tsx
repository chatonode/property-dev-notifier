import { ReactNode } from 'react'

type TPublicMainWrapperProps = {
  children: ReactNode
}

const PublicMainWrapper = (props: TPublicMainWrapperProps) => {
  return <main className="main-public">{props.children}</main>
}

export default PublicMainWrapper

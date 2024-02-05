import { ReactNode } from 'react'

type TPublicSectionWrapperProps = {
  children: ReactNode
}

const PublicSectionWrapper = (props: TPublicSectionWrapperProps) => {
  return <section className="section-public">{props.children}</section>
}

export default PublicSectionWrapper

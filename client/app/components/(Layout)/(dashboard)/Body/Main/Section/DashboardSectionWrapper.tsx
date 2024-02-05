import { ReactNode } from 'react'

type TDashboardSectionWrapperProps = {
  children: ReactNode
}

const DashboardSectionWrapper = (props: TDashboardSectionWrapperProps) => {
  return <section className="section-dashboard">{props.children}</section>
}

export default DashboardSectionWrapper

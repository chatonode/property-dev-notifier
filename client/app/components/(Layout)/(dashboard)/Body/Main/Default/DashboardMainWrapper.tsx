import { ReactNode } from 'react'

type TDashboardMainWrapperProps = {
  children: ReactNode
}

const DashboardMainWrapper = (props: TDashboardMainWrapperProps) => {
  return <main className="main-dashboard">{props.children}</main>
}

export default DashboardMainWrapper

import { ReactNode } from 'react'
import GlobalFadingTemplate from '@/components/UI/Template/GlobalFadingTemplate'

type TDashboardTemplateProps = {
  children: ReactNode
}

const DashboardTemplate = (props: TDashboardTemplateProps) => {
  return (
    <>
      <GlobalFadingTemplate>{props.children}</GlobalFadingTemplate>
    </>
  )
}

export default DashboardTemplate

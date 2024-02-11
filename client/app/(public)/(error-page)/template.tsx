import { ReactNode } from 'react'
import GlobalFadingTemplate from '@/components/UI/Template/GlobalFadingTemplate'

type TPublicErrorTemplateProps = {
  children: ReactNode
}

const PublicErrorTemplate = (props: TPublicErrorTemplateProps) => {
  return (
    <>
      <GlobalFadingTemplate>{props.children}</GlobalFadingTemplate>
    </>
  )
}

export default PublicErrorTemplate

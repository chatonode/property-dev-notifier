import { ReactNode } from 'react'
import GlobalFadingTemplate from '@/components/UI/Template/GlobalFadingTemplate'

type TPublicTemplateProps = {
  children: ReactNode
}

const PublicTemplate = (props: TPublicTemplateProps) => {
  return (
    <>
      <GlobalFadingTemplate>{props.children}</GlobalFadingTemplate>
    </>
  )
}

export default PublicTemplate

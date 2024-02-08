import { ReactNode } from 'react'
import GlobalFadingTemplate from '@/components/UI/Template/GlobalFadingTemplate'

type TAuthTemplateProps = {
  children: ReactNode
}

const AuthTemplate = (props: TAuthTemplateProps) => {
  return (
    <>
      <GlobalFadingTemplate>{props.children}</GlobalFadingTemplate>
    </>
  )
}

export default AuthTemplate

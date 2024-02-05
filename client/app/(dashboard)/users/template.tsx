import { ReactNode } from 'react'
import GlobalFadingTemplate from '@/app/components/UI/Template/GlobalFadingTemplate'

type TUsersTemplateProps = {
  children: ReactNode
}

const UsersTemplate = (props: TUsersTemplateProps) => {
  return (
    <>
      <GlobalFadingTemplate>{props.children}</GlobalFadingTemplate>
    </>
  )
}

export default UsersTemplate

import { ReactNode } from 'react'
import GlobalFadingTemplate from '@/app/components/UI/Template/GlobalFadingTemplate'

type TPropertyDevelopersTemplateProps = {
  children: ReactNode
}

const PropertyDevelopersTemplate = (
  props: TPropertyDevelopersTemplateProps
) => {
  return (
    <>
      <GlobalFadingTemplate>{props.children}</GlobalFadingTemplate>
    </>
  )
}

export default PropertyDevelopersTemplate

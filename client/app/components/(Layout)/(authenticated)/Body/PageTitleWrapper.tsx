import { ReactNode } from 'react'

import classes from './PageTitleWrapper.module.css'

type TPageTitleWrapperProps = {
  children: ReactNode
}

const PageTitleWrapper = (props: TPageTitleWrapperProps) => {
  return (
    <div className={classes.wrapper}>
      <h2>{props.children}</h2>
    </div>
  )
}

export default PageTitleWrapper

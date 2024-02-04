import { ReactNode, memo } from 'react'
import classes from './MenuIconWrapper.module.css'

type TMenuIconWrapperProps = {
  children: ReactNode
}

const MenuIconWrapper = (props: TMenuIconWrapperProps) => {
  return <div className={classes['icon-wrapper']}>{props.children}</div>
}

export default memo(MenuIconWrapper)

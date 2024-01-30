'use client'

import { memo } from 'react'

import classes from './Headbar.module.css'

import LogoContainer from '../LogoContainer'
import Navigation from './Navigation'
import { TCurrentUser } from '@/app/api/(users)/get-current-user'

type THeadbarProps = {
  currentUser: TCurrentUser
  collapsed: boolean
  onClose: () => void
}

const Headbar = (props: THeadbarProps) => {
  const headBarContainerClasses = `${classes['headbar-container']}${
    props.collapsed ? ` ${classes.collapsed}` : ''
  }`
  const headbarHeaderClasses = `${classes.header}`

  return (
    <div className={headBarContainerClasses}>
      <div className={headbarHeaderClasses}>
        {!!props.collapsed && <LogoContainer collapsed={props.collapsed} />}
        <button className={classes['headbar-closer']} onClick={props.onClose}>
          X
        </button>
      </div>
      <Navigation currentUser={props.currentUser} onNavigate={props.onClose} />
    </div>
  )
}

export default memo(Headbar)

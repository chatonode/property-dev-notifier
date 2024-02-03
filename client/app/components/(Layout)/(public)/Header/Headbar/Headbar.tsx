'use client'

import { memo } from 'react'

import classes from './Headbar.module.css'

import LogoContainer from '../LogoContainer'
import Navigation from './Navigation'
import { TCurrentUser } from '@/app/api/(users)/get-current-user'
import CollapseHeadbarSVG from '@/app/components/UI/SVG/Layout/Headbar/CollapseHeadbarSVG'

type THeadbarProps = {
  currentUser: TCurrentUser
  expanded: boolean
  onCollapse: () => void
}

const Headbar = (props: THeadbarProps) => {
  const headBarContainerClasses = `${classes['headbar-container']}${
    props.expanded ? ` ${classes.expanded}` : ''
  }`
  const headbarHeaderClasses = `${classes.header}`

  return (
    <div className={headBarContainerClasses}>
      <div className={headbarHeaderClasses}>
        {!!props.expanded && <LogoContainer expanded={props.expanded} />}
        {/* <button className={classes['headbar-collapser']} onClick={props.onCollapse}>
          X
        </button> */}
        <CollapseHeadbarSVG onCollapse={props.onCollapse} />
      </div>
      <Navigation
        currentUser={props.currentUser}
        onNavigate={props.onCollapse}
      />
    </div>
  )
}

export default memo(Headbar)

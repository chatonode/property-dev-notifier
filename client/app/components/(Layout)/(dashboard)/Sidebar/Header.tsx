'use client'

import { memo } from 'react'

import CollapseSidebarSVG from '@/app/components/UI/SVG/Layout/Sidebar/CollapseSidebarSVG'

import classes from './Header.module.css'
import LogoContainer from './LogoContainer'

type THeaderProps = {
  onCollapse: () => void
}

const Header = (props: THeaderProps) => {
  return (
    <div className={classes['header-container']}>
      <LogoContainer />
      <CollapseSidebarSVG onCollapse={props.onCollapse} />
    </div>
  )
}

export default memo(Header)

import HamburgerSVG from '@/app/components/UI/SVG/Layout/Sidebar/HamburgerSVG'
import classes from './HamburgerWrapper.module.css'
import { memo } from 'react'

type THamburgerWrapperProps = {
  onClick: () => void
}

const HamburgerWrapper = (props: THamburgerWrapperProps) => {
  return (
    <div className={classes['hamburger-wrapper']}>
      <HamburgerSVG onClick={props.onClick} />
    </div>
  )
}

export default memo(HamburgerWrapper)

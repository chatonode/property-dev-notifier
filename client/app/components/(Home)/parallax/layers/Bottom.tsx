import { memo } from 'react'
import BottomPatternSVG from '@/app/components/UI/SVG/Home/Parallax/BottomPatternSVG'

import classes from './Bottom.module.css'

const Bottom = () => {
  return (
    <div className={classes.container}>
      {/* <div className={classes.pattern}>
        <BottomPatternSVG />
      </div> */}
      <h1>Property Developer Notifier</h1>
      <p>
        The app that lets you manage and communicate with property developers in
        an easy and efficient way.
      </p>
      <button>Get Started</button>
    </div>
  )
}

export default memo(Bottom)

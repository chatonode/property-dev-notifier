import React, { memo } from 'react'

import classes from './HamburgerSVG.module.css'

type THamburgerSVGProps = {
  onClick: () => void
}

const HamburgerSVG = (props: THamburgerSVGProps) => {
  return (
    <div className={classes['hamburger-container']}>
      <svg
        width="24"
        height="18"
        viewBox="0 0 24 18"
        xmlns="http://www.w3.org/2000/svg"
        style={{ cursor: 'pointer' }}
        onClick={props.onClick}
      >
        <rect width="24" height="3" rx="1.5" fill="var(--text-primary)" />
        <rect y="7" width="24" height="3" rx="1.5" fill="var(--text-primary)" />
        <rect
          y="14"
          width="24"
          height="3"
          rx="1.5"
          fill="var(--text-primary)"
        />
      </svg>
    </div>
  )
}

export default memo(HamburgerSVG)

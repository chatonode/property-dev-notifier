import { memo } from 'react'

import classes from './CollapseSidebarSVG.module.css'

type TCollapseSidebarSVGProps = {
  onCollapse: () => void
}

const CollapseSidebarSVG = (props: TCollapseSidebarSVGProps) => {
  return (
    <div className={classes['svg-container']} onClick={props.onCollapse}>
      <svg
        className={classes['svg']}
        // strokeWidth="0.1px"
        strokeWidth="0"
        viewBox="0 0 24 24"
      >
        <path
          fill="none"
          d="M0 0h24v24H0z"
          //   className={classes['collapse-sidebar-path']}
        ></path>
        <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
      </svg>
    </div>
  )
}

export default memo(CollapseSidebarSVG)

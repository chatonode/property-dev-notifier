// TODO: does it worth it to turn this into a server component?
'use client'

import { memo } from 'react'

import classes from './LoadingContainer.module.css'
import { usePathname } from 'next/navigation'
import LoadingPortal from './LoadingPortal'

const LoadingContainer = () => {
  // const pathname = usePathname()

  return (
    <LoadingPortal>
      <div className={classes.container}>
        <div className={classes.blob}></div>
      </div>
    </LoadingPortal>
  )
}

export default memo(LoadingContainer)

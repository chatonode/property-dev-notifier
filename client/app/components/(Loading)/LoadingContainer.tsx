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

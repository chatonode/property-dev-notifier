'use client'

import { PropsWithChildren, memo, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import Backdrop from '@/components/UI/Overlay/Backdrop'

import classes from './LoadingPortal.module.css'

type TLoadingPortalProps = PropsWithChildren

const LoadingPortal = (props: TLoadingPortalProps) => {
  const [mounted, setMounted] = useState(false)
  // console.log('LoadingPortal')

  // After initial render:
  useEffect(() => {
    // For preventing "ReferenceError: document is not defined" since it may be rendered by a server component.
    setMounted(true)
  }, [])

  return (
    <>
      {mounted &&
        createPortal(
          <div className={classes.overlay}>
            <Backdrop />
            {/* LoadingContainer as children */}
            {props.children}
          </div>,
          document.body
        )}
    </>
  )
}

export default memo(LoadingPortal)

'use client'

import { PropsWithChildren, memo, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import Backdrop from './Backdrop'

import classes from './BackdropPortal.module.css'

type TBackdropPortalProps = PropsWithChildren & {
  onBackdropClick?: () => void
}

const BackdropPortal = (props: TBackdropPortalProps) => {
  const [mounted, setMounted] = useState(false)
  console.log('BackdropPortal')

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
            <Backdrop onClick={props.onBackdropClick} />
            {/* Modal as children */}
            {props.children}
          </div>,
          document.getElementById('backdrop-root')!
        )}
    </>
  )
}

export default memo(BackdropPortal)

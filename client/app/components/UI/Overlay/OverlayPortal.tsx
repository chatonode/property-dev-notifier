'use client'

import { PropsWithChildren, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

import Backdrop from './Backdrop'

import classes from './OverlayPortal.module.css'

type TOverlayPortalProps = PropsWithChildren & {
  onBackdropClose?: () => void
}

const OverlayPortal = (props: TOverlayPortalProps) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  return mounted ? (
    <>
      {createPortal(
        <div className={classes.overlay}>
          <Backdrop onClose={props.onBackdropClose} />
          {/* Modal as children */}
          {props.children}
        </div>,
        document.body
      )}
    </>
  ) : null
}

export default OverlayPortal

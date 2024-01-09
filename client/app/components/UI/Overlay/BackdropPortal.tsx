'use client'

import { PropsWithChildren, memo } from 'react'
import { createPortal } from 'react-dom'

import Backdrop from './Backdrop'

import classes from './BackdropPortal.module.css'

type TBackdropPortalProps = PropsWithChildren & {
  onBackdropClick?: () => void
}

const BackdropPortal = (props: TBackdropPortalProps) => {
  console.log('BackdropPortal')

  return (
    <>
      {createPortal(
        <div className={classes.overlay}>
          <Backdrop onClick={props.onBackdropClick} />
          {/* Modal as children */}
          {props.children}
        </div>,
        document.body
      )}
    </>
  )
}

export default memo(BackdropPortal)

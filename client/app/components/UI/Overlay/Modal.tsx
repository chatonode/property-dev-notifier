'use client'

import { PropsWithChildren } from 'react'

import classes from './Modal.module.css'
import OverlayPortal from './OverlayPortal'

type TModalProps = PropsWithChildren & {
  title: string
  onClose: () => void
  isBackdropClosable: boolean
}

const Modal = (props: TModalProps) => {
  return (
    <OverlayPortal
      onBackdropClose={props.isBackdropClosable ? props.onClose : undefined}
    >
      <div className={classes.modal}>
        <div className={classes.content}>
          <div className={classes.title}>
            <h2>{props.title}</h2>
          </div>
          <div>{props.children}</div>
          <button
            type="button"
            className={classes.cancel}
            onClick={props.onClose}
          >
            Close Modal
          </button>
        </div>
      </div>
    </OverlayPortal>
  )
}

export default Modal

'use client'

import { PropsWithChildren, memo } from 'react'

import classes from './Modal.module.css'
import BackdropPortal from './BackdropPortal'

type TBackdropClosable = boolean

type TModalProps<T extends TBackdropClosable> = PropsWithChildren & {
  title: string
  isBackdropClosable: T
  onClose: T extends true ? () => void : undefined
}

/**
 * Modal Component
 *
 * @template T - Specify the type for isBackdropClosable.
 *               Use 'true' if the modal is closable, 'false' otherwise.
 * @param {TModalProps<T>} props - The props for the Modal component.
 * @returns {JSX.Element} - The rendered Modal component.
 */
function Modal<T extends TBackdropClosable>(
  props: TModalProps<T>
): JSX.Element {
  return (
    <BackdropPortal onBackdropClick={props.onClose}>
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
    </BackdropPortal>
  )
}

export default memo(Modal)

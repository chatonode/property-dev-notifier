'use client'

import { PropsWithChildren } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import classes from './Modal.module.css'
import OverlayPortal from './OverlayPortal'

type TModalProps = PropsWithChildren & {
  title: string
}

const Modal = (props: TModalProps) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <OverlayPortal>
      <div className={classes.modal}>
        <h2>{props.title}</h2>
        <div>{props.children}</div>
        <button
          type="button"
          className={classes.cancel}
          onClick={() => router.replace(pathname)}
        >
          Close Modal
        </button>
      </div>
    </OverlayPortal>
  )
}

export default Modal

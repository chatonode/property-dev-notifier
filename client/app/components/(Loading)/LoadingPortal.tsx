'use client'

import { PropsWithChildren, memo } from 'react'
import { createPortal } from 'react-dom'

import Backdrop from '@/components/UI/Overlay/Backdrop'

import classes from './LoadingPortal.module.css'

type TLoadingPortalProps = PropsWithChildren

const LoadingPortal = (props: TLoadingPortalProps) => {
  console.log('LoadingPortal')

  return (
    <>
      {createPortal(
        <div className={classes.overlay}>
          {/* <Backdrop /> */}
          {/* LoadingContainer as children */}
          {props.children}
        </div>,
        document.body
      )}
    </>
  )
}

export default memo(LoadingPortal)

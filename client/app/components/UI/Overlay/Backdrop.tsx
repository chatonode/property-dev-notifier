'use client'

import classes from './Backdrop.module.css'

type TBackdropProps = {
  onClose?: () => void
}

const Backdrop = (props: TBackdropProps) => {
  return (
    <div
      className={classes.backdrop}
      onClick={props.onClose}
    />
  )
}

export default Backdrop

import { MouseEvent, type ReactNode } from 'react'
import classes from './ModalFormWrapper.module.css'
import Button, { TButtonProps } from '@/components/UI/Button/Button'

type TModalFormWrapper = {
  children: ReactNode
  title: string
  onCancel: TButtonProps["onClick"]
  onSubmit: TButtonProps["onClick"]
}

const ModalFormWrapper = ({
  children,
  title,
  onCancel,
  onSubmit,
}: TModalFormWrapper) => {
  return (
    <form className={classes.form}>
      <div className={classes.header}>
        <h3>{title}</h3>
      </div>
      <div className={classes.body}>{children}</div>
      <div className={classes.actions}>
        <Button variant="cancel" type="button" onClick={onCancel}>
          {/* Discard */}X
        </Button>
        <Button variant="success" type="submit" onClick={onSubmit}>
          {/* Update */}✔
        </Button>
      </div>
    </form>
  )
}

export default ModalFormWrapper

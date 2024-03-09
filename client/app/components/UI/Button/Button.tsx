// Button.tsx
import React, { MouseEvent, memo } from 'react'
import classes from './Button.module.css'

export type TButtonProps = {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  loading?: boolean
  variant?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'cancel'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const Button = ({
  children,
  type = 'button',
  onClick,
  variant = 'primary',
  size = 'md',
  disabled,
  loading,
  fullWidth,
  startIcon,
  endIcon,
}: TButtonProps) => {
  const buttonClasses = `
  ${classes.btn} 
  ${classes[`btn--${variant}`]} 
  ${classes[`btn--${size}`]}
  ${fullWidth ? ` ${classes['btn--fullWidth']}` : ''}
  ${loading ? ` ${classes['btn--loading']}` : ''}
  `

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {startIcon && <span className={classes.btn__startIcon}>{startIcon}</span>}
      {children}
      {endIcon && <span className={classes.btn__endIcon}>{endIcon}</span>}
      {loading && <span className={classes.btn__loader} />}
    </button>
  )
}

export default memo(Button)

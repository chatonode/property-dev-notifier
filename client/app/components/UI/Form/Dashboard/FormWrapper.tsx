import { ReactNode } from 'react'
import classes from './FormWrapper.module.css'

type TFormWrapperProps = {
  children: ReactNode
}

const FormWrapper = (props: TFormWrapperProps) => {
  return <div className={classes.wrapper}>{props.children}</div>
}

export default FormWrapper

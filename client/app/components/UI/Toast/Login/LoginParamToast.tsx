'use client'

import { ReactNode, memo, useCallback, useState } from 'react'

import useLoginRedirectReason from '@/app/hooks/useLoginRedirectReason'

import classes from './LoginParamToast.module.css'

type TLoginParamToastProps = {
  //   reason: string
  //   children: ReactNode
}

const LoginParamToast = (props: TLoginParamToastProps) => {
  const [isClosed, setIsClosed] = useState<boolean>(false)
  const loginRedirectReason = useLoginRedirectReason()

  const closeHandler = useCallback(() => {
    setIsClosed(true)
  }, [])

  return (
    <>
      {loginRedirectReason && !isClosed && (
        <div className={classes.toast}>
          <p className={classes.message}>{loginRedirectReason}</p>
          <button className={classes.close} onClick={closeHandler}>X</button>
        </div>
      )}
    </>
  )
}

export default memo(LoginParamToast)

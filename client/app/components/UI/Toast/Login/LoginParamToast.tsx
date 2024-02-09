'use client'

import { ReactNode, memo, useCallback, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

import { ERoute } from '@/app/types/enums'

import useLoginErrorParams from '@/hooks/useLoginErrorParams'

import classes from './LoginParamToast.module.css'

type TLoginParamToastProps = {
  //   reason: string
  //   children: ReactNode
}

const LoginParamToast = (props: TLoginParamToastProps) => {
  const [isClosed, setIsClosed] = useState<boolean>(false)
  const loginErrorSearchParam = useLoginErrorParams(isClosed)

  const closeHandler = useCallback(() => {
    setIsClosed(true)
  }, [])

  return (
    <>
      {!isClosed && loginErrorSearchParam && (
        <div className={classes.toast}>
          <p className={classes.message}>{loginErrorSearchParam}</p>
          <button className={classes.close} onClick={closeHandler}>
            X
          </button>
        </div>
      )}
    </>
  )
}

export default memo(LoginParamToast)

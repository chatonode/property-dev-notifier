// 'use client'

import Link from 'next/link'
import classes from './UnauthorizedContainer.module.css'
import { ERoute } from '@/app/types/enums'

const UnauthorizedContainer = () => {
  return (
    <>
      <h2 className={classes.title}>
        Unauthorized <span className={classes.emoji}>☝️</span>
      </h2>
      <p>Have we ever met before?..</p>
      <p>
        Proceed to <Link href={ERoute.Login}>Log In</Link>
      </p>
      <p>
        New here? <Link href={ERoute.Signup}>Sign Up</Link>
      </p>
    </>
  )
}

export default UnauthorizedContainer

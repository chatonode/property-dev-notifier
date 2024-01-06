'use client'

import { PropsWithChildren } from 'react'

import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import classes from './Backdrop.module.css'

const Backdrop = (props: PropsWithChildren) => {
  const router = useRouter()
  const pathname = usePathname()

  return (
    <div className={classes.backdrop} onClick={() => router.replace(pathname)}>
      {props.children}
    </div>
  )
}

export default Backdrop

import React from 'react'
import Link from 'next/link'
import classes from './NotFoundContainer.module.css'
import { ERoute } from '@/app/types/enums'

const NotFoundContainer = () => {
  return (
    <>
      <h2 className={classes.title}>
        Page Not Found <span className={classes.emoji}>🤷‍♂️</span>
      </h2>
      <p>The requested page does not exist.</p>
      <p>
        Go back to the <Link href={ERoute.Home}>Home Page</Link>.
      </p>
    </>
  )
}

export default NotFoundContainer

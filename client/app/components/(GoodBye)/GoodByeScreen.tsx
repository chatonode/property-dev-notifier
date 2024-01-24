// 'use client'
import Link from 'next/link'

import { ERoute } from '@/app/types/enums'

import classes from './GoodByeScreen.module.css'

const GoodByeScreen = () => {
  return (
    <>
      <h2 className={classes.title}>
        Good Bye <span className={classes.emoji}>👋</span>
      </h2>
      <p>We'll miss you...</p>
      <Link href={ERoute.Home}>Return to Home Page</Link>
    </>
  )
}

export default GoodByeScreen

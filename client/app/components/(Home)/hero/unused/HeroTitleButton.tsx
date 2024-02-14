'use client'

import { useCallback } from 'react'
import classes from './HeroTitleButton.module.css'
import { useRouter } from 'next/navigation'
import { ERoute } from '@/app/types/enums'

const HeroTitleButton = () => {
    const router = useRouter()

    const clickHandler = useCallback(() => router.push(ERoute.Signup), [])

  return <button className={classes.button} onClick={clickHandler}>Get Started</button>
}

export default HeroTitleButton
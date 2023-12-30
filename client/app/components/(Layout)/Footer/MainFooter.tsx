'use client'

import { Pacifico } from 'next/font/google'

import classes from './MainFooter.module.css'

const pacifico = Pacifico({ weight: '400', subsets: ['latin'] })

const MainFooter = () => {
  return (
    <footer className={`footer`}>
      <p className={classes["copyright-text"]}>&copy;2023 Nagua. All rights reserved.</p>
    </footer>
  )
}

export default MainFooter

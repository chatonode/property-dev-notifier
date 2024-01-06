'use client'

import { createPortal } from 'react-dom'
import MovingCircles from './MovingCircles'
import { useEffect, useState } from 'react'

const BackgroundPortal = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  return mounted ? createPortal(<MovingCircles />, document.body) : null
}

export default BackgroundPortal

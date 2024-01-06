'use client'

import { PropsWithChildren, useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

import { useSearchParams } from 'next/navigation'
import Backdrop from './Backdrop'

const OverlayPortal = (props: PropsWithChildren) => {
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams()
  const modal = searchParams.get('modal')

  useEffect(() => setMounted(true), [])

  return modal && mounted
    ? createPortal(<Backdrop>{props.children}</Backdrop>, document.body)
    : null
}

export default OverlayPortal

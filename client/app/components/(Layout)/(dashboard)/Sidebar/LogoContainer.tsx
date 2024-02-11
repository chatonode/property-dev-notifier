'use client'

import { memo, useCallback } from 'react'
import { useRouter } from 'next/navigation'
// import { useRouter } from '@/hooks/next/useRouter'
import Image from 'next/image'

import { ERoute } from '@/app/types/enums'
import logo from '@/public/assets/images/logo/SmartLogoWebMobile.png'

import classes from './LogoContainer.module.css'

const LogoContainer = () => {
  const router = useRouter()

  const clickHandler = useCallback(() => {
    return router.push(ERoute.Home)
  }, [])

  const logoContainerClasses = `${classes['logo-container']}`

  return (
    <div className={logoContainerClasses}>
      <Image
        priority={true}
        src={logo.src}
        quality={100}
        width={200}
        height={45}
        //   sizes="(max-width: 768px) 100vw"
        alt="logo"
        style={{ cursor: 'pointer' }}
        onClick={clickHandler}
      />
    </div>
  )
}

export default memo(LogoContainer)

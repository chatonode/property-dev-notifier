'use client'

import { memo } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { ERoute } from '@/app/types/enums'

import logo from '@/public/assets/images/logo/SmartLogoWebMobile.png'

import classes from './Header.module.css'

type THeaderProps = {
  onCollapse: () => void
}

const Header = (props: THeaderProps) => {
  const router = useRouter()

  return (
    <div className={classes['header-container']}>
      <div className="logo-container">
        <Image
          priority={true}
          src={logo.src}
          quality={100}
          width={200}
          height={45}
          //   sizes="(max-width: 768px) 100vw"
          alt="logo"
          style={{ cursor: 'pointer' }}
          onClick={() => router.push(ERoute.Home)}
        />
      </div>
      <button className={classes['dashboard-collapser']} onClick={props.onCollapse}>
        X
      </button>
    </div>
  )
}

export default memo(Header)

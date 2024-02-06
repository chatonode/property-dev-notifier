import { memo, useCallback } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
// import { useRouter } from '@/hooks/next/useRouter'

import { ERoute } from '@/app/types/enums'
import logo from '@/public/assets/images/logo/SmartLogoWebMobile.png'

import classes from './LogoContainer.module.css'

type TLogoContainerProps = {
  expanded?: boolean
}

const LogoContainer = (props: TLogoContainerProps) => {
  const router = useRouter()

  const logoContainerClasses = `${classes['logo-container']}${
    props.expanded ? ` ${classes.expanded}` : ''
  }`

  const clickHandler = useCallback(() => {
    return router.push(ERoute.Home)
  }, [])

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
        onClick={props.expanded ? undefined : clickHandler}
      />
    </div>
  )
}

export default memo(LogoContainer)

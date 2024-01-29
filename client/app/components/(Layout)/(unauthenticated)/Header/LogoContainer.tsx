import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { ERoute } from '@/app/types/enums'
import logo from '@/public/assets/images/logo/SmartLogoWebMobile.png'

import classes from './LogoContainer.module.css'

type TLogoContainerProps = {
  collapsed?: boolean
}

const LogoContainer = (props: TLogoContainerProps) => {
  const router = useRouter()

  const logoContainerClasses = `${classes['logo-container']}${
    props.collapsed ? ` ${classes.collapsed}` : ''
  }`

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
        onClick={() => router.push(ERoute.Home)}
      />
    </div>
  )
}

export default LogoContainer

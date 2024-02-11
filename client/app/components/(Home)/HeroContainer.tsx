import { ERoute } from '@/app/types/enums'
import classes from './HeroContainer.module.css'
import Link from 'next/link'
import HeroTitleSVG from '@/components/UI/SVG/Home/Hero/HeroTitleSVG'

const HeroContainer = () => {
  return (
    <div className={`${classes.container}`}>
      <div className={classes.title}>
        <HeroTitleSVG />
      </div>
    </div>
  )
}

export default HeroContainer

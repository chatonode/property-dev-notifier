import { ERoute } from '@/app/types/enums'
import classes from './HomeContainer.module.css'
import Link from 'next/link'
import DropSVG from '../UI/SVG/lib/drop/DropSVG'
import DropSVGDark from '../UI/SVG/lib/drop/DropSVGDark'
import AnimatedStopsSVG from '@/app/components/UI/SVG/lib/drop/random-stop-color/AnimatedStopsSVG'
import GradientStopMaker from '../UI/SVG/lib/gradient-stop-maker/GradientStopMaker'
import { THslArray } from '@/app/hooks/useStopProps'

const h1 = 202
const s1 = 100
const l1 = 11

const h2 = 205
const s2 = 100
const l2 = 88

const HomeContainer = () => {
  const startColor: THslArray = [h1, s1, l1]
  const endColor: THslArray = [h2, s2, l2]
  const gradientId = `gradient-home-${startColor}-${endColor}`

  return (
    <div className={`${classes.container}`}>
      {/* <DropSVG /> */}
      {/* <DropSVGDark /> */}
      <AnimatedStopsSVG />
      <svg width="200" height="200" viewBox="0 0 200 200">
        <GradientStopMaker
          gradientId={gradientId}
          startColor={startColor}
          endColor={endColor}
        />
        <rect
          x="100"
          y="100"
          width="50"
          height="50"
          fill={`url(#${gradientId})`}
        />
        <circle r="50" cx="50" cy="50" fill={`url(#${gradientId})`}></circle>
      </svg>
    </div>
  )
}

export default HomeContainer

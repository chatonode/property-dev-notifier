import { ERoute } from '@/app/types/enums'
import classes from './HomeContainer.module.css'
import Link from 'next/link'
import DropSVG from '../UI/SVG/lib/drop/DropSVG'
import DropSVGDark from '../UI/SVG/lib/drop/DropSVGDark'
import DropSVGDarkRandomStops from '@/components/UI/SVG/lib/drop/random-stop-color/DropSVGDarkRandomStops'
import GradientStopMaker from '../UI/SVG/lib/drop/gradient-stop-maker/GradientStopMaker'

const HomeContainer = () => {
  return (
    <div className={`${classes.container}`}>
      <DropSVG />
      <DropSVGDark />
      {/* <DropSVGDarkRandomStops /> */}
      <GradientStopMaker />
    </div>
  )
}

export default HomeContainer

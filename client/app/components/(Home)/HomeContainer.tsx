import { ERoute } from '@/app/types/enums'
import classes from './HomeContainer.module.css'
import Link from 'next/link'
import DropSVG from '../UI/SVG/lib/drop/DropSVG'
import DropSVGDark from '../UI/SVG/lib/drop/DropSVGDark'
import DropSVGDarkRandomStops from '@/components/UI/SVG/lib/drop/random-stop-color/DropSVGDarkRandomStops'

const HomeContainer = () => {
  return (
    <div className={`${classes.container}`}>
      <DropSVG />
      <DropSVGDark />
      <DropSVGDarkRandomStops />
    </div>
  )
}

export default HomeContainer

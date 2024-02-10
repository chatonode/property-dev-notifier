import { ERoute } from '@/app/types/enums'
import classes from './HomeContainer.module.css'
import Link from 'next/link'
import DropSVG from '../UI/SVG/lib/drop/DropSVG'
import DropSVGDark from '../UI/SVG/lib/drop/DropSVGDark'
import DropSVGDarkRandomStops from '../UI/SVG/lib/drop/DropSVGDarkRandomStops'

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

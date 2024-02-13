// import AnimatedGradientStops from '../../gradient/linear/AnimatedGradientStops'
import classes from './HeroTitleSVG.module.css'

const HeroTitleSVG = () => {
  // const gradientId = `gradient-hero-title`

  return (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.svg}
    >
      <text x="5" y="35" className={classes.small}>
        Notify
      </text>
      <text x="48" y="35" className={classes.Rrrrr}>
        Property
      </text>
      <text x="4" y="78" className={classes.small}>
        Developers
      </text>
      <text x="20" y="150" className={classes.heavy}>
        now!
      </text>
    </svg>
  )
}

export default HeroTitleSVG

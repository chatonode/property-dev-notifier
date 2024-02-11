import classes from './HeroTitleSVG.module.css'

const HeroTitleSVG = () => {
  return (
    <svg
      viewBox="0 0 240 80"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.svg}
    >
      <text x="20" y="35" className={classes.small}>
        Notify
      </text>
      <text x="40" y="35" className={classes.heavy}>
        now
      </text>
      <text x="65" y="55" className={classes.Rrrrr}>
        Property
      </text>
      <text x="55" y="55" className={classes.small}>
        Developers
      </text>
    </svg>
  )
}

export default HeroTitleSVG

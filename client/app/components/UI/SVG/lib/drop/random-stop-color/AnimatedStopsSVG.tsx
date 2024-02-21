import classes from './AnimatedStopsSVG.module.css'

import AnimatedGradientStops from '../../../gradient/linear/AnimatedGradientStops'

const AnimatedStopsSVG = () => {
  const gradientId = 'myGradientDarkRandomStops'

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className={classes.svg}
      >
        <AnimatedGradientStops gradientId={gradientId} />
        <path
          className={classes['drop-path']}
          d="M100,10 C145,70 160,120 100,190 C40,120 55,70 100,10 Z"
          fill={`url(#${gradientId})`}
        />
        {/* <text
          x="65"
          y="55"
          width="200px"
          height="200px"
          fill={`url(#${gradientId})`}
        >
          Property
        </text> */}
      </svg>
    </>
  )
}

export default AnimatedStopsSVG

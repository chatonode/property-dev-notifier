import React from 'react'
import GradientStopMaker from '../../lib/gradient-stop-maker/GradientStopMaker'
import { THslArray } from '@/app/hooks/useStopProps'

const HeroSliderSVG = () => {
  // const startColor: THslArray = [220, 46.15, 5.1]
  // const endColor: THslArray = [214, 33, 4]
  // const startColor = '#070a0d'
  const startColor = '#1c3f65'
  const endColor = '#030915'
  const gradientId = `gradient-hero-slider-${startColor}-${endColor}`

  return (
    <svg
      id="visual"
      viewBox="0 0 960 540"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      // transform="rotate(180)"
    >
      <linearGradient id={gradientId} gradientTransform="rotate(90)">
        <stop offset={'0%'} stopColor={endColor} />
        <stop offset={'100%'} stopColor={startColor} />
      </linearGradient>
      <path
        d="M0 340L6.7 335.8C13.3 331.7 26.7 323.3 40 323.7C53.3 324 66.7 333 80 329.8C93.3 326.7 106.7 311.3 120 298C133.3 284.7 146.7 273.3 160 274.5C173.3 275.7 186.7 289.3 200 280.3C213.3 271.3 226.7 239.7 240 228.5C253.3 217.3 266.7 226.7 280 234.5C293.3 242.3 306.7 248.7 320 244.8C333.3 241 346.7 227 360 230.5C373.3 234 386.7 255 400 272.3C413.3 289.7 426.7 303.3 440 302C453.3 300.7 466.7 284.3 480 278.7C493.3 273 506.7 278 520 265C533.3 252 546.7 221 560 220.2C573.3 219.3 586.7 248.7 600 265.2C613.3 281.7 626.7 285.3 640 280C653.3 274.7 666.7 260.3 680 268.8C693.3 277.3 706.7 308.7 720 325.8C733.3 343 746.7 346 760 326C773.3 306 786.7 263 800 256.8C813.3 250.7 826.7 281.3 840 297.8C853.3 314.3 866.7 316.7 880 321.7C893.3 326.7 906.7 334.3 920 335C933.3 335.7 946.7 329.3 953.3 326.2L960 323L960 0L953.3 0C946.7 0 933.3 0 920 0C906.7 0 893.3 0 880 0C866.7 0 853.3 0 840 0C826.7 0 813.3 0 800 0C786.7 0 773.3 0 760 0C746.7 0 733.3 0 720 0C706.7 0 693.3 0 680 0C666.7 0 653.3 0 640 0C626.7 0 613.3 0 600 0C586.7 0 573.3 0 560 0C546.7 0 533.3 0 520 0C506.7 0 493.3 0 480 0C466.7 0 453.3 0 440 0C426.7 0 413.3 0 400 0C386.7 0 373.3 0 360 0C346.7 0 333.3 0 320 0C306.7 0 293.3 0 280 0C266.7 0 253.3 0 240 0C226.7 0 213.3 0 200 0C186.7 0 173.3 0 160 0C146.7 0 133.3 0 120 0C106.7 0 93.3 0 80 0C66.7 0 53.3 0 40 0C26.7 0 13.3 0 6.7 0L0 0Z"
        // fill="#0066FF"
        fill={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeLinejoin="miter"
      ></path>
    </svg>
  )
}

export default HeroSliderSVG

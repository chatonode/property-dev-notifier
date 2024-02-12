'use client'

import React, { useCallback, useState } from 'react'
import useStopProps, {
  THslArrayProps,
  THslColorProps,
} from '@/hooks/useStopProps'
import hexToHSL from '@/app/utils/colors/color-converter'

// const h1 = 201.82
// const s1 = 100
// const l1 = 10.78

// const h2 = 202.06
// const s2 = 100
// const l2 = 15.02

// const h1 = 0
// const s1 = 0
// const l1 = 0

// const h2 = 360
// const s2 = 100
// const l2 = 100

const h1 = 202
const s1 = 100
const l1 = 11

const h2 = 205
const s2 = 100
const l2 = 88

const GradientStopMaker = () => {
  // Define the start and end colors for the gradient
  const [startColor, setStartColor] = useState<THslArrayProps>([h1, s1, l1])
  const [endColor, setEndColor] = useState<THslArrayProps>([h2, s2, l2])

  //   const startColor: THslColorProps = 'hsl(201.82, 100%, 10.78%)'
  //   const endColor: THslColorProps = 'hsl(202.06, 100%, 15.02%)'

  const changeStartColorHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value)

      const hsl = hexToHSL(event.target.value)
      console.log(hsl)

      setStartColor([hsl!.hue, hsl!.saturation, hsl!.lightness])
    },
    []
  )

  const changeEndColorHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value)

      const hsl = hexToHSL(event.target.value)
      console.log(hsl)

      setEndColor([hsl!.hue, hsl!.saturation, hsl!.lightness])
    },
    []
  )

  // Call the custom React hook and get the stop properties
  const stopProps = useStopProps(startColor, endColor)
  // Return the JSX for the component
  return (
    <>
      <svg width="200" height="200" viewBox="0 0 200 200">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            {stopProps.map((stop) => (
              <stop
                key={stop.offset}
                offset={stop.offset}
                stopColor={stop.stopColor}
              />
            ))}
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="200" height="200" fill="url(#gradient)" />
        {/* <rect x="20" y="40" width="200" height="200" fill="url(#gradient)" /> */}
      </svg>
      <div>
        <div>
          <input
            type="color"
            id="start"
            name="start"
            value="#000000"
            onChange={changeStartColorHandler}
          />
          <label htmlFor="start">Start</label>
        </div>
        <div>
          <input
            type="color"
            id="end"
            name="end"
            value="#000000"
            onChange={changeEndColorHandler}
          />
          <label htmlFor="end">End</label>
        </div>
      </div>
    </>
  )
}

export default GradientStopMaker

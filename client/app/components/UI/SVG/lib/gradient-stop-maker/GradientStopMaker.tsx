'use client'

import React, { memo, useCallback, useState } from 'react'
import useStopProps, {
  THslArray,
  THslColorStr,
} from '@/hooks/useStopProps'
import hexToHSL from '@/app/utils/colors/color-converter'

export type { THslColorStr }

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

// const h1 = 202
// const s1 = 100
// const l1 = 11

// const h2 = 205
// const s2 = 100
// const l2 = 88

type TGradientStopMakerProps = {
  // gradientId: `gradient-${string}-[${string}, ${string}, ${string}]-[${string}, ${string}, ${string}]`
  gradientId: string
  startColor: THslArray
  endColor: THslArray
  numberOfSteps?: number
}

const GradientStopMaker = (props: TGradientStopMakerProps) => {
  // Define the start and end colors for the gradient
  const [startColor, setStartColor] = useState<THslArray>(props.startColor)
  const [endColor, setEndColor] = useState<THslArray>(props.endColor)
  // Call the custom React hook and get the stop properties
  const stopProps = useStopProps(
    startColor,
    endColor,
    props.numberOfSteps ? props.numberOfSteps : 5
  ) // Default 5

  //   const startColor: THslColorStr = 'hsl(201.82, 100%, 10.78%)'
  //   const endColor: THslColorStr = 'hsl(202.06, 100%, 15.02%)'

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

  // Return the JSX for the component
  return (
    <>
      {/* <svg width="200" height="200" viewBox="0 0 200 200"> */}
      <defs>
        <linearGradient
          id={`${props.gradientId}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          {stopProps.map((stop) => (
            <stop
              key={stop.offset}
              offset={stop.offset}
              stopColor={stop.stopColor}
            />
          ))}
        </linearGradient>
      </defs>
      {/* <rect x="0" y="0" width="200" height="200" fill="url(#gradient)" /> */}
      {/* <rect x="20" y="40" width="200" height="200" fill="url(#gradient)" /> */}
      {/* </svg> */}
      {/* <div>
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
      </div> */}
    </>
  )
}

export default memo(GradientStopMaker)

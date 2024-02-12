// utils/useStopProps.ts
import React, { useEffect, useState } from 'react'
// import { TStopProps } from "../components/UI/SVG/lib/drop/random-stop-color/stop-color";
// import { THslColorProps, TStopProps } from "../types";

export type THslColorProps = `hsl(${string}, ${string}%, ${string}%)`
export type THslArrayProps = [number, number, number]

type TStopProps = {
  offset: `${string}%`
  stopColor: THslColorProps
}

// A function that interpolates between two HSL colors
const interpolateHSL = (
  h1: number,
  s1: number,
  l1: number,
  h2: number,
  s2: number,
  l2: number,
  offset: number
): THslArrayProps => {
  // Clamp the offset between 0 and 1
  offset = Math.max(0, Math.min(1, offset))
  // Calculate the new hue, saturation, and lightness values
  let h = h1 + (h2 - h1) * offset
  let s = s1 + (s2 - s1) * offset
  let l = l1 + (l2 - l1) * offset
  // Return the new color HSL
  return [h, s, l]
}

// A custom React hook that generates an array of stop properties for a gradient
const useStopProps = (
  startColor: ReturnType<typeof interpolateHSL>,
  endColor: ReturnType<typeof interpolateHSL>
): TStopProps[] => {
  // Initialize the state of the stop properties with an empty array
  const [stopProps, setStopProps] = useState<TStopProps[]>([])

  // Use an effect to update the stop properties when the colors change
  useEffect(() => {
    // Parse the HSL values from the start and end colors
    const [h1, s1, l1]: ReturnType<typeof interpolateHSL> = startColor
    const [h2, s2, l2]: ReturnType<typeof interpolateHSL> = endColor
    // Define the number of steps for the gradient
    const steps = 55
    // Initialize an empty array for the new stop properties
    const newStopProps: TStopProps[] = []
    // Loop through the steps and generate a stop property for each one
    for (let i = 0; i < steps; i++) {
      // Calculate the offset percentage
      const offset = i / (steps - 1)
      // Interpolate the stop color
      const [newH, newS, newL] = interpolateHSL(h1, s1, l1, h2, s2, l2, offset)

      const stopColorStr: THslColorProps = `hsl(${newH}, ${newS}%, ${newL}%)`

      // Push the stop property to the array
      newStopProps.push({
        offset: `${offset * 100}%`,
        stopColor: stopColorStr,
      })
    }
    // Set the state of the stop properties with the new array
    setStopProps(newStopProps)
  }, [startColor, endColor])

  // Return the stop properties array from the hook
  return stopProps
}

export default useStopProps

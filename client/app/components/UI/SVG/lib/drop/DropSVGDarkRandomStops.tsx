'use client'

import { useState } from 'react'
import classes from './DropSVGDark.module.css'
import commonClasses from './common.module.css'

type TStopProps = {
  offset: `${string}%`
  stopColor: `hsl(${string})`
}

const INITIAL_STOP_PROPS_LIST: TStopProps[] = [
  {
    offset: '0%',
    stopColor: 'hsl(201.82, 100%, 10.78%)',
  },
  {
    offset: '3%',
    stopColor: 'hsl(201.82, 100%, 10.78%)',
  },
  {
    offset: '3%',
    stopColor: 'hsl(201.83, 100%, 10.95%)',
  },
  {
    offset: '6.1%',
    stopColor: 'hsl(201.83, 100%, 10.95%)',
  },
  {
    offset: '6.1%',
    stopColor: 'hsl(201.84, 100%, 11.13%)',
  },
  {
    offset: '9.1%',
    stopColor: 'hsl(201.84, 100%, 11.13%)',
  },
  {
    offset: '9.1%',
    stopColor: 'hsl(201.85, 100%, 11.31%)',
  },
  {
    offset: '12.1%',
    stopColor: 'hsl(201.85, 100%, 11.31%)',
  },
  {
    offset: '12.1%',
    stopColor: 'hsl(201.86, 100%, 11.48%)',
  },
  {
    offset: '15.2%',
    stopColor: 'hsl(201.86, 100%, 11.48%)',
  },
  {
    offset: '15.2%',
    stopColor: 'hsl(201.87, 100%, 11.66%)',
  },
  {
    offset: '18.2%',
    stopColor: 'hsl(201.87, 100%, 11.66%)',
  },
  {
    offset: '18.2%',
    stopColor: 'hsl(201.88, 100%, 11.84%)',
  },
  {
    offset: '21.2%',
    stopColor: 'hsl(201.88, 100%, 11.84%)',
  },
  {
    offset: '21.2%',
    stopColor: 'hsl(201.89, 100%, 12.01%)',
  },
  {
    offset: '24.2%',
    stopColor: 'hsl(201.89, 100%, 12.01%)',
  },
  {
    offset: '24.2%',
    stopColor: 'hsl(201.9, 100%, 12.19%)',
  },
  {
    offset: '27.3%',
    stopColor: 'hsl(201.9, 100%, 12.19%)',
  },
  {
    offset: '27.3%',
    stopColor: 'hsl(201.91, 100%, 12.37%)',
  },
  {
    offset: '30.3%',
    stopColor: 'hsl(201.91, 100%, 12.37%)',
  },
  {
    offset: '30.3%',
    stopColor: 'hsl(201.92, 100%, 12.54%)',
  },
  {
    offset: '33.3%',
    stopColor: 'hsl(201.92, 100%, 12.54%)',
  },
  {
    offset: '33.3%',
    stopColor: 'hsl(201.93, 100%, 12.72%)',
  },
  {
    offset: '36.4%',
    stopColor: 'hsl(201.93, 100%, 12.72%)',
  },
  {
    offset: '36.4%',
    stopColor: 'hsl(201.94, 100%, 12.9%)',
  },
  {
    offset: '39.4%',
    stopColor: 'hsl(201.94, 100%, 12.9%)',
  },
  {
    offset: '39.4%',
    stopColor: 'hsl(201.95, 100%, 13.07%)',
  },
  {
    offset: '42.4%',
    stopColor: 'hsl(201.95, 100%, 13.07%)',
  },
  {
    offset: '42.4%',
    stopColor: 'hsl(201.96, 100%, 13.25%)',
  },
  {
    offset: '45.5%',
    stopColor: 'hsl(201.96, 100%, 13.25%)',
  },
  {
    offset: '45.5%',
    stopColor: 'hsl(201.97, 100%, 13.43%)',
  },
  {
    offset: '48.5%',
    stopColor: 'hsl(201.97, 100%, 13.43%)',
  },
  {
    offset: '48.5%',
    stopColor: 'hsl(201.98, 100%, 13.6%)',
  },
  {
    offset: '51.5%',
    stopColor: 'hsl(201.98, 100%, 13.6%)',
  },
  {
    offset: '51.5%',
    stopColor: 'hsl(201.99, 100%, 13.78%)',
  },
  {
    offset: '54.5%',
    stopColor: 'hsl(201.99, 100%, 13.78%)',
  },
  {
    offset: '54.5%',
    stopColor: 'hsl(202, 100%, 13.96%)',
  },
  {
    offset: '57.6%',
    stopColor: 'hsl(202, 100%, 13.96%)',
  },
  {
    offset: '57.6%',
    stopColor: 'hsl(202.01, 100%, 14.13%)',
  },
  {
    offset: '60.6%',
    stopColor: 'hsl(202.01, 100%, 14.13%)',
  },
  {
    offset: '60.6%',
    stopColor: 'hsl(202.02, 100%, 14.31%)',
  },
  {
    offset: '63.6%',
    stopColor: 'hsl(202.02, 100%, 14.31%)',
  },
  {
    offset: '63.6%',
    stopColor: 'hsl(202.03, 100%, 14.49%)',
  },
  {
    offset: '66.7%',
    stopColor: 'hsl(202.03, 100%, 14.49%)',
  },
  {
    offset: '66.7%',
    stopColor: 'hsl(202.04, 100%, 14.66%)',
  },
  {
    offset: '69.7%',
    stopColor: 'hsl(202.04, 100%, 14.66%)',
  },
  {
    offset: '69.7%',
    stopColor: 'hsl(202.05, 100%, 14.84%)',
  },
  {
    offset: '72.7%',
    stopColor: 'hsl(202.05, 100%, 14.84%)',
  },
  {
    offset: '72.7%',
    stopColor: 'hsl(202.06, 100%, 15.02%)',
  },
  {
    offset: '75.8%',
    stopColor: 'hsl(202.06, 100%, 15.02%)',
  },
  {
    offset: '75.8%',
    stopColor: 'hsl(202.07, 100%, 15.19%)',
  },
  {
    offset: '78.8%',
    stopColor: 'hsl(202.07, 100%, 15.19%)',
  },
  {
    offset: '78.8%',
    stopColor: 'hsl(202.08, 100%, 15.37%)',
  },
  {
    offset: '81.8%',
    stopColor: 'hsl(202.08, 100%, 15.37%)',
  },
  {
    offset: '81.8%',
    stopColor: 'hsl(202.09, 100%, 15.55%)',
  },
  {
    offset: '84.8%',
    stopColor: 'hsl(202.09, 100%, 15.55%)',
  },
  {
    offset: '84.8%',
    stopColor: 'hsl(202.1, 100%, 15.72%)',
  },
  {
    offset: '87.9%',
    stopColor: 'hsl(202.1, 100%, 15.72%)',
  },
  {
    offset: '87.9%',
    stopColor: 'hsl(202.11, 100%, 15.9%)',
  },
  {
    offset: '90.9%',
    stopColor: 'hsl(202.11, 100%, 15.9%)',
  },
  {
    offset: '90.9%',
    stopColor: 'hsl(202.12, 100%, 16.08%)',
  },
  {
    offset: '93.9%',
    stopColor: 'hsl(202.12, 100%, 16.08%)',
  },
  {
    offset: '93.9%',
    stopColor: 'hsl(202.13, 100%, 16.25%)',
  },
  {
    offset: '97%',
    stopColor: 'hsl(202.13, 100%, 16.25%)',
  },
  {
    offset: '97%',
    stopColor: 'hsl(202.14, 100%, 16.43%)',
  },
  {
    offset: '100%',
    stopColor: 'hsl(202.14, 100%, 16.43%)',
  },
] as const

const DropSVGDarkRandomStops = () => {
  const [stopPropsList, setStopPropsList] = useState(INITIAL_STOP_PROPS_LIST)

  const reverseAndRender = () => {
    // Reverse the array and update the state
    setStopPropsList([...stopPropsList].reverse())
  }

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className={commonClasses.svg}
      >
        <defs>
          <linearGradient
            id="myGradientDarkRandomStops"
            className={commonClasses['linear-gradient']}
          >
            {stopPropsList.map((stopProps, index) => (
              <stop
                key={index}
                offset={stopProps.offset}
                stopColor={stopProps.stopColor}
              />
            ))}
          </linearGradient>
        </defs>
        <path
          id="abstractShape"
          className={commonClasses['drop-path']}
          d="M100,10 C145,70 160,120 100,190 C40,120 55,70 100,10 Z"
          fill="url(#myGradientDarkRandomStops)"
        />
      </svg>
      <button onClick={reverseAndRender}>Reverse Stops</button>
    </>
  )
}

export default DropSVGDarkRandomStops

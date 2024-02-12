'use client'

import { useCallback, useEffect, useReducer, useState } from 'react'
import classes from './DropSVGDarkRandomStops.module.css'

import { STOP_PROPS_LIST_START } from './stop-color'
import {
  EReducerActionType,
  TStopPropsState,
  stopPropsReducer,
} from './reducer'

/* Constants */
const DEFAULT_STOP_PROPS_FILLED_SET: TStopPropsState['stopPropsFilledSet'] = []

const getRandomInteger = (
  generatedIntegerList: TStopPropsState['stopPropsFilledSet'],
  max: number
) => {
  let randomNumber: number = -1 // Initialize with a value that is not in the list

  while (randomNumber === -1 || generatedIntegerList.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * max)
  }

  console.log(randomNumber)

  return randomNumber
}

const FIRST_RANDOM_INTEGER = getRandomInteger(
  DEFAULT_STOP_PROPS_FILLED_SET,
  STOP_PROPS_LIST_START.length
)

const DEFAULT_STOP_PROPS_STATE: TStopPropsState = {
  stopPropsList: STOP_PROPS_LIST_START,
  stopPropsFilledSet: DEFAULT_STOP_PROPS_FILLED_SET,
  randomNumber: FIRST_RANDOM_INTEGER,
  isStopColorTransitionEnded: false,
} as const

const DropSVGDarkRandomStops = () => {
  const [state, dispatch] = useReducer(
    stopPropsReducer,
    DEFAULT_STOP_PROPS_STATE
  )

  const reverseAndRender = useCallback(() => {
    dispatch({ type: EReducerActionType.REVERSE_ORDER })
  }, [])

  const changeColors = useCallback(() => {
    dispatch({ type: EReducerActionType.CHANGE_COLORS })
  }, [])

  useEffect(() => {
    const timeout: NodeJS.Timeout = setTimeout(() => {
      dispatch({
        type: EReducerActionType.SET_NEW_RANDOM_NUMBER,
        payload: {
          newNumber: getRandomInteger(
            state.stopPropsFilledSet,
            state.stopPropsList.length
          ),
        },
      })
      changeColors()
      console.log('is timeout still active?')
    }, state.randomNumber)

    if (state.isStopColorTransitionEnded) {
      console.log('final step')
      // console.log(state.stopPropsFilledSet.sort((a, b) => a - b))
      return clearTimeout(timeout)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [state.randomNumber, state.stopPropsList])

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
        className={classes.svg}
      >
        <defs>
          {/* <radialGradient */}
          <linearGradient
            id="myGradientDarkRandomStops"
            className={classes['linear-gradient']}
            // gradientTransform="rotate(90)"
          >
            {state.stopPropsList.map((stopProps, index) => (
              <stop
                key={index}
                offset={stopProps.offset}
                stopColor={stopProps.stopColor}
              />
            ))}
          </linearGradient>
          {/* </radialGradient> */}
        </defs>
        <path
          className={classes['drop-path']}
          d="M100,10 C145,70 160,120 100,190 C40,120 55,70 100,10 Z"
          fill="url(#myGradientDarkRandomStops)"
        />
      </svg>
      <button onClick={reverseAndRender}>Reverse Stops</button>
      <button onClick={changeColors}>Change Colors</button>
    </>
  )
}

export default DropSVGDarkRandomStops

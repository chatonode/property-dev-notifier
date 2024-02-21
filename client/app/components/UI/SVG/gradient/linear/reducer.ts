import { TStopProps, STOP_PROPS_LIST_END } from './stop-color'

// Define action types
export enum EReducerActionType {
  REVERSE_ORDER = 'reverse-order',
  CHANGE_COLORS = 'change-colors',
  SET_NEW_RANDOM_NUMBER = 'set-new-random-number',
  SET_IS_TRANSITION_ENDED = 'set-is-transition-ended',
}

export type TReducerAction =
  | {
      type: typeof EReducerActionType.REVERSE_ORDER
    }
  | { type: typeof EReducerActionType.CHANGE_COLORS }
  | {
      type: typeof EReducerActionType.SET_NEW_RANDOM_NUMBER
      payload: { newNumber: TStopPropsState['randomNumber'] }
    }
//   | {
//       type: typeof EReducerActionType.SET_IS_TRANSITION_ENDED
//       payload: {
//         isStopColorTransitionEnded: TStopPropsState['isStopColorTransitionEnded']
//       }
//     }

// type TStopPropsFilledSet<N extends number> = [boolean, ...boolean[]] & {
//   length: N
// }

export type TStopPropsState = {
  stopPropsList: Required<TStopProps>[] // & { isStopColorChanged?: boolean }
  stopPropsFilledSet: number[]
  randomNumber: number
  isStopColorTransitionEnded: boolean
}

// Reducer function
export const stopPropsReducer = (
  prevState: TStopPropsState,
  action: TReducerAction
) => {
  switch (action.type) {
    case EReducerActionType.REVERSE_ORDER:
      // Reverse the array and update the state
      return {
        ...prevState,
        stopPropsList: [...prevState.stopPropsList].reverse(),
      }
    case EReducerActionType.CHANGE_COLORS:
      let modified = false // Flag to track if any item is modified

      const updatedStopPropsList = prevState.stopPropsList.map(
        (prevStopProps, index) => {
          // Do nothing if already visited
          if (prevState.stopPropsFilledSet.includes(prevState.randomNumber)) {
            return {
              ...prevStopProps,
            }
          }

          // Do nothing if color has already changed
          if (
            prevStopProps.stopColor === STOP_PROPS_LIST_END[index]!.stopColor
          ) {
            return {
              ...prevStopProps,
            }
          }

          // Change the color when randomNumber matches
          if (index === prevState.randomNumber) {
            modified = true

            console.log('modification process:', prevStopProps.stopColor)
            return {
              offset: prevStopProps.offset,
              // stopColor: 'hsl(74, 73%, 51%)',
              // stopColor: generateRandomColor(),
              stopColor: STOP_PROPS_LIST_END[index]!.stopColor,
            }
          }

          // Else: do nothing
          return {
            ...prevStopProps,
          }
        }
      )

      console.log('modified?: ', modified)

      const updatedStopPropsFilledSet = [
        ...prevState.stopPropsFilledSet,
        prevState.randomNumber,
      ]

      const updatedIsStopColorTransitionEnded =
        updatedStopPropsFilledSet.length === updatedStopPropsList.length

      return {
        ...prevState,
        stopPropsList: modified
          ? updatedStopPropsList
          : [...prevState.stopPropsList],
        stopPropsFilledSet: modified
          ? updatedStopPropsFilledSet
          : [...prevState.stopPropsFilledSet],
        isStopColorTransitionEnded: modified
          ? updatedIsStopColorTransitionEnded
          : prevState.isStopColorTransitionEnded,
      }

    case EReducerActionType.SET_NEW_RANDOM_NUMBER:
      return { ...prevState, randomNumber: action.payload.newNumber }
    // case EReducerActionType.SET_IS_TRANSITION_ENDED:
    //   return {
    //     ...prevState,
    //     isStopColorTransitionEnded: action.payload.isStopColorTransitionEnded,
    //   }
    default:
      return { ...prevState }
  }
}

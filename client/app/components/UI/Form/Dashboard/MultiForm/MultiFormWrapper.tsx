import React, {
  ReactNode,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from 'react'

import classes from './MultiFormWrapper.module.css'

type MultiFormWrapperProps<TFormState, TReducerAction> = {
  formState: TFormState
  dispatch: React.Dispatch<TReducerAction>
  formComponents: ReactNode[]
  onSubmit: () => void
}

const GLOBAL_TRANSITION_DURATION = 260 as const

const MultiFormWrapper = <TFormState, TReducerAction>({
  formState,
  dispatch,
  formComponents,
  onSubmit,
}: MultiFormWrapperProps<TFormState, TReducerAction>) => {
  const [formStep, setFormStep] = useState<number>(1)
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false)

  const nextStep = useCallback(() => {
    setIsFadingOut(true)
    setTimeout(() => {
      setFormStep((prevStep) => prevStep + 1)
      setIsFadingOut(false)
    }, 500) // Adjust the timeout to match the transition duration
  }, [])

  const prevStep = useCallback(() => {
    setIsFadingOut(true)
    setTimeout(() => {
      setFormStep((prevStep) => Math.max(prevStep - 1, 1))
      setIsFadingOut(false)
    }, GLOBAL_TRANSITION_DURATION * 2) // Adjust the timeout to match the transition duration
  }, [])

  const isFirstStep = formStep === 1
  const isLastStep = formStep === formComponents.length

  const handleNextStep = () => {
    if (isLastStep) {
      onSubmit()
    } else {
      nextStep()
    }
  }

  /* Styles */
  //   const formComponentClasses = `${classes['form-step']}`
  const formComponentClasses = `${classes['form-step']} ${
    isFadingOut ? classes['fade-out'] : ''
  }`

  return (
    <>
      {/* Render your navigation buttons and progress indicators here */}
      <div className={classes.progressContainer}>
        <button
          className={classes.navigationButton}
          type="button"
          onClick={prevStep}
          disabled={isFirstStep || isFadingOut}
        >
          {'<'}
        </button>
        <div className={classes.progress}>
          <span>
            {formStep}/{formComponents.length}
          </span>
        </div>
        <button
          className={classes.navigationButton}
          type="button"
          onClick={handleNextStep}
          disabled={isLastStep || isFadingOut}
        >
          {/* {isLastStep ? 'Submit' : '>'} */}
          {'>'}
        </button>
      </div>

      {/* Render the current form component based on formStep */}
      <div className={formComponentClasses}>
        {React.Children.toArray(formComponents)[formStep - 1]}
      </div>
    </>
  )
}

export default MultiFormWrapper

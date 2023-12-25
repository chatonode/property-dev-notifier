'use client'

import { TMultiFormState } from './NotificationMultiForm'

type TFinalFormProps = {
  formState: TMultiFormState
  hasError: boolean
  onSubmit: () => void
}

const FinalForm = (props: TFinalFormProps) => {
  return (
    <div>
      <div>
        <h4>Finalize</h4>
        <p>
          Check the e-mail content and list of property developers to finalize
          sending your notification:
        </p>
        <div>{/* EmailContent */}</div>
        <div>{/* SelectedPropertyDevelopers */}</div>
      </div>
      <div>
        <button
          type="button"
          //   className={classes['send-button']}
          onClick={() => props}
          // disabled={multiFormState.firstStep === }
        >
          Cancel
        </button>
        <button
          type="button"
          //   className={classes['send-button']}
          onClick={() => props.onSubmit()}
          disabled={props.hasError ? true : undefined}
        >
          Send Notification
        </button>
      </div>
    </div>
  )
}

export default FinalForm

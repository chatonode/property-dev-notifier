'use client'

import { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'

import { TEmailData } from '@/app/types/types'

type TEmailFormProps = {
  currentContentState: TEmailData
  onSubmit: (content: TEmailData) => void
  // onReset: () => void
}

const EmailForm = (props: TEmailFormProps) => {
  const [emailFormState, setEmailFormState] = useState<TEmailData>({
    title: props.currentContentState.title,
    body: props.currentContentState.body,
  })

  console.log('Is email content being re-rendered?:', emailFormState)

  useEffect(() => {
    setEmailFormState({
      title: props.currentContentState.title,
      body: props.currentContentState.body,
    })
  }, [props.currentContentState])

  const setEmailTitleHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setEmailFormState((prevEmailFormState) => {
      return {
        ...prevEmailFormState,
        title: event.target.value,
      }
    })
  }

  const setEmailBodyHandler = (
    event: ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setEmailFormState((prevEmailFormState) => {
      return {
        ...prevEmailFormState,
        body: event.target.value,
      }
    })
  }

  const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()

    props.onSubmit({
      title: emailFormState.title,
      body: emailFormState.body,
    })

    // setEmailFormState({
    //   title: '',
    //   body: '',
    // })
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={emailFormState.title}
            onChange={setEmailTitleHandler}
          />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <textarea
            id="body"
            value={emailFormState.body}
            onChange={setEmailBodyHandler}
          />
        </div>
      </div>
      <button type="submit">Save Notification</button>
    </form>
  )
}

export default EmailForm

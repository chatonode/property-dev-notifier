'use client'

import {
  ChangeEvent,
  FormEvent,
  memo,
  use,
  useCallback,
  useEffect,
  useState,
} from 'react'

import { TEmailData } from '@/app/types/types'

import classes from './EmailForm.module.css'

type TEmailFormProps = {
  currentContentState: TEmailData
  onChange: (content: TEmailData) => void
  // onReset: () => void
}

const EmailForm = (props: TEmailFormProps) => {
  const [emailFormState, setEmailFormState] = useState<TEmailData>({
    title: props.currentContentState.title,
    body: props.currentContentState.body,
  })

  console.log('Is email content being re-rendered?:', emailFormState)

  const setEmailTitleHandler = useCallback(
    (event: ChangeEvent<HTMLInputElement>): void => {
      setEmailFormState((prevEmailFormState) => {
        return {
          ...prevEmailFormState,
          title: event.target.value,
        }
      })
    },
    []
  )

  const setEmailBodyHandler = useCallback(
    (event: ChangeEvent<HTMLTextAreaElement>): void => {
      setEmailFormState((prevEmailFormState) => {
        return {
          ...prevEmailFormState,
          body: event.target.value,
        }
      })
    },
    []
  )

  useEffect(() => {
    props.onChange(emailFormState)
  }, [emailFormState])

  // useEffect(() => {
  //   setEmailFormState({
  //     title: props.currentContentState.title,
  //     body: props.currentContentState.body,
  //   })
  // }, [props.currentContentState])

  // const submitHandler = (event: FormEvent<HTMLFormElement>): void => {
  //   event.preventDefault()

  //   props.onSubmit({
  //     title: emailFormState.title,
  //     body: emailFormState.body,
  //   })

  //   // setEmailFormState({
  //   //   title: '',
  //   //   body: '',
  //   // })
  // }

  return (
    <div className={classes.container}>
      <div className={classes['item-group']}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={emailFormState.title}
          onChange={setEmailTitleHandler}
        />
      </div>
      <div className={classes['item-group']}>
        <label htmlFor="body">Body</label>
        <textarea
          id="body"
          value={emailFormState.body}
          onChange={setEmailBodyHandler}
        />
      </div>
      {/* <button type="submit">Save Notification</button> */}
    </div>
  )
}

export default memo(EmailForm)

'use client'
import { useCallback, useReducer, useState } from 'react'

import classes from './NotificationMultiForm.module.css'

import {
  TEmailData,
  TPropertyDeveloper,
  TPropertyDevelopersList,
} from '@/app/types/types'
import PropertyDevelopersList from '../(Users)/PropertyDevelopers/PropertyDevelopersList'
import EmailForm from './EmailForm'
import { buildClientSender } from '@/app/api/(axios)/client/build-client-sender'
import FinalForm from './FinalForm'
import { redirect, useRouter } from 'next/navigation'
import { ELoginErrorParam, ERoute } from '@/app/types/enums'
import FormWrapper from '../UI/Form/Dashboard/FormWrapper'
import MultiFormWrapper from '../UI/Form/Dashboard/MultiForm/MultiFormWrapper'
import { useAsyncError } from '@/app/hooks/useAsyncError'
import BadRequestError from '@/app/lib/errors/BadRequestError'
import logUserOutFromClient from '@/app/api/(client)/auth/logout'

/*  Types & Enums */
type NotificationMultiFormProps = {
  propertyDevelopers: TPropertyDevelopersList
}

export type TMultiFormState = {
  firstStep: {
    content: TEmailData
  }
  secondStep: {
    propertyDevelopers: TPropertyDevelopersList
  }
}

enum EReducerActionType {
  SET_NOTIFICATION_CONTENT = 'set-notification-content',
  RESET_NOTIFICATION_CONTENT = 'reset-notification-content',
  SET_SELECTED_PROPERTY_DEVELOPERS = 'set-selected-property-developers',
  RESET_SELECTED_PROPERTY_DEVELOPERS = 'reset-selected-property-developers',
  RESET_MULTI_FORM = 'reset-multi-form',
}

type TReducerAction =
  | {
      type: typeof EReducerActionType.SET_NOTIFICATION_CONTENT
      payload: TEmailData
    }
  | { type: typeof EReducerActionType.RESET_NOTIFICATION_CONTENT }
  | {
      type: typeof EReducerActionType.SET_SELECTED_PROPERTY_DEVELOPERS
      payload: { selectedPropertyDevelopers: TPropertyDevelopersList }
    }
  | { type: typeof EReducerActionType.RESET_SELECTED_PROPERTY_DEVELOPERS }
  | { type: typeof EReducerActionType.RESET_MULTI_FORM }

/* Constants */
const DEFAULT_MULTI_FORM_STATE: TMultiFormState = {
  firstStep: {
    content: {
      title: '',
      body: '',
    },
  },
  secondStep: {
    propertyDevelopers: [],
  },
} as const

const notificationMultiFormReducer = (
  prevMultiFormState: TMultiFormState,
  action: TReducerAction
): TMultiFormState => {
  switch (action.type) {
    case EReducerActionType.SET_NOTIFICATION_CONTENT:
      return {
        ...prevMultiFormState,
        firstStep: {
          content: {
            title: action.payload.title,
            body: action.payload.body,
          },
        },
      }
    case EReducerActionType.RESET_NOTIFICATION_CONTENT:
      return {
        ...prevMultiFormState,
        firstStep: {
          content: {
            title: DEFAULT_MULTI_FORM_STATE.firstStep.content.title,
            body: DEFAULT_MULTI_FORM_STATE.firstStep.content.body,
          },
        },
      }
    case EReducerActionType.SET_SELECTED_PROPERTY_DEVELOPERS:
      return {
        ...prevMultiFormState,
        secondStep: {
          propertyDevelopers: action.payload.selectedPropertyDevelopers,
        },
      }
    case EReducerActionType.RESET_SELECTED_PROPERTY_DEVELOPERS:
      return {
        ...prevMultiFormState,
        secondStep: {
          propertyDevelopers:
            DEFAULT_MULTI_FORM_STATE.secondStep.propertyDevelopers,
        },
      }
    case EReducerActionType.RESET_MULTI_FORM:
      return {
        firstStep: {
          content: {
            title: DEFAULT_MULTI_FORM_STATE.firstStep.content.title,
            body: DEFAULT_MULTI_FORM_STATE.firstStep.content.body,
          },
        },
        secondStep: {
          propertyDevelopers:
            DEFAULT_MULTI_FORM_STATE.secondStep.propertyDevelopers,
        },
      }
    default:
      return {
        ...prevMultiFormState,
      }
  }
}

const NotificationMultiForm = (props: NotificationMultiFormProps) => {
  const [multiFormState, dispatch] = useReducer(
    notificationMultiFormReducer,
    DEFAULT_MULTI_FORM_STATE
  )
  const router = useRouter()
  const throwError = useAsyncError()

  // console.log('Hello NotificationMultiForm!:', multiFormState)

  const emailFormTitleIsEmpty =
    multiFormState.firstStep.content.title ===
    DEFAULT_MULTI_FORM_STATE.firstStep.content.title
  const emailFormBodyIsEmpty =
    multiFormState.firstStep.content.body ===
    DEFAULT_MULTI_FORM_STATE.firstStep.content.body
  const emailFormContentIsEmpty = emailFormTitleIsEmpty || emailFormBodyIsEmpty
  const propertyDevelopersListIsEmpty =
    multiFormState.secondStep.propertyDevelopers.length ===
    DEFAULT_MULTI_FORM_STATE.secondStep.propertyDevelopers.length
  const formIsEmpty = emailFormContentIsEmpty && propertyDevelopersListIsEmpty
  const formIsPartiallyEmpty =
    emailFormContentIsEmpty || propertyDevelopersListIsEmpty

  const setEmailContentHandler = (content: TEmailData) => {
    dispatch({
      type: EReducerActionType.SET_NOTIFICATION_CONTENT,
      payload: {
        title: content.title,
        body: content.body,
      },
    })
  }

  const setPropertyDevelopersListHandler = (
    selectedPropertyDeveloperIds: string[]
  ) => {
    const selectedPropertyDevelopers: TPropertyDevelopersList =
      selectedPropertyDeveloperIds
        .map((selectedPropertyDeveloperId) => {
          const selectedDeveloper = props.propertyDevelopers.find(
            (propertyDeveloper) =>
              propertyDeveloper.id === selectedPropertyDeveloperId
          )

          return selectedDeveloper as TPropertyDeveloper
        })
        .filter(Boolean) // For deleting undefined

    dispatch({
      type: EReducerActionType.SET_SELECTED_PROPERTY_DEVELOPERS,
      payload: {
        selectedPropertyDevelopers,
      },
    })
  }

  const resetMultiFormHandler = () => {
    dispatch({ type: EReducerActionType.RESET_MULTI_FORM })
  }

  const sendNotificationHandler = async () => {
    if (formIsEmpty) {
      // return (
      //   <div>
      //     <p>Form Is Empty!</p>
      //   </div>
      // )
      console.log('Form is Empty! Handle Here!!!')
    }

    console.log(
      'Sending notification emails to:',
      multiFormState.secondStep.propertyDevelopers
    )
    const axiosSender = buildClientSender()

    const propertyDeveloperIds =
      multiFormState.secondStep.propertyDevelopers.map(
        (propertyDeveloper) => propertyDeveloper.id
      )
    try {
      const response = await axiosSender.post(
        '/api/users/property-developers/notifications',
        {
          content: {
            title: multiFormState.firstStep.content.title,
            body: multiFormState.firstStep.content.body,
          },
          propertyDeveloperIds: [...propertyDeveloperIds],
        }
      )

      if (response.status === 400) {
        throwError(new BadRequestError(response.data.errors[0].message))
      }

      if (response.status === 401) {
        await logUserOutFromClient()
        return router.replace(
          `${ERoute.Login}?error=${ELoginErrorParam.InvalidToken}`
        )
      }

      if (response.status !== 206) {
        throwError('Notifying Failed!')
      }

      const data = await response.data

      console.log('response data:', data)
    } catch (error) {
      throwError(error)
    }

    dispatch({
      type: EReducerActionType.RESET_MULTI_FORM,
    })

    // redirect(ERoute.Welcome)
  }

  return (
    <FormWrapper>
      <MultiFormWrapper
        // formState={multiFormState}
        // dispatch={dispatch}
        formComponents={[
          <EmailForm
            currentContentState={multiFormState.firstStep.content}
            // onSubmit={setEmailContentHandler}
            onChange={setEmailContentHandler}
          />,
          <PropertyDevelopersList
            propertyDevelopers={props.propertyDevelopers}
            selectedPropertyDevelopers={
              multiFormState.secondStep.propertyDevelopers
            }
            onChange={setPropertyDevelopersListHandler}
          />,
          <FinalForm
            formState={multiFormState}
            hasError={formIsPartiallyEmpty}
            onSubmit={sendNotificationHandler}
          />,
        ]}
        onSubmit={sendNotificationHandler}
      />
    </FormWrapper>
  )
}

export default NotificationMultiForm

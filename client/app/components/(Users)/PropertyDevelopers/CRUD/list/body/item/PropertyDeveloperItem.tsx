'use client'

import { FormEvent, memo, useCallback, useEffect, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { EFormType, ERoute } from '@/app/types/enums'
import { TFormDataType, TPropertyDeveloper } from '@/app/types/types'

import classes from './PropertyDeveloperItem.module.css'
import useLongPress from '@/app/hooks/useLongPress'
import { GLOBAL_TRANSITION_DURATION } from '@/app/types/styles'
import DashboardModalWrapper from '@/app/components/(Layout)/(dashboard)/Body/Modal/DashboardModalWrapper'
import EditPropertyDeveloperFormElements from './edit/EditPropertyDeveloperFormElements'
import { SubmitHandler, useForm } from 'react-hook-form'
import InvalidFormInputsError from '@/app/lib/errors/InvalidFormInputsError'
import { buildClientSender } from '@/app/api/(axios)/client/build-client-sender'
import { useAsyncError } from '@/app/hooks/useAsyncError'
import BadRequestError from '@/app/lib/errors/BadRequestError'

import {
  fullNameOptions,
  emailOptions,
} from '@/config/form/options/users/property-developers/edit'

type TPropertyDeveloperItemProps = {
  developer: TPropertyDeveloper
  isExpanded: boolean
}

const PropertyDeveloperItem = ({
  developer,
  isExpanded,
}: // onClick,
TPropertyDeveloperItemProps) => {
  const throwError = useAsyncError()
  const router = useRouter()
  const [onTransition, setOnTransition] = useState<boolean>(false)
  // Use react-hook-form's useForm hook
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<TFormDataType[EFormType.EDIT_PROPERTY_DEVELOPER]>({
    mode: 'onSubmit', // Trigger validation on submit
    shouldUnregister: true, // Unregister inputs onUnmount
    defaultValues: developer, // Use developer as default values
  })

  const itemClassNames = `${classes.item} ${
    isExpanded ? ` ${classes.expanded}` : ''
  }${onTransition ? ` ${classes.transitioning}` : ''}`

  const toggleItemHandler = useCallback(() => {
    setOnTransition(true)
  }, [])

  const longPressHandlers = !isExpanded
    ? useLongPress({
        callback: toggleItemHandler,
      })
    : undefined

  useEffect(() => {
    if (onTransition) {
      const transitionInterval = setTimeout(() => {
        // setOnTransition(false)

        if (isExpanded) {
          router.push(ERoute.PropertyDevelopers)
        } else {
          router.push(`${ERoute.PropertyDevelopers}/${developer.id}`)
        }
      }, GLOBAL_TRANSITION_DURATION)
      return () => clearTimeout(transitionInterval)
    }
  }, [onTransition])

  const onSubmit: SubmitHandler<
    TFormDataType[EFormType.EDIT_PROPERTY_DEVELOPER]
  > = async (data) => {
    if (!isValid) {
      throw new InvalidFormInputsError()
    }

    const axiosSender = buildClientSender()

    try {
      const response = await axiosSender.put(
        '/api/users/property-developers',
        data
      )

      if (response.status === 400) {
        throwError(new BadRequestError(response.data.errors[0].message))
      }

      if (response.status !== 200) {
        throw new Error('Editing Property Developer Failed!')
      }
    } catch (error: any) {
      // console.error('EditPropertyDeveloper error response: ', error)
      throw error
    }

    // Reset form
    reset()
  }

  return (
    <>
      <div
        className={itemClassNames}
        onClick={!isExpanded ? toggleItemHandler : undefined}
        {...longPressHandlers}
      >
        {!isExpanded && (
          <>
            <div className={classes['user-info']}>
              <h4 className={classes['full-name']}>{developer.fullName}</h4>
              <span className={classes.email}>{developer.email}</span>
            </div>
            <div className={classes.actions}>
              <div>.</div>
              <div>.</div>
              <div>.</div>
            </div>
          </>
        )}
      </div>
      {isExpanded && (
        <DashboardModalWrapper
          title="Update Property Developer"
          onClose={toggleItemHandler}
          onSubmit={handleSubmit(onSubmit)}
        >
          <EditPropertyDeveloperFormElements developer={developer} />
          {/* ********
            TODO: Pass options to inputs:
            - {...register('fullName', fullNameOptions)}
            - {...register('email', emailOptions)}
            ******** */}
        </DashboardModalWrapper>
      )}
    </>
  )
}

export default memo(PropertyDeveloperItem)

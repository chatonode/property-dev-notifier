import { type RegisterOptions } from 'react-hook-form'

import { EFormType } from '@/app/types/enums'
import { TFormDataType } from '@/types/types'

export const emailOptions: RegisterOptions<
  TFormDataType[EFormType.SIGNUP],
  'email'
> = {
  required: {
    value: true,
    message: 'Email cannot be empty.',
  },
  minLength: {
    value: 10,
    message: 'Email must have more than 10 characters.',
  },
  maxLength: {
    value: 40,
    message: 'Email characters cannot be greater than 40.',
  },
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'E-mail must be valid.',
  },
} as const

export const passwordOptions: RegisterOptions<
  TFormDataType[EFormType.SIGNUP],
  'password'
> = {
  required: {
    value: true,
    message: 'Password cannot be empty.',
  },
  minLength: {
    value: 8,
    message: 'Password must have more than 8 characters.',
  },
  maxLength: {
    value: 30,
    message: 'Password characters cannot be greater than 30.',
  },
} as const

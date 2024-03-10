import { EFormType } from '@/app/types/enums'
import { TFormDataType } from '@/types/types'
import { RegisterOptions } from 'react-hook-form'

export const fullNameOptions: RegisterOptions<
  TFormDataType[EFormType.CREATE_PROPERTY_DEVELOPER],
  'fullName'
> = {
  required: 'Full Name cannot be empty.',
  minLength: {
    value: 3,
    message: 'Full Name must have more than 3 characters.',
  },
  maxLength: {
    value: 30,
    message: 'Full Name characters cannot be greater than 30.',
  },
} as const

export const emailOptions: RegisterOptions<
  TFormDataType[EFormType.CREATE_PROPERTY_DEVELOPER],
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

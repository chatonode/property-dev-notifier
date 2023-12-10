import { EFormType } from './enums'

// Define a generic FormData type that can hold various form field values.
type TFormData<T = Record<string, string | Blob>> = {
  [K in keyof T]: T[K]
  // - This line uses TypeScript's mapped types to iterate over each property (field) K in the generic object T.
  // - [K in keyof T] creates a new type with the same keys as T but with different values.
  // - T[K] represents the type of the value associated with the key K in the generic object T.
  // - So, [K in keyof T]: T[K] ensures that the resulting type has the same keys as T but enforces the same value types as T[K].
}

// Define a map for bounding enum & Type
export type TFormDataType = {
  [EFormType.SIGNUP]: TSignupFormData
  [EFormType.LOGIN]: TLoginFormData
}

// Define a type for signup form data, specifying the expected fields and their types.
type TSignupFormData = TFormData<{
  // username: string
  email: string
  password: string
}>

// Define a type for login form data, specifying the expected fields and their types.
type TLoginFormData = TFormData<{
  email: string
  password: string
}>

export type TEmailData = {
  title: string
  body: string
}

export type TPropertyDeveloper = {
  fullName: string
  createdBy: string
  notifications: []
  email: string
  status: string
  userType: string
  createdAt: string
  updatedAt: string
  version: number
  id: string
}

export type TPropertyDevelopersList = TPropertyDeveloper[]

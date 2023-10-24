import React from 'react'

import { InputType } from '@/app/types/enums'
import { InputState, InputProps } from '@/app/types/types'

function Input<T>({ label, inputState, onChange, onBlur }: InputProps<T>) {
  console.log('INPUT VALUE:', inputState)
  return (
    <div>
      <label>{label}</label>
      <input
        type="text" // You can customize the type as needed
        value={inputState.value as string}
        onChange={(e) => onChange(e.target.value as T)}
        onBlur={onBlur}
        onFocus={() => (inputState.isFocused = true)}
      />
    </div>
  )
}

export default Input

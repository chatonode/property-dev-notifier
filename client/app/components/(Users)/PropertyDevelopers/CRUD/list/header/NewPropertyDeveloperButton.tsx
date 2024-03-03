'use client'

import { memo, useCallback } from 'react'

type TNewPropertyDeveloperButtonProps = {
  className: string
}

const NewPropertyDeveloperButton = (
  props: TNewPropertyDeveloperButtonProps
) => {
  const newUserHandler = useCallback(() => {
    console.log('Creating new user...')
  }, [])

  return (
    <span className={props.className} onClick={newUserHandler}>
      +<p>New</p>
    </span>
  )
}

export default memo(NewPropertyDeveloperButton)

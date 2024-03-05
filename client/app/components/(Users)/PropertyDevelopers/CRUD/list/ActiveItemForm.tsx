'use client'

import {
  memo,
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  useCallback,
} from 'react'

import classes from './ActiveItemForm.module.css'
import { TPropertyDeveloper } from '@/app/types/types'

type TActiveItemFormProps = {
  developer: TPropertyDeveloper
  //   onUpdateDeveloper: (updatedDeveloper: TPropertyDeveloper) => void
  onCancel: () => void
}

const ActiveItemForm = ({
  developer,
  //   onUpdateDeveloper,
  onCancel,
}: TActiveItemFormProps) => {
  const [editedDeveloper, setEditedDeveloper] =
    useState<TPropertyDeveloper>(developer)

  useEffect(() => {
    // Reset the editedDeveloper state when developer prop changes
    setEditedDeveloper(developer)
  }, [developer])

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEditedDeveloper((prevDeveloper) => ({ ...prevDeveloper, [name]: value }))
  }, [])

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    // Call the onUpdateDeveloper function to update the developer values
    // onUpdateDeveloper(editedDeveloper)
    console.log('editedDeveloper: ', editedDeveloper)
  }, [])

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes.inputs}>
        <label htmlFor="fullName">
          Full Name:
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={editedDeveloper.fullName}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="text"
            id="email"
            name="email"
            value={editedDeveloper.email}
            onChange={handleInputChange}
          />
        </label>
        <div className={classes.status}>
          <label>Status: </label>

          {/* TODO: loop with map and gather all the status enum values */}
          <input
            type="radio"
            id="notVerified"
            name="notVerified"
            value={editedDeveloper.status}
            onChange={handleInputChange}
          />
          <label htmlFor="notVerified">NOT VERIFIED</label>
        </div>
      </div>
      <div className={classes.metadata}>
        <label>
          Created By:
          <span>{developer.createdBy}</span>
        </label>
        <label>
          Notifications:
          <span>{JSON.stringify(developer.notifications)}</span>
        </label>
        <label>
          User Type:
          <span>{developer.userType}</span>
        </label>
        <label>
          Created At:
          <span>{developer.createdAt}</span>
        </label>
        <label>
          Updated At:
          <span>{developer.updatedAt}</span>
        </label>
        <label>
          Version:
          <span>{developer.version}</span>
        </label>
        <label>
          ID:
          <span>{developer.id}</span>
        </label>
      </div>
      {/* Add more fields as needed */}
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit">Save Changes</button>
      </div>
    </form>
  )
}

export default memo(ActiveItemForm)

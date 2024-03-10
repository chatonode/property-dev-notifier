'use client'

import { memo, useState, useEffect, ChangeEvent, useCallback } from 'react'

import classes from './EditPropertyDeveloperFormElements.module.css'
import { TPropertyDeveloper } from '@/app/types/types'

import {
  emailOptions,
  fullNameOptions,
} from '@/app/config/form/options/users/property-developers/edit'

type TEditPropertyDeveloperFormElementsProps = {
  developer: TPropertyDeveloper
  // TODO:
  // Pass them to input elements
  // options: {
  //   fullNameOptions: typeof fullNameOptions
  //   emailOptions: typeof emailOptions
  // }

  // *******
  // onChange: (changedDeveloper: TPropertyDeveloper) => void
}

const EditPropertyDeveloperFormElements = ({
  developer,
}: // onChange,
TEditPropertyDeveloperFormElementsProps) => {
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

  return (
    <>
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
      {/* <div className={classes.metadata}>
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
        </div> */}
    </>
  )
}

export default memo(EditPropertyDeveloperFormElements)

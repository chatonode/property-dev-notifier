'use client'

import { useState, useEffect } from 'react'
import { Poppins } from 'next/font/google'

import { TPropertyDevelopersList } from '@/app/types/types'

import classes from './PropertyDevelopersList.module.css'

type TPropertyDevelopersListProps = {
  propertyDevelopers: TPropertyDevelopersList
  selectedPropertyDevelopers: TPropertyDevelopersList | []
  onChange: (propertyDeveloperIds: string[]) => void
  // TODO
  // onReset: () => void
}

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

const PropertyDevelopersList = (props: TPropertyDevelopersListProps) => {
  const [selectedDeveloperIds, setSelectedDeveloperIds] = useState<string[]>(
    props.selectedPropertyDevelopers.map((propDev) => propDev.id)
  )
  console.log('hello selected developers!:', selectedDeveloperIds)

  const handleCheckboxChange = (developerId: string) => {
    const isSelected = selectedDeveloperIds.includes(developerId)

    if (isSelected) {
      setSelectedDeveloperIds((prevSelected) =>
        prevSelected.filter((id) => id !== developerId)
      )
    } else {
      setSelectedDeveloperIds((prevSelected) => [...prevSelected, developerId])
    }
  }

  useEffect(() => {
    props.onChange(selectedDeveloperIds)
  }, [selectedDeveloperIds])

  // const setSelectedDeveloperIdsHandler = () => {
  //   props.onSubmit(selectedDevelopers)
  // }

  const resetSelectedDeveloperIdsHandler = () => {
    setSelectedDeveloperIds([])

    // TODO
    // props.onReset()
  }

  return (
    <div className={classes.body}>
      <div className={classes.container}>
        <h4 className={classes.title}>Select Property Developers:</h4>
        {/*<div>
         <button
          className={classes['send-button']}
          type="button"
          onClick={setSelectedDeveloperIdsHandler}
          disabled={selectedDeveloperIds.length === 0}
        >
          Save List
        </button> 
        </div>*/}
        {/*<ul className={`${classes['developer-list']} ${poppins.className}`}>
        {props.propertyDevelopers.map((propertyDeveloper) => {
          const isSelected = selectedDeveloperIds.includes(propertyDeveloper.id)

          return (
            <li
              key={propertyDeveloper.id}
              className={`${classes['developer-card']}${
                isSelected ? ` ${classes.checked}` : ''
              }`}
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleCheckboxChange(propertyDeveloper.id)}
              />
              <div className={classes['developer-header']}>
                <h3 className={classes['developer-name']}>
                  {propertyDeveloper.fullName}
                </h3>
                <p className={classes['developer-email']}>
                  {propertyDeveloper.email}
                </p>
              </div>
            </li>
          )
        })}
      </ul> */}
        <div>
          <button
            className={classes.button}
            // onClick={handleSelectAll}
          >
            Select All
          </button>
          <button
            className={`${classes.button} ${classes.unselectAll}`}
            // onClick={handleUnselectAll}
          >
            Unselect All
          </button>
        </div>
        <ul className={`${classes.userList} ${poppins.className}`}>
          {props.propertyDevelopers.map((propertyDeveloper) => {
            const isSelected = selectedDeveloperIds.includes(
              propertyDeveloper.id
            )

            return (
              <li key={propertyDeveloper.id} className={classes.listItem}>
                <input
                  type="checkbox"
                  id={propertyDeveloper.id}
                  className={classes.input}
                  checked={isSelected}
                />
                <label htmlFor={propertyDeveloper.id} className={classes.label}>
                  <strong>Full Name:</strong> {propertyDeveloper.fullName}
                  <br />
                  <strong>Email:</strong> {propertyDeveloper.email}
                </label>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default PropertyDevelopersList

import React from 'react'
import { FieldSelectProps } from './Field'

export const SelectField = ({ onSelect, fieldValue, options }: FieldSelectProps) => {
  return <select onChange={onSelect} defaultValue={fieldValue}>
    {options && options.map(option =>
      <option key={option.value} value={option.value}>
        {option.label}
      </option>)
    }
  </select>
}
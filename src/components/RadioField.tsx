import React from 'react'
import { FieldProps } from './Field'

export const RadioField = ({ onChange, fieldValue, name }: FieldProps) =>
  <input type="radio" onChange={onChange} defaultValue={fieldValue} name={name} />
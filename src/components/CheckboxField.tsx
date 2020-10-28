import React from 'react'
import { FieldProps } from './Field'

export const CheckboxField = ({ onChange, fieldValue }: FieldProps) =>
  <input type="checkbox" onChange={onChange} defaultValue={fieldValue} />
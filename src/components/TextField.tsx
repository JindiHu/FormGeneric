import React from 'react'
import { FieldProps } from './Field'

export const TextField = ({ onChange, fieldValue, validationRule }: FieldProps) =>
  <input 
    type="text"
    onChange={onChange}
    defaultValue={fieldValue}
    pattern={validationRule}
  />
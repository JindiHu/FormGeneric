import React from 'react'
import { FielTextareaProps } from './Field'

export const TextAreaField = ({ onTextAreaChange, fieldValue }: FielTextareaProps) =>
  <textarea onBlur={onTextAreaChange} defaultValue={fieldValue} />
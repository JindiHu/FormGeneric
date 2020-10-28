import React, { useContext } from 'react'
import { FormContext } from './Form'
import { TextField } from './TextField'
import { CheckboxField } from './CheckboxField'
import { RadioField } from './RadioField'
import { SelectField } from './SelectField'
import { TextAreaField } from './TextAreaField'

export type FieldType = 'text' | 'checkbox' | 'radio' | 'select' | 'textarea'

type Props = {
  fieldName: string,
  type: FieldType,
  label?: string,
  id?: string,
  name?: string,
  validationRule?: string,
  options?: Array<{ value: string | number, label: string }>
}

export type FieldProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  fieldValue: string,
  id?: string,
  name?: string,
  validationRule?: string
}

export type FieldSelectProps = {
  onSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  fieldValue: string,
  id?: string,
  name?: string,
  placeholder?: string,
  options?: Array<{ value: string | number, label: string }>
}

export type FielTextareaProps = {
  onTextAreaChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void,
  fieldValue: string,
  id?: string,
  name?: string,
  placeholder?: string,
}
/**
 * Field is responsible for rendering proper type of the field and 
 * have a connection to the Context itself
 * WIP: Validation
 * @param fieldName, label, type, options, id, name, validationRule - Props 
 */
const Field = ({ fieldName, label, type, options, id, name, validationRule }: Props) => {
  const { state, setState, onFieldChange } = useContext(FormContext)
  const fieldValue = state ? state[fieldName] : ''

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked ? e.target.checked : e.target.value
    if (typeof value === 'string' && validationRule) {
      if (RegExp(validationRule).test(value)) {
        setState({
          errors: { ...state.errors,
            [fieldName]: null
          }
        })
      } else {
        const errors = {
          errors: { ...state.errors,
            fieldName: `Field ${fieldName} didn't pass the validationRule: ${validationRule}`
          }
        }
        console.log('asdas', errors)
        setState({ ...state, errors})
      }
    }

    onFieldChange(fieldName, type, value, name)
  }

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFieldChange(fieldName, type, e.target.value, name)
  }

  const onTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onFieldChange(fieldName, type, e.target.value, name)
  }

  const getComponent = () => {
    if (type === 'text') {
      return <TextField onChange={onChange} fieldValue={fieldValue} id={id} validationRule={validationRule} />
    }

    if (type === 'checkbox') {
      return <CheckboxField onChange={onChange} fieldValue={fieldValue} id={id} />
    }

    if (type === 'radio') {
      return <RadioField onChange={onChange} fieldValue={fieldValue} id={id} name={name} />
    }

    if (type === 'select') {
      return <SelectField onSelect={onSelect} fieldValue={fieldValue} id={id} options={options} />
    }

    if (type === 'textarea') {
      return <TextAreaField onTextAreaChange={onTextAreaChange} fieldValue={fieldValue} id={id} />
    }
  }

  return (<div>
    {label && <label htmlFor={fieldName}>{label}</label>}
    {getComponent()}
  </div>)
}

export default Field
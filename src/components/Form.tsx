import React, { createContext, useState } from 'react'

type State = {
  state: { [key: string]: any, errors: {} },
  setState: React.Dispatch<React.SetStateAction<any>>,
  onFieldChange: Function,
  onSubmit: Function,
}

type FormProps = {
  onSubmitForm: (state: { [key: string]: any, errors: {} }) => void,
  children: React.ReactNode
}

export const FormContext = createContext<State>({
  state: { errors: {} },
  setState: () => {},
  onFieldChange: () => {},
  onSubmit: (state: { [key: string]: any, errors: {} }) => state,
})

const Form = ({ onSubmitForm, children }: FormProps) => {
  const [state, setState] = useState({ errors: {} })

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    onSubmitForm(state)
    setState({ errors: {} })
  }

  const onFieldChange = (fieldName: string, type: string, value: string, name?: string) => {
    let newFieldName = type === 'radio' && name ? name : fieldName 

    setState({ 
      ...state,
      [newFieldName]: { value, type, fieldName, name }
    })
  }

  return (
    <FormContext.Provider value={{ state, setState, onFieldChange, onSubmit }}>
      <form onSubmit={onSubmit}>
        {children}

        {/* {state.errors && Object.keys(state.errors).map((field: string) => {
          // const err = state.errors[field] as any
          console.log(err)
          // return state.errors[field] && 
          //   <p key={state.errors[field]} style={{ color: 'red' }}>
          //     {state.errors[field]}
          //   </p>
        })} */}
      </form>
    </FormContext.Provider>
  );
}

export default Form
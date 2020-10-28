import React, { useContext } from 'react'
import { FormContext } from './Form'

const SubmitButton = ({ children }: { children: string }) => {
  const { state, onSubmit } = useContext(FormContext)

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    onSubmit(e, state)
  }

  return (<button onClick={onClick}>Submit</button>)
}

export default SubmitButton
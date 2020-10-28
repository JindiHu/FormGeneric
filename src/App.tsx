import React from 'react'
import Form from './components/Form'
import Field from './components/Field'
import FieldGroup from './components/FieldGroup'
import SubmitButton from './components/SubmitButton'
import './App.css'
// App that demostrates how Form components works
function App() {
  const selectOptions = [
    { value: 1, label: 'First' },
    { value: 2, label: 'Second' },
    { value: 3, label: 'Third' },
    { value: 4, label: 'Fourth' },
    { value: 5, label: 'Fifth' },
  ]

  const onSubmit = (state: { [key: string]: any }) => {
    console.log('State: ', state)
  }

  return (
    <div className="Form">
      <Form onSubmitForm={onSubmit}>
        <Field type="text" fieldName="text" validationRule={'[A-Za-z]{3}'} />
        <Field type="text" fieldName="text2" />
        <FieldGroup>
          <Field type="radio" fieldName="Weirdo1" name={'weirdo'} label={'Weirdo1'} />
          <Field type="radio" fieldName="Weirdo2" name={'weirdo'} label={'Weirdo2'} />
          <Field type="radio" fieldName="Weirdo3" name={'weirdo'} label={'Weirdo3'} />
        </FieldGroup>
        <Field type="checkbox" fieldName="checkbox" label={'Weirdo'} />
        <Field type="select" fieldName="select" options={selectOptions} />
        <Field type="textarea" fieldName="textarea" />

        <SubmitButton>Submit</SubmitButton>
      </Form>
    </div>
  );
}

export default App

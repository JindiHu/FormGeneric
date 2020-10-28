# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation & Run

### Run `npm install` to install dependencies

### Run `npm start` to see the project

### `<Form />` description:

```js
// Expect to receive onSubmitForm callback to return the state of the form
// Is resposible for the state management and provide the context for the <Field />
<Form onSubmitForm={onSubmit}>
```

### `<Field />` description:

```js
// Is resposible for the rendering specific field and update the Form
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
```

Props for the `<Field />`:

- _type_:

  - `text` / `radio` / `checkbox` will create `<input type={type}>`,
  - `select` will create `<select options={options}>`,
  - `textarea` will create `<textarea />`

- _fieldName_: will create a separate property in the state that would be returned `onSubmit`
- _validationRule?_: optional field, that si validating text inputs only (WIP)
- _options?_: optional field, that expect to receive { value, field } options array for select
- _name?_: optional field for input name
- _label?_: optional field for label
- _id?_: optional field for id

### `<FieldGroup />` description:

```js
// Expect to receive isColumn optional property that use flex-direction: column to the parent
<FieldGroup isColumn={'true'}>
```

### Field types:

- _TextField_: `<input type="text" />`
- _CheckboxField_:` <input type="checkbox" />`
- _RadioField_: `<input type="radio" />`
- _SelectField_: `<select><option></option></select>`
- _TextAreaField_: `<textarea>`

## Available Scripts (Default)

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

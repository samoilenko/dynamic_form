import React, { useState } from 'react'
import './App.css'
import ValidationErrorsContext from './packages/form/Context/ValidationErrors.tsx'
import FormDataProvider from './packages/form/Context/FormData.tsx'
import { validate } from './packages/form/validator'
import fieldFactory from './packages/form/filedFactory.tsx'
import { type FormConfig } from './packages/form/types'

const formConfig: FormConfig = [
  {
    type: 'input',
    name: 'name',
    validations: {
      required: {
        message: 'Name is required',
      }
    }
  },
  {
    type: 'input',
    name: 'age',
    validations: {
      number: {
        minMessage: 'Age must be a number',
        min: 0,
        message: 'Age must gte 0',
      },
      required: {
        message: 'Age is required',
      }
    }
  },
  {
    type: 'select',
    name: 'country',
    emptyOptionTitle: 'Select country',
    options: {
      uk: 'Ukraine',
      pl: 'Poland'
    },
    validations: {
      required: {
        message: 'Country is required',
      }
    }
  },
  {
    type: 'checkbox',
    name: 'agree',
    title: 'I agree to the terms',
    validations: {
      required: {
        message: 'You must agree to the terms',
      }
    }
  }
];

const initFormData = {
  name: 'Disney',
  age: 87,
  country: '',
  agree: false,
};

function App() {
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})
  const [validateOnEachChange, setValidateOnEachChange] = React.useState(false);

  const [formData, setFormData] = React.useState(initFormData);

  React.useEffect(() => {
    if (!validateOnEachChange) {
      return;
    }

    const errors = validate(formData, formConfig);
    setFormErrors(errors);
  }, [formData, validateOnEachChange]);

  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formData, formConfig);
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setValidateOnEachChange(true);
      return false;
    }

    alert('submitted')
  };

  const changeValue = (name: string, value: boolean | string | string[]) => setFormData({ ...formData, [name]: value })

  return (
    <FormDataProvider.Provider value={{ formData: formData, changeFormData: changeValue }} >
      <ValidationErrorsContext.Provider value={formErrors}>
        <form onSubmit={onSubmit}>
          {formConfig.map((item) => (
            <div key={item.name}>
              {fieldFactory(item)}
            </div>
          ))}
          <button type='submit'>Submit</button>
        </form>
      </ValidationErrorsContext.Provider>
    </FormDataProvider.Provider>
  );
}

export default App

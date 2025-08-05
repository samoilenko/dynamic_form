Application has predefined config (https://github.com/samoilenko/dynamic_form/blob/main/src/App.tsx#L9) which renders a form with 3 fields

<img width="277" height="266" alt="Screenshot 2025-08-05 at 12 58 26" src="https://github.com/user-attachments/assets/5aee1cfc-528a-456c-9347-88b941f8e2fb" />

It starts showing/hiding errors when submit button is clicked.

<img width="392" height="314" alt="Screenshot 2025-08-05 at 13 02 00" src="https://github.com/user-attachments/assets/122edbaf-7867-45ff-afa3-90f0c6380187" />

If form is valid and the submit button is clicked, then the "submitted" message will be shown.

# Run
1. npm i
2. npm run dev
3. open browser

# Structure
`src/packages/form/Context` - contains two context
1. ValidationErrors - holds validation errors, https://github.com/samoilenko/dynamic_form/blob/main/src/packages/form/Context/ValidationErrors.tsx
2. FormData - holds data entered by user https://github.com/samoilenko/dynamic_form/blob/main/src/packages/form/Context/FormData.tsx

## Elements
1. https://github.com/samoilenko/dynamic_form/blob/main/src/packages/form/Checkbox.tsx
2. https://github.com/samoilenko/dynamic_form/blob/main/src/packages/form/Select.tsx
3. https://github.com/samoilenko/dynamic_form/blob/main/src/packages/form/Input.tsx

`filedFactory` - creates JSX elements(input, select, checkbox) https://github.com/samoilenko/dynamic_form/blob/main/src/packages/form/filedFactory.tsx

# Form Config

form config supports 3 types
1. input type text (type described here https://github.com/samoilenko/dynamic_form/blob/main/src/packages/form/types.d.ts#L37)
2. select element (https://github.com/samoilenko/dynamic_form/blob/main/src/packages/form/types.d.ts#L47)
3. checkbox (https://github.com/samoilenko/dynamic_form/blob/main/src/packages/form/types.d.ts#L42)

# Validations
1. required (implementation https://github.com/samoilenko/dynamic_form/blob/main/src/packages/form/validator/require.ts)
2. number (https://github.com/samoilenko/dynamic_form/blob/main/src/packages/form/validator/number.ts)

# Form config example
```
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
```

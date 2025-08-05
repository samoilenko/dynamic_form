
import React from 'react';
import FormData from './Context/FormData'
import ValidationErrors from './Context/ValidationErrors'
import { HTMLInput } from './types';

const Input = (props: HTMLInput) => {
    const { formData, changeFormData } = React.useContext(FormData);
    const errors = React.useContext(ValidationErrors);

    return <>
        <input
            type="text"
            value={formData[props.name]}
            name={props.name}
            readOnly={!!props.readonly}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeFormData(props.name, e.target.value)}
        />
        {errors[props.name] &&
            <span className='error'>{errors[props.name]}</span>
        }
    </>
};

export default Input;

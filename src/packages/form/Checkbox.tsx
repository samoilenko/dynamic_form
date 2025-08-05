
import React from 'react';
import FormData from './Context/FormData'
import ValidationErrors from './Context/ValidationErrors'
import { HTMLCheckbox } from './types';

const Checkbox = (props: HTMLCheckbox) => {
    const { formData, changeFormData } = React.useContext(FormData);
    const errors = React.useContext(ValidationErrors);

    return <>
        <label><input
            type="checkbox"
            checked={!!formData[props.name]}
            name={props.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => changeFormData(props.name, e.target.checked)}
        />{props.title}</label>

        {errors[props.name] &&
            <span className='error'>{errors[props.name]}</span>
        }
    </>
};

export default Checkbox;

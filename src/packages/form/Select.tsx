
import React from 'react';
import FormData from './Context/FormData'
import ValidationErrors from './Context/ValidationErrors'
import { HTMLSelect } from './types';

const Select = (props: HTMLSelect) => {
    const { formData, changeFormData } = React.useContext(FormData);
    const errors = React.useContext(ValidationErrors);

    return <>
        <select
            value={formData[props.name] as string}
            name={props.name}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => changeFormData(props.name, e.target.value)}
        >
            <option value="">{props.emptyOptionTitle}</option>
            {Object.entries(props.options).map(([key, value]) => (
                <option key={key} value={key}>{value}</option>
            ))}
        </select>
        {errors[props.name] &&
            <span className='error'>{errors[props.name]}</span>
        }
    </>
};

export default Select;
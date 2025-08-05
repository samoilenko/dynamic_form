import requireValidator from './require'
import numberValidator from './number'
import { type FormConfig } from '../types'

const factory = (name) => {
    switch (name) {
        case 'required':
            return requireValidator;
        case 'number':
            return numberValidator;
        default:
            return null;
    }
};

const validate = (data, formConfig: FormConfig): Record<string, string> => {
    const res = {};
    formConfig.forEach(field => {
        if (!field.validations) {
            return;
        }

        // find first validator that return false
        Object.entries(field.validations).some(([name, validatorParams]) => {
            const validator = factory(name);
            if (!validator) {
                return false;
            }

            const validationResult = validator(data[field.name], validatorParams);
            if (!validationResult.isValid) {
                res[field.name] = validationResult.message;
                return true
            }

            return false;
        });
    });

    return res;
};

export { validate, factory };

export default factory;
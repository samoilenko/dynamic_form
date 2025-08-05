import { type RequiredValidation, ValidationResult } from '../types'

const requireValidator = (value: unknown, config: RequiredValidation): ValidationResult => {
    const isValid = !(value === "" || value === undefined || value === null || value === false);

    return {
        isValid,
        message: isValid ? "" : config.message,
    };
};

export default requireValidator;
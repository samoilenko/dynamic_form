import { type NumberValidation, ValidationResult } from '../types'

const numberValidator = (value: unknown, config: NumberValidation): ValidationResult => {

    // if input is empty do ont validate as a number, add required if needed
    if (value === "") {
        return {
            isValid: true,
            message: ""
        };
    }

    const n = Number(value);
    if (isNaN(n)) {
        return {
            isValid: false,
            message: config.message,
        };
    }

    if (config.min && n < config.min) {
        return {
            isValid: false,
            message: config.minMessage!
        };
    }

    if (config.max && n > config.max) {
        return {
            isValid: false,
            message: config.maxMessage!
        };
    }

    return {
        isValid: true,
        message: ""
    };
};

export default numberValidator;
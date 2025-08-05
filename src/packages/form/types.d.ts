type CheckboxType = 'checkbox';
type RadioType = 'input';

interface ValidationResult {
    isValid: boolean;
    message: string;
}

type RequiredValidation = {
    message: string;
}

type MinValidation = {
    min: number;
    minMessage: string;
}

type MaxValidation = {
    max: number;
    maxMessage: string;
}

type NumberValidation = Partial<MinValidation> & Partial<MaxValidation> & {
    message: string;
}

type Validations = {
    required?: RequiredValidation
    number?: NumberValidation
}

type CommonElementProperties = {
    name: string;
    validations?: Validations;
}

export type HTMLInput = CommonElementProperties & {
    type: 'input';
    readonly?: boolean;
}

type HTMLCheckbox = CommonElementProperties & {
    type: CheckboxType;
    title: string;
}

type HTMLSelect = CommonElementProperties & {
    type: 'select';
    emptyOptionTitle: string;
    options: Record<string, string | number>;
}

export type HTMLElements = HTMLInput | HTMLCheckbox | HTMLSelect;


export type FormConfig = Array<HTMLElements>


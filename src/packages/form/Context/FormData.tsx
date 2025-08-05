import { createContext } from 'react';

type FormData = Record<string, boolean | number | string | string[]>;
const FormDataContext = createContext<{ formData: FormData, changeFormData: (name: string, value: boolean | string | string[]) => void }>(null!);

export default FormDataContext;

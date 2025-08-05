import Input from './Input'
import Select from './Select'
import Checkbox from './Checkbox'
import { type HTMLElements } from './types'


const fieldFactory = (params: HTMLElements) => {
    switch (params.type) {
        case 'input':
            return <Input {...params} />;
        case 'select':
            return <Select {...params} />;
        case 'checkbox':
            return <Checkbox {...params} />;
        default:
            return null;
    }
};

export default fieldFactory;

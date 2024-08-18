import { StylesConfig } from 'react-select';
import { IngredientOption } from '../types';

export const customSelectStyles: StylesConfig<IngredientOption, true> = {
    control: (provided) => ({
        ...provided,
        fontFamily: 'Poppins, sans-serif',
    }),
    option: (provided) => ({
        ...provided,
        fontFamily: 'Poppins, sans-serif',
    }),
    singleValue: (provided) => ({
        ...provided,
        fontFamily: 'Poppins, sans-serif',
    }),
    input: (provided) => ({
        ...provided,
        fontFamily: 'Poppins, sans-serif',
    }),
    menu: (provided) => ({
        ...provided,
        fontFamily: 'Poppins, sans-serif',
    }),
    multiValue: (provided) => ({
        ...provided,
        fontFamily: 'Poppins, sans-serif',
    }),
    placeholder: (provided) => ({
        ...provided,
        fontFamily: 'Poppins, sans-serif',
    }),
};
